import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  estimateLatency,
  getServer,
  pickFastest,
  virtualIp,
} from "./servers";
import type {
  AppView,
  ClientGeo,
  ConnectionStatus,
  DohProvider,
  LogEntry,
  Protocol,
  SpeedResult,
  TrafficSample,
} from "./types";
import { PROTOCOL_META } from "./types";

const MAX_LOGS = 80;
const MAX_SAMPLES = 36;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function handshakeSteps(protocol: Protocol, multiHop: boolean): string[] {
  const base =
    protocol === "stealth"
      ? [
          "Opening TLS 1.3 cover session",
          "Authenticating client certificate",
          "Obfuscating handshake as HTTPS",
          "Deriving session keys",
          "Bringing up stealth tunnel",
          "Binding private DNS",
        ]
      : protocol === "wireguard"
        ? [
            "Resolving endpoint",
            "Noise_IK handshake",
            "Deriving transport keys",
            "Bringing up tunnel interface",
            "Installing routes",
            "Binding private DNS",
          ]
        : protocol.startsWith("openvpn")
          ? [
              "Resolving endpoint",
              "TLS control channel",
              "Authenticating credentials",
              "Pushing client config",
              "Bringing up tun adapter",
              "Binding private DNS",
            ]
          : [
              "Resolving endpoint",
              "IKE_SA_INIT",
              "IKE_AUTH + EAP",
              "Child SA established",
              "Installing IPsec policies",
              "Binding private DNS",
            ];
  if (multiHop) {
    return [
      "Selecting entry node",
      ...base.slice(0, 3),
      "Chaining exit hop",
      ...base.slice(3),
    ];
  }
  return base;
}

export interface VpnState {
  view: AppView;
  status: ConnectionStatus;
  protocol: Protocol;
  selectedServerId: string;
  connectedServerId: string | null;
  multiHop: boolean;
  multiHopExitId: string;
  handshakeLabel: string;
  handshakeStep: number;
  handshakeTotal: number;
  sessionStartedAt: number | null;
  bytesUp: number;
  bytesDown: number;
  samples: TrafficSample[];
  pingLive: number;
  virtualIp: string | null;
  clientGeo: ClientGeo | null;
  favorites: string[];
  killSwitch: boolean;
  dnsProtection: boolean;
  ipv6Protection: boolean;
  adBlock: boolean;
  malwareBlock: boolean;
  obfuscation: boolean;
  autoConnect: boolean;
  splitTunnel: boolean;
  splitApps: string[];
  dohProvider: DohProvider;
  logs: LogEntry[];
  lastSpeed: SpeedResult | null;
  speedRunning: boolean;
  query: string;
  regionFilter: "all" | "west" | "midwest" | "south" | "northeast";
  tagFilter: "all" | "p2p" | "streaming" | "stealth" | "multi-hop";
  setView: (view: AppView) => void;
  setQuery: (query: string) => void;
  setRegionFilter: (region: VpnState["regionFilter"]) => void;
  setTagFilter: (tag: VpnState["tagFilter"]) => void;
  setProtocol: (protocol: Protocol) => void;
  selectServer: (id: string) => void;
  toggleFavorite: (id: string) => void;
  setKillSwitch: (v: boolean) => void;
  setDnsProtection: (v: boolean) => void;
  setIpv6Protection: (v: boolean) => void;
  setAdBlock: (v: boolean) => void;
  setMalwareBlock: (v: boolean) => void;
  setObfuscation: (v: boolean) => void;
  setAutoConnect: (v: boolean) => void;
  setSplitTunnel: (v: boolean) => void;
  toggleSplitApp: (id: string) => void;
  setDohProvider: (p: DohProvider) => void;
  setMultiHop: (v: boolean) => void;
  setMultiHopExit: (id: string) => void;
  setClientGeo: (geo: ClientGeo | null) => void;
  log: (level: LogEntry["level"], message: string) => void;
  tickTraffic: () => void;
  connect: (serverId?: string) => Promise<void>;
  disconnect: () => Promise<void>;
  smartConnect: () => Promise<void>;
  setSpeedRunning: (v: boolean) => void;
  setLastSpeed: (r: SpeedResult | null) => void;
}

