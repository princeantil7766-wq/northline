import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useVpnStore } from "@/lib/vpn/store";
import { collectWebRtcIps, classifyLeak, fetchClientGeo } from "@/lib/vpn/diagnostics";
import { cn } from "@/lib/utils";

export function ActivityView() {
  const logs = useVpnStore((s) => s.logs);
  const status = useVpnStore((s) => s.status);
  const virtualIp = useVpnStore((s) => s.virtualIp);
  const clientGeo = useVpnStore((s) => s.clientGeo);
  const [rtc, setRtc] = useState<string[] | null>(null);
  const [scanning, setScanning] = useState(false);

  async function scan() {
    setScanning(true);
    const [ips, geo] = await Promise.all([
      collectWebRtcIps(),
      fetchClientGeo(),
    ]);
    if (geo) useVpnStore.getState().setClientGeo(geo);
    setRtc(ips);
    setScanning(false);
  }

  const leak = classifyLeak(
    virtualIp,
    rtc ?? [],
    status === "connected",
  );

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <div>
        <p className="font-mono text-xs tracking-wide text-subtle">DIAGNOSTICS</p>
        <h1 className="mt-1 text-2xl font-medium tracking-tight text-fg">Activity</h1>
        <p className="mt-1 text-sm text-muted">
          Handshake log and a live WebRTC leak check against your current path.
        </p>
      </div>

      <section className="rounded-xl bg-surface p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-fg">WebRTC leak check</p>
            <p className="mt-0.5 text-sm text-muted">
              Reads ICE candidates from this browser. Real check, not a mock.
            </p>
          </div>
          <Button variant="outline" onClick={() => void scan()} disabled={scanning}>
            {scanning ? "Scanning" : rtc ? "Rescan" : "Scan"}
          </Button>
        </div>
        <dl className="mt-4 grid gap-3 font-mono text-xs sm:grid-cols-2">
          <div>
            <dt className="text-subtle">Device IP</dt>
            <dd className="mt-0.5 text-fg">{clientGeo?.ip ?? "—"}</dd>
          </div>
          <div>
            <dt className="text-subtle">Tunnel exit</dt>
            <dd className="mt-0.5 text-fg">{virtualIp ?? "Not connected"}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-subtle">ICE candidates</dt>
            <dd className="mt-0.5 text-fg">
              {rtc === null
                ? "Not scanned"
                : rtc.length
                  ? rtc.join(" · ")
                  : "None advertised"}
            </dd>
          </div>
        </dl>
        {rtc !== null && (
          <div className="mt-3">
            <Badge variant={leak.ok ? "live" : "danger"}>
              {leak.ok ? "No leak" : "Leak"}
            </Badge>
            <p className="mt-2 text-sm text-muted">{leak.detail}</p>
          </div>
        )}
      </section>

      <section className="rounded-xl bg-surface p-2">
        <p className="px-3 py-2 font-mono text-xs tracking-wide text-subtle">EVENT LOG</p>
        <ul className="max-h-96 overflow-auto">
          {logs.length === 0 && (
            <li className="px-3 py-6 text-sm text-muted">No events yet.</li>
          )}
          {logs.map((entry) => (
            <li
              key={entry.id}
              className="flex gap-3 border-t border-border px-3 py-2.5 font-mono text-xs"
            >
              <time className="w-16 shrink-0 tabular-nums text-subtle">
                {new Date(entry.at).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </time>
              <span
                className={cn(
                  "w-12 shrink-0 uppercase",
                  entry.level === "error" && "text-danger",
                  entry.level === "warn" && "text-warn",
                  entry.level === "info" && "text-muted",
                )}
              >
                {entry.level}
              </span>
              <span className="text-fg">{entry.message}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
