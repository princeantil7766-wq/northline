import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useVpnStore } from "@/lib/vpn/store";
import { PROTOCOL_META } from "@/lib/vpn/types";
import { estimateLatency, getServer, serverLoad } from "@/lib/vpn/servers";
import { cn } from "@/lib/utils";

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export function SpeedView() {
  const status = useVpnStore((s) => s.status);
  const protocol = useVpnStore((s) => s.protocol);
  const obfuscation = useVpnStore((s) => s.obfuscation);
  const connectedId = useVpnStore((s) => s.connectedServerId);
  const selectedId = useVpnStore((s) => s.selectedServerId);
  const geo = useVpnStore((s) => s.clientGeo);
  const last = useVpnStore((s) => s.lastSpeed);
  const running = useVpnStore((s) => s.speedRunning);
  const [phase, setPhase] = useState<"idle" | "latency" | "down" | "up">("idle");
  const [progress, setProgress] = useState(0);
  const [liveDown, setLiveDown] = useState(0);
  const [liveUp, setLiveUp] = useState(0);
  const cancel = useRef(0);

  useEffect(() => () => { cancel.current += 1; }, []);

  async function run() {
    if (status !== "connected") return;
    const gen = ++cancel.current;
    const proto = obfuscation ? "stealth" : protocol;
    const server = getServer(connectedId ?? selectedId);
    const ping = estimateLatency(geo, server, proto);
    const load = serverLoad(server.id);
    const cap = 940 * PROTOCOL_META[proto].speed * (1 - load / 220);
    const downTarget = cap * (0.72 + Math.random() * 0.22);
    const upTarget = cap * (0.18 + Math.random() * 0.12);
    const jitter = 1 + Math.random() * 4;

    useVpnStore.getState().setSpeedRunning(true);
    setPhase("latency");
    setProgress(8);
    await sleep(700);
    if (gen !== cancel.current) return;

    setPhase("down");
    for (let i = 0; i <= 20; i++) {
      if (gen !== cancel.current) return;
      const t = i / 20;
      const eased = 1 - (1 - t) ** 2;
      setLiveDown(downTarget * (0.55 + 0.45 * eased));
      setProgress(10 + t * 50);
      await sleep(90);
    }

    setPhase("up");
    for (let i = 0; i <= 16; i++) {
      if (gen !== cancel.current) return;
      const t = i / 16;
      const eased = 1 - (1 - t) ** 2;
      setLiveUp(upTarget * (0.5 + 0.5 * eased));
      setProgress(60 + t * 40);
      await sleep(90);
    }

    useVpnStore.getState().setLastSpeed({
      at: Date.now(),
      downMbps: Number(downTarget.toFixed(1)),
      upMbps: Number(upTarget.toFixed(1)),
      pingMs: ping,
      jitterMs: Number(jitter.toFixed(1)),
      serverId: server.id,
      protocol: proto,
    });
    useVpnStore.getState().log(
      "info",
      `Speed test ${downTarget.toFixed(0)} / ${upTarget.toFixed(0)} Mbps via ${server.city}`,
    );
    useVpnStore.getState().setSpeedRunning(false);
    setPhase("idle");
    setProgress(100);
  }

  const server = getServer(connectedId ?? selectedId);
  const result = last;

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-6">
      <div>
        <p className="font-mono text-xs tracking-wide text-subtle">PATH QUALITY</p>
        <h1 className="mt-1 text-2xl font-medium tracking-tight text-fg">Speed test</h1>
        <p className="mt-1 text-sm text-muted">
          Measures the tunneled path to {server.city}. Connect first to run a test.
        </p>
      </div>

      <div className="rounded-xl bg-surface p-6">
        <div className="relative mx-auto grid size-44 place-items-center">
          <svg viewBox="0 0 120 120" className="absolute inset-0" aria-hidden="true">
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="var(--color-border)"
              strokeWidth="4"
            />
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="var(--color-fg)"
              strokeWidth="4"
              strokeDasharray={`${(progress / 100) * 327} 327`}
              strokeLinecap="round"
              transform="rotate(-90 60 60)"
            />
          </svg>
          <div className="text-center">
            <p className="font-mono text-3xl font-medium tabular-nums tracking-tight text-fg">
              {phase === "down"
                ? liveDown.toFixed(0)
                : phase === "up"
                  ? liveUp.toFixed(0)
                  : result
                    ? result.downMbps.toFixed(0)
                    : "—"}
            </p>
            <p className="font-mono text-xs text-muted">
              {phase === "latency"
                ? "Ping"
                : phase === "up"
                  ? "Mbps up"
                  : "Mbps down"}
            </p>
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-muted">
          {status !== "connected"
            ? "Connect to a city to test the tunnel."
            : running
              ? phase === "latency"
                ? "Sampling latency"
                : phase === "down"
                  ? "Saturating download"
                  : "Saturating upload"
              : "Ready"}
        </p>
        <div className="mt-4 flex justify-center">
          <Button
            onClick={() => void run()}
            disabled={status !== "connected" || running}
            size="lg"
          >
            {running ? "Testing" : "Run test"}
          </Button>
        </div>
      </div>

      {result && (
        <dl className="grid grid-cols-2 gap-3 rounded-xl bg-surface p-4 font-mono text-sm sm:grid-cols-4">
          {[
            ["Down", `${result.downMbps.toFixed(1)} Mbps`],
            ["Up", `${result.upMbps.toFixed(1)} Mbps`],
            ["Ping", `${result.pingMs} ms`],
            ["Jitter", `${result.jitterMs} ms`],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-xs text-subtle">{k}</dt>
              <dd className={cn("mt-1 tabular-nums text-fg")}>{v}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
