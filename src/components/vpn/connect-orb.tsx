import { Power } from "lucide-react";
import { useVpnStore } from "@/lib/vpn/store";
import { cn } from "@/lib/utils";

const STATUS_COPY: Record<string, string> = {
  disconnected: "Tap to connect",
  connecting: "Handshaking",
  connected: "Connected",
  disconnecting: "Closing tunnel",
  blocked: "Traffic held",
};

export function ConnectOrb() {
  const status = useVpnStore((s) => s.status);
  const label = useVpnStore((s) => s.handshakeLabel);
  const step = useVpnStore((s) => s.handshakeStep);
  const total = useVpnStore((s) => s.handshakeTotal);
  const connect = useVpnStore((s) => s.connect);
  const disconnect = useVpnStore((s) => s.disconnect);

  const live = status === "connected";
  const busy = status === "connecting" || status === "disconnecting";
  const blocked = status === "blocked";

  function onToggle() {
    if (status === "connected" || status === "connecting") {
      void disconnect();
      return;
    }
    void connect();
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={onToggle}
        aria-pressed={live}
        aria-label={STATUS_COPY[status] ?? "Connect"}
        className={cn(
          "relative grid size-36 place-items-center rounded-full bg-surface text-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_14%,transparent)] transition-[box-shadow,transform] duration-150 ease-out",
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
          live && "shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-live)_55%,transparent)]",
          blocked && "shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-danger)_50%,transparent)]",
        )}
      >
        <svg viewBox="0 0 140 140" className="absolute inset-0" aria-hidden="true">
          <circle
            cx="70"
            cy="70"
            r="64"
            fill="none"
            stroke="var(--color-border)"
            strokeWidth="1"
          />
          {busy && (
            <g className="handshake-orbit">
              <circle
                cx="70"
                cy="70"
                r="64"
                fill="none"
                stroke="var(--color-fg)"
                strokeWidth="1.6"
                strokeDasharray="36 280"
                strokeLinecap="round"
              />
            </g>
          )}
          {live && (
            <circle
              cx="70"
              cy="70"
              r="64"
              fill="none"
              stroke="var(--color-live)"
              strokeWidth="1.4"
              className="live-pulse"
            />
          )}
        </svg>
        <Power
          className={cn(
            "relative size-8",
            live ? "text-live" : blocked ? "text-danger" : "text-fg",
          )}
          strokeWidth={1.5}
        />
      </button>
      <div className="text-center">
        <p className="text-sm font-medium tracking-wide text-fg">
          {STATUS_COPY[status]}
        </p>
        <p className="mt-0.5 min-h-5 font-mono text-xs text-muted">
          {busy
            ? `${label} · ${Math.min(step + 1, total)}/${total}`
            : live
              ? "Tunnel up · tap to stop"
              : blocked
                ? "Kill switch armed"
                : "US private network"}
        </p>
      </div>
    </div>
  );
}
