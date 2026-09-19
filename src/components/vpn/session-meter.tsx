import { useEffect, useState } from "react";
import { useVpnStore } from "@/lib/vpn/store";
import { formatBps, formatBytes, formatDuration } from "@/lib/vpn/format";
import { PROTOCOL_META } from "@/lib/vpn/types";
import { getServer } from "@/lib/vpn/servers";

function Spark({ down, up }: { down: number[]; up: number[] }) {
  const w = 280;
  const h = 56;
  if (down.length < 2) {
    return (
      <div className="flex h-14 items-center font-mono text-xs text-subtle">
        Waiting for traffic
      </div>
    );
  }
  const max = Math.max(...down, ...up, 1);
  const toPts = (arr: number[]) =>
    arr
      .map((v, i) => {
        const x = (i / (arr.length - 1)) * w;
        const y = h - (v / max) * (h - 6) - 3;
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-14 w-full" aria-hidden="true">
      <polyline
        points={toPts(down)}
        fill="none"
        stroke="var(--color-fg)"
        strokeWidth="1.4"
      />
      <polyline
        points={toPts(up)}
        fill="none"
        stroke="var(--color-muted)"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function SessionMeter() {
  const status = useVpnStore((s) => s.status);
  const started = useVpnStore((s) => s.sessionStartedAt);
  const bytesUp = useVpnStore((s) => s.bytesUp);
  const bytesDown = useVpnStore((s) => s.bytesDown);
  const samples = useVpnStore((s) => s.samples);
  const pingLive = useVpnStore((s) => s.pingLive);
  const protocol = useVpnStore((s) => s.protocol);
  const obfuscation = useVpnStore((s) => s.obfuscation);
  const connectedId = useVpnStore((s) => s.connectedServerId);
  const virtualIp = useVpnStore((s) => s.virtualIp);
  const clientGeo = useVpnStore((s) => s.clientGeo);
  const multiHop = useVpnStore((s) => s.multiHop);
  const exitId = useVpnStore((s) => s.multiHopExitId);

  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (status !== "connected") return;
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [status]);

  const last = samples[samples.length - 1];
  const proto = obfuscation ? "stealth" : protocol;
  const server = connectedId ? getServer(connectedId) : null;

  return (
    <div className="space-y-4 rounded-xl bg-surface p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs tracking-wide text-subtle">SESSION</p>
          <p className="mt-1 font-mono text-2xl font-medium tabular-nums tracking-tight text-fg">
            {status === "connected" && started
              ? formatDuration(now - started)
              : "00:00:00"}
          </p>
        </div>
        <p className="font-mono text-xs text-muted">
          {PROTOCOL_META[proto].short}
          {multiHop ? " · MH" : ""}
        </p>
      </div>
      <Spark
        down={samples.map((s) => s.down)}
        up={samples.map((s) => s.up)}
      />
      <dl className="grid grid-cols-2 gap-3 font-mono text-xs">
        <div>
          <dt className="text-subtle">Download</dt>
          <dd className="mt-0.5 tabular-nums text-fg">
            {formatBytes(bytesDown)}
            {last ? ` · ${formatBps(last.down)}` : ""}
          </dd>
        </div>
        <div>
          <dt className="text-subtle">Upload</dt>
          <dd className="mt-0.5 tabular-nums text-fg">
            {formatBytes(bytesUp)}
            {last ? ` · ${formatBps(last.up)}` : ""}
          </dd>
        </div>
        <div>
          <dt className="text-subtle">Ping</dt>
          <dd className="mt-0.5 tabular-nums text-fg">
            {status === "connected" ? `${pingLive} ms` : "—"}
          </dd>
        </div>
        <div>
          <dt className="text-subtle">Your IP</dt>
          <dd className="mt-0.5 truncate text-fg">{clientGeo?.ip ?? "—"}</dd>
        </div>
        <div className="col-span-2">
          <dt className="text-subtle">Path</dt>
          <dd className="mt-0.5 text-fg">
            {status === "connected" && server
              ? `${clientGeo?.city || "You"} → ${server.city}${multiHop ? ` → ${getServer(exitId).city}` : ""} · ${virtualIp}`
              : "Not tunneled"}
          </dd>
        </div>
      </dl>
    </div>
  );
}
