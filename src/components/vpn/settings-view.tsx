import { Switch } from "@/components/ui/switch";
import { useVpnStore } from "@/lib/vpn/store";
import { PROTOCOL_META, type Protocol } from "@/lib/vpn/types";
import { SERVERS, STATE_COUNT } from "@/lib/vpn/servers";
import { cn } from "@/lib/utils";

const PROTOCOLS = Object.keys(PROTOCOL_META) as Protocol[];

export function SettingsView() {
  const protocol = useVpnStore((s) => s.protocol);
  const autoConnect = useVpnStore((s) => s.autoConnect);
  const setProtocol = useVpnStore((s) => s.setProtocol);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <div>
        <p className="font-mono text-xs tracking-wide text-subtle">CLIENT</p>
        <h1 className="mt-1 text-2xl font-medium tracking-tight text-fg">Settings</h1>
      </div>

      <section className="rounded-xl bg-surface p-4">
        <p className="text-sm font-medium text-fg">Tunnel protocol</p>
        <p className="mt-0.5 text-sm text-muted">
          WireGuard is the default. Stealth disguises the session as HTTPS.
        </p>
        <div className="mt-3 grid gap-2">
          {PROTOCOLS.map((id) => {
            const meta = PROTOCOL_META[id];
            const on = protocol === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setProtocol(id)}
                className={cn(
                  "rounded-lg p-3 text-left transition-colors duration-150",
                  on ? "bg-elevated" : "hover:bg-elevated/50",
                )}
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-sm font-medium text-fg">{meta.label}</span>
                  <span className="font-mono text-xs text-subtle">{meta.short}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{meta.blurb}</p>
              </button>
            );
          })}
        </div>
      </section>

      <section className="flex items-start justify-between gap-4 rounded-xl bg-surface p-4">
        <div>
          <p className="text-sm font-medium text-fg">Auto-connect on launch</p>
          <p className="mt-0.5 text-sm text-muted">
            Pick the lowest-latency US city when the client opens.
          </p>
        </div>
        <Switch
          checked={autoConnect}
          onCheckedChange={useVpnStore.getState().setAutoConnect}
          aria-label="Auto-connect on launch"
        />
      </section>

      <section className="rounded-xl bg-surface p-4">
        <p className="text-sm font-medium text-fg">About this client</p>
        <p className="mt-2 text-sm text-muted">
          NORTHLINE is a US-only private network client: {SERVERS.length} cities,
          {" "}{STATE_COUNT} states. Browsers cannot install a system VPN tunnel, so
          the handshake, traffic meters, and speed test run as a full client
          simulation. The WebRTC leak check and public IP lookup are live.
        </p>
        <p className="mt-3 font-mono text-xs text-subtle">NORTHLINE · US fleet 2026</p>
      </section>
    </div>
  );
}