let connectGen = 0;

export const useVpnStore = create<VpnState>()(
  persist(
    (set, get) => ({
      view: "connect",
      status: "disconnected",
      protocol: "wireguard",
      selectedServerId: "chi-1",
      connectedServerId: null,
      multiHop: false,
      multiHopExitId: "nyc-1",
      handshakeLabel: "",
      handshakeStep: 0,
      handshakeTotal: 0,
      sessionStartedAt: null,
      bytesUp: 0,
      bytesDown: 0,
      samples: [],
      pingLive: 0,
      virtualIp: null,
      clientGeo: null,
      favorites: ["nyc-1", "lax-1", "chi-1"],
      killSwitch: true,
      dnsProtection: true,
      ipv6Protection: true,
      adBlock: true,
      malwareBlock: true,
      obfuscation: false,
      autoConnect: false,
      splitTunnel: false,
      splitApps: ["updates"],
      dohProvider: "northline",
      logs: [],
      lastSpeed: null,
      speedRunning: false,
      query: "",
      regionFilter: "all",
      tagFilter: "all",
      setView: (view) => set({ view }),
      setQuery: (query) => set({ query }),
      setRegionFilter: (regionFilter) => set({ regionFilter }),
      setTagFilter: (tagFilter) => set({ tagFilter }),
      setProtocol: (protocol) => {
        set({ protocol });
        get().log("info", `Protocol set to ${PROTOCOL_META[protocol].label}`);
      },
      selectServer: (id) => set({ selectedServerId: id }),
      toggleFavorite: (id) =>
        set((s) => ({
          favorites: s.favorites.includes(id)
            ? s.favorites.filter((x) => x !== id)
            : [...s.favorites, id],
        })),
      setKillSwitch: (killSwitch) => {
        set({ killSwitch });
        if (!killSwitch && get().status === "blocked") {
          set({ status: "disconnected" });
          get().log("warn", "Kill switch disarmed. Traffic unrestricted.");
        } else {
          get().log("info", killSwitch ? "Kill switch armed." : "Kill switch off.");
        }
      },
      setDnsProtection: (dnsProtection) => set({ dnsProtection }),
      setIpv6Protection: (ipv6Protection) => set({ ipv6Protection }),
      setAdBlock: (adBlock) => set({ adBlock }),
      setMalwareBlock: (malwareBlock) => set({ malwareBlock }),
      setObfuscation: (obfuscation) => {
        set({ obfuscation });
        if (obfuscation && get().protocol === "wireguard") {
          get().log("info", "Obfuscation on — wrapping WireGuard in TLS 443.");
        }
      },
      setAutoConnect: (autoConnect) => set({ autoConnect }),
      setSplitTunnel: (splitTunnel) => set({ splitTunnel }),
      toggleSplitApp: (id) =>
        set((s) => ({
          splitApps: s.splitApps.includes(id)
            ? s.splitApps.filter((x) => x !== id)
            : [...s.splitApps, id],
        })),
      setDohProvider: (dohProvider) => set({ dohProvider }),
      setMultiHop: (multiHop) => set({ multiHop }),
      setMultiHopExit: (multiHopExitId) => set({ multiHopExitId }),
      setClientGeo: (clientGeo) => set({ clientGeo }),
      log: (level, message) =>
        set((s) => ({
          logs: [
            {
              id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
              at: Date.now(),
              level,
              message,
            },
            ...s.logs,
          ].slice(0, MAX_LOGS),
        })),
      tickTraffic: () => {
        const { status, protocol, connectedServerId, clientGeo } = get();
        if (status !== "connected" || !connectedServerId) return;
        const server = getServer(connectedServerId);
        const factor = PROTOCOL_META[protocol].speed;
        const down = (18_000 + Math.random() * 220_000) * factor;
        const up = (4_000 + Math.random() * 48_000) * factor;
        const base = estimateLatency(clientGeo, server, protocol);
        const pingLive = Math.max(6, Math.round(base + (Math.random() - 0.45) * 6));
        const sample: TrafficSample = { t: Date.now(), down, up };
        set((s) => ({
          bytesDown: s.bytesDown + down,
          bytesUp: s.bytesUp + up,
          pingLive,
          samples: [...s.samples, sample].slice(-MAX_SAMPLES),
        }));
      },
      connect: async (serverId) => {
        const current = get();
        if (current.status === "connecting" || current.status === "connected") return;
        const id = serverId ?? current.selectedServerId;
        const server = getServer(id);
        const gen = ++connectGen;
        const protocol = current.obfuscation ? "stealth" : current.protocol;
        const steps = handshakeSteps(protocol, current.multiHop);
        set({
          status: "connecting",
          selectedServerId: id,
          handshakeStep: 0,
          handshakeTotal: steps.length,
          handshakeLabel: steps[0] ?? "",
          samples: [],
          bytesUp: 0,
          bytesDown: 0,
        });
        get().log(
          "info",
          `Connecting to ${server.city}${server.district ? ` (${server.district})` : ""}, ${server.code} via ${PROTOCOL_META[protocol].label}`,
        );
        for (let i = 0; i < steps.length; i++) {
          if (gen !== connectGen) return;
          set({ handshakeStep: i, handshakeLabel: steps[i] ?? "" });
          await sleep(240 + Math.random() * 260);
        }
        if (gen !== connectGen) return;
        const vIp = virtualIp(server);
        const ping = estimateLatency(get().clientGeo, server, protocol);
        set({
          status: "connected",
          connectedServerId: server.id,
          sessionStartedAt: Date.now(),
          virtualIp: vIp,
          pingLive: ping,
          handshakeLabel: "Tunnel up",
          handshakeStep: steps.length,
        });
        const hop = get().multiHop ? ` · hop via ${getServer(get().multiHopExitId).city}` : "";
        get().log("info", `Tunnel up. Exit ${vIp}${hop}.`);
      },
      disconnect: async () => {
        connectGen += 1;
        const { status, killSwitch, connectedServerId } = get();
        if (status !== "connected" && status !== "connecting") {
          if (status === "blocked" && !killSwitch) set({ status: "disconnected" });
          return;
        }
        set({ status: "disconnecting", handshakeLabel: "Tearing down session" });
        const server = connectedServerId ? getServer(connectedServerId) : null;
        await sleep(380);
        if (killSwitch) {
          set({
            status: "blocked",
            connectedServerId: null,
            sessionStartedAt: null,
            virtualIp: null,
            pingLive: 0,
            handshakeLabel: "Kill switch holding traffic",
          });
          get().log(
            "warn",
            `Disconnected from ${server?.city ?? "server"}. Kill switch is holding traffic.`,
          );
        } else {
          set({
            status: "disconnected",
            connectedServerId: null,
            sessionStartedAt: null,
            virtualIp: null,
            pingLive: 0,
            handshakeLabel: "",
          });
          get().log("info", `Disconnected from ${server?.city ?? "server"}.`);
        }
      },
      smartConnect: async () => {
        const { protocol, clientGeo, obfuscation } = get();
        const proto = obfuscation ? "stealth" : protocol;
        const best = pickFastest(clientGeo, proto);
        set({ selectedServerId: best.id });
        await get().connect(best.id);
      },
      setSpeedRunning: (speedRunning) => set({ speedRunning }),
      setLastSpeed: (lastSpeed) => set({ lastSpeed }),
    }),
    {
      name: "northline-vpn",
      skipHydration: true,
      partialize: (s) => ({
        protocol: s.protocol,
        selectedServerId: s.selectedServerId,
        favorites: s.favorites,
        killSwitch: s.killSwitch,
        dnsProtection: s.dnsProtection,
        ipv6Protection: s.ipv6Protection,
        adBlock: s.adBlock,
        malwareBlock: s.malwareBlock,
        obfuscation: s.obfuscation,
        autoConnect: s.autoConnect,
        splitTunnel: s.splitTunnel,
        splitApps: s.splitApps,
        dohProvider: s.dohProvider,
        multiHop: s.multiHop,
        multiHopExitId: s.multiHopExitId,
      }),
    },
  ),
);
