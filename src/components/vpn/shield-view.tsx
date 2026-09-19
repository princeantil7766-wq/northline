import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { useVpnStore } from "@/lib/vpn/store";
import { SPLIT_APPS } from "@/lib/vpn/types";
import { SERVERS, getServer } from "@/lib/vpn/servers";
import { cn } from "@/lib/utils";

function Row({
  title,
  hint,
  checked,
  onCheckedChange,
}: {
  title: string;
  hint: string;
  checked: boolean;
  onCheckedChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-4">
      <div className="min-w-0">
        <p className="text-sm font-medium text-fg">{title}</p>
        <p className="mt-0.5 text-sm text-muted">{hint}</p>
      </div>
      <Switch checked={checked} onCheckedChange={onCheckedChange} aria-label={title} />
    </div>
  );
}

export function ShieldView() {
  const killSwitch = useVpnStore((s) => s.killSwitch);
  const dnsProtection = useVpnStore((s) => s.dnsProtection);
  const ipv6Protection = useVpnStore((s) => s.ipv6Protection);
  const adBlock = useVpnStore((s) => s.adBlock);
  const malwareBlock = useVpnStore((s) => s.malwareBlock);
  const obfuscation = useVpnStore((s) => s.obfuscation);
  const splitTunnel = useVpnStore((s) => s.splitTunnel);
  const splitApps = useVpnStore((s) => s.splitApps);
  const multiHop = useVpnStore((s) => s.multiHop);
  const multiHopExitId = useVpnStore((s) => s.multiHopExitId);
  const selectedServerId = useVpnStore((s) => s.selectedServerId);
  const doh = useVpnStore((s) => s.dohProvider);

  const armed = [killSwitch, dnsProtection, ipv6Protection, adBlock, malwareBlock].filter(Boolean).length;

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <div>
        <p className="font-mono text-xs tracking-wide text-subtle">NETWORK SHIELD</p>
        <h1 className="mt-1 text-2xl font-medium tracking-tight text-fg">Protection</h1>
        <p className="mt-1 text-sm text-muted">
          {armed} of 5 core controls armed. Status applies on the next handshake.
        </p>
      </div>

      <section className="rounded-xl bg-surface px-4">
        <Row
          title="Kill switch"
          hint="Block all traffic if the tunnel drops. Prevents IP leaks during reconnects."
          checked={killSwitch}
          onCheckedChange={useVpnStore.getState().setKillSwitch}
        />
        <div className="h-px bg-border" />
        <Row
          title="DNS leak protection"
          hint="Force every lookup through NORTHLINE resolvers. No ISP DNS."
          checked={dnsProtection}
          onCheckedChange={useVpnStore.getState().setDnsProtection}
        />
        <div className="h-px bg-border" />
        <Row
          title="IPv6 leak protection"
          hint="Disable native IPv6 so the adapter cannot skip the tunnel."
          checked={ipv6Protection}
          onCheckedChange={useVpnStore.getState().setIpv6Protection}
        />
        <div className="h-px bg-border" />
        <Row
          title="Tracker blocking"
          hint="Sinkhole known ad and analytics hosts at the resolver."
          checked={adBlock}
          onCheckedChange={useVpnStore.getState().setAdBlock}
        />
        <div className="h-px bg-border" />
        <Row
          title="Malware sinkhole"
          hint="Block command-and-control and phishing domains on the DNS path."
          checked={malwareBlock}
          onCheckedChange={useVpnStore.getState().setMalwareBlock}
        />
      </section>

      <section className="rounded-xl bg-surface p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-fg">DNS over HTTPS</p>
            <p className="mt-0.5 text-sm text-muted">
              Resolver used inside the tunnel.
            </p>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {(
            [
              ["northline", "NORTHLINE"],
              ["cloudflare", "Cloudflare 1.1.1.1"],
              ["quad9", "Quad9"],
              ["nextdns", "NextDNS"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => useVpnStore.getState().setDohProvider(id)}
              className={cn(
                "h-9 rounded-full px-3 text-xs font-medium",
                doh === id ? "bg-primary text-primary-fg" : "bg-elevated text-muted",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      <section className="rounded-xl bg-surface px-4">
        <Row
          title="Stealth obfuscation"
          hint="Wrap the tunnel in TLS on 443 so it looks like ordinary HTTPS."
          checked={obfuscation}
          onCheckedChange={useVpnStore.getState().setObfuscation}
        />
        <div className="h-px bg-border" />
        <Row
          title="Multi-hop"
          hint="Route through two US cities. Entry is the selected server; pick an exit below."
          checked={multiHop}
          onCheckedChange={useVpnStore.getState().setMultiHop}
        />
        {multiHop && (
          <div className="pb-4">
            <p className="mb-2 text-xs text-muted">
              Entry {getServer(selectedServerId).city} → exit
            </p>
            <select
              className="h-10 w-full rounded-md bg-elevated px-3 text-sm text-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_12%,transparent)] outline-none"
              value={multiHopExitId}
              onChange={(e) => useVpnStore.getState().setMultiHopExit(e.target.value)}
              aria-label="Multi-hop exit city"
            >
              {SERVERS.filter((s) => s.id !== selectedServerId).map((s) => (
                <option key={s.id} value={s.id}>
                  {s.city}, {s.code}
                  {s.district ? ` · ${s.district}` : ""}
                </option>
              ))}
            </select>
          </div>
        )}
      </section>

      <section className="rounded-xl bg-surface p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-fg">Split tunneling</p>
            <p className="mt-0.5 text-sm text-muted">
              Checked apps bypass the tunnel. Everything else stays inside.
            </p>
          </div>
          <Switch
            checked={splitTunnel}
            onCheckedChange={useVpnStore.getState().setSplitTunnel}
            aria-label="Split tunneling"
          />
        </div>
        <ul className={cn("mt-3 grid grid-cols-1 gap-1 sm:grid-cols-2", !splitTunnel && "opacity-40")}>
          {SPLIT_APPS.map((app) => {
            const on = splitApps.includes(app.id);
            return (
              <li key={app.id}>
                <button
                  type="button"
                  disabled={!splitTunnel}
                  onClick={() => useVpnStore.getState().toggleSplitApp(app.id)}
                  className="flex h-11 w-full items-center justify-between rounded-lg px-3 text-sm hover:bg-elevated"
                >
                  <span>{app.label}</span>
                  {on ? <Badge>bypass</Badge> : <Badge variant="default">tunnel</Badge>}
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
