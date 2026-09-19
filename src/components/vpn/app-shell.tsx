import { useEffect } from "react";
import {
  Activity,
  Gauge,
  Globe2,
  MapPinned,
  Settings,
  Shield,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ConnectView } from "./connect-view";
import { ServersView } from "./servers-view";
import { ShieldView } from "./shield-view";
import { SpeedView } from "./speed-view";
import { ActivityView } from "./activity-view";
import { SettingsView } from "./settings-view";
import { NorthlineMark } from "./mark";
import { useVpnStore } from "@/lib/vpn/store";
import { PROTOCOL_META, type AppView } from "@/lib/vpn/types";
import { getServer } from "@/lib/vpn/servers";
import { cn } from "@/lib/utils";

const NAV: { id: AppView; label: string; icon: typeof Globe2 }[] = [
  { id: "connect", label: "Connect", icon: Globe2 },
  { id: "servers", label: "Servers", icon: MapPinned },
  { id: "shield", label: "Shield", icon: Shield },
  { id: "speed", label: "Speed", icon: Gauge },
  { id: "activity", label: "Activity", icon: Activity },
  { id: "settings", label: "Settings", icon: Settings },
];

export function AppShell() {
  const view = useVpnStore((s) => s.view);
  const setView = useVpnStore((s) => s.setView);
  const status = useVpnStore((s) => s.status);
  const protocol = useVpnStore((s) => s.protocol);
  const obfuscation = useVpnStore((s) => s.obfuscation);
  const selectedId = useVpnStore((s) => s.selectedServerId);
  const connectedId = useVpnStore((s) => s.connectedServerId);

  useEffect(() => {
    const result = useVpnStore.persist.rehydrate();
    void Promise.resolve(result).then(() => {
      const store = useVpnStore.getState();
      if (store.logs.length === 0) {
        store.log("info", "NORTHLINE client ready. US fleet online.");
      }
      if (store.autoConnect) void store.smartConnect();
    });
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      useVpnStore.getState().tickTraffic();
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  const server = getServer(connectedId ?? selectedId);
  const proto = obfuscation ? "stealth" : protocol;
  const statusLabel =
    status === "connected"
      ? "Protected"
      : status === "connecting"
        ? "Connecting"
        : status === "blocked"
          ? "Held"
          : "Exposed";

  return (
    <TooltipProvider delayDuration={250}>
      <div className="flex min-h-dvh flex-col bg-bg text-fg lg:flex-row">
        <header className="flex items-center justify-between gap-3 border-b border-border px-4 py-3 lg:hidden">
          <div className="flex items-center gap-2">
            <NorthlineMark className="size-6" />
            <span className="text-sm font-medium tracking-wide">NORTHLINE</span>
          </div>
          <StatusChip status={status} label={statusLabel} />
        </header>

        <nav
          className="order-last flex border-t border-border lg:order-none lg:h-auto lg:w-16 lg:flex-col lg:border-t-0 lg:border-r"
          aria-label="Primary"
        >
          <div className="hidden items-center justify-center py-5 lg:flex">
            <NorthlineMark className="size-6" />
          </div>
          <ul className="flex w-full justify-around lg:flex-col lg:gap-1 lg:px-2">
            {NAV.map((item) => {
              const Icon = item.icon;
              const on = view === item.id;
              return (
                <li key={item.id} className="flex-1 lg:flex-none">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        onClick={() => setView(item.id)}
                        aria-current={on ? "page" : undefined}
                        aria-label={item.label}
                        className={cn(
                          "flex h-14 w-full flex-col items-center justify-center gap-1 text-xs text-muted transition-colors duration-150 lg:h-12 lg:rounded-md",
                          on && "text-fg lg:bg-elevated",
                        )}
                      >
                        <Icon className="size-5" strokeWidth={1.5} />
                        <span className="lg:hidden">{item.label}</span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="hidden lg:block">
                      {item.label}
                    </TooltipContent>
                  </Tooltip>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          <div className="hidden items-center justify-between gap-3 border-b border-border px-6 py-3 lg:flex">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium tracking-widest">NORTHLINE</span>
              <span className="font-mono text-xs text-subtle">US PRIVATE NETWORK</span>
            </div>
            <div className="flex items-center gap-3 font-mono text-xs text-muted">
              <span>{PROTOCOL_META[proto].label}</span>
              <span className="text-border">/</span>
              <span>
                {server.city}, {server.code}
              </span>
              <StatusChip status={status} label={statusLabel} />
            </div>
          </div>
          <main className="min-h-0 flex-1 overflow-auto p-4 pb-6 sm:p-6">
            {view === "connect" ? (
              <ConnectView />
            ) : view === "servers" ? (
              <ServersView />
            ) : view === "shield" ? (
              <ShieldView />
            ) : view === "speed" ? (
              <SpeedView />
            ) : view === "activity" ? (
              <ActivityView />
            ) : (
              <SettingsView />
            )}
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}

function StatusChip({
  status,
  label,
}: {
  status: string;
  label: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-xs",
        status === "connected" && "bg-live/15 text-live",
        status === "blocked" && "bg-danger/15 text-danger",
        status === "connecting" && "bg-warn/15 text-warn",
        (status === "disconnected" || status === "disconnecting") &&
          "bg-elevated text-muted",
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          status === "connected" && "bg-live",
          status === "blocked" && "bg-danger",
          status === "connecting" && "bg-warn",
          (status === "disconnected" || status === "disconnecting") && "bg-muted",
        )}
      />
      {label}
    </span>
  );
}
