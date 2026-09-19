export type Region = "west" | "midwest" | "south" | "northeast";

export type ServerTag = "standard" | "p2p" | "streaming" | "stealth" | "multi-hop";

export type Protocol =
  | "wireguard"
  | "openvpn-udp"
  | "openvpn-tcp"
  | "ikev2"
  | "stealth";

export type ConnectionStatus =
  | "disconnected"
  | "connecting"
  | "connected"
  | "disconnecting"
  | "blocked";

export type AppView =
  | "connect"
  | "servers"
  | "shield"
  | "speed"
  | "activity"
  | "settings";

export type DohProvider = "northline" | "cloudflare" | "quad9" | "nextdns";

export type LogLevel = "info" | "warn" | "error";

export interface VpnServer {
  id: string;
  city: string;
  state: string;
  code: string;
  region: Region;
  lat: number;
  lng: number;
  district?: string;
  tags: ServerTag[];
}

export interface ClientGeo {
  ip: string;
  city: string;
  region: string;
  lat: number;
  lng: number;
}

export interface LogEntry {
  id: string;
  at: number;
  level: LogLevel;
  message: string;
}

export interface TrafficSample {
  t: number;
  down: number;
  up: number;
}

export interface SpeedResult {
  at: number;
  downMbps: number;
  upMbps: number;
  pingMs: number;
  jitterMs: number;
  serverId: string;
  protocol: Protocol;
}

export const PROTOCOL_META: Record<
  Protocol,
  { label: string; short: string; latency: number; speed: number; blurb: string }
> = {
  wireguard: {
    label: "WireGuard",
    short: "WG",
    latency: 0,
    speed: 1,
    blurb: "Modern kernel-level tunnel. Lowest overhead, fastest reconnect.",
  },
  "openvpn-udp": {
    label: "OpenVPN UDP",
    short: "OVPN",
    latency: 8,
    speed: 0.52,
    blurb: "Battle-tested UDP. Broad compatibility, moderate throughput.",
  },
  "openvpn-tcp": {
    label: "OpenVPN TCP",
    short: "TCP",
    latency: 18,
    speed: 0.32,
    blurb: "TCP 443. Passes restrictive firewalls at the cost of speed.",
  },
  ikev2: {
    label: "IKEv2 / IPsec",
    short: "IKE",
    latency: 4,
    speed: 0.68,
    blurb: "Mobile-first. Survives network switches without dropping.",
  },
  stealth: {
    label: "Stealth (TLS)",
    short: "STL",
    latency: 22,
    speed: 0.28,
    blurb: "Looks like ordinary HTTPS. Use on censored or hostile networks.",
  },
};

export const REGION_LABEL: Record<Region, string> = {
  west: "West",
  midwest: "Midwest",
  south: "South",
  northeast: "Northeast",
};

export const SPLIT_APPS = [
  { id: "browser", label: "Browser" },
  { id: "mail", label: "Mail" },
  { id: "slack", label: "Slack" },
  { id: "zoom", label: "Zoom" },
  { id: "spotify", label: "Spotify" },
  { id: "netflix", label: "Netflix" },
  { id: "steam", label: "Steam" },
  { id: "discord", label: "Discord" },
  { id: "terminal", label: "Terminal" },
  { id: "updates", label: "System updates" },
] as const;
