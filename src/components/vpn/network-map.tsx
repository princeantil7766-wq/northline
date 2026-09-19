import { useEffect, useMemo, useState } from "react";
import { SERVERS, US_OUTLINE, getServer } from "@/lib/vpn/servers";
import { useVpnStore } from "@/lib/vpn/store";
import { cn } from "@/lib/utils";

const W = 800;
const H = 500;

export function project(
  lat: number,
  lng: number,
  w = W,
  h = H,
): { x: number; y: number } {
  if (lat > 50) {
    return {
      x: 40 + ((lng + 170) / 54) * 124,
      y: h - 112 + ((71.4 - lat) / 20) * 80,
    };
  }
  if (lng < -140 && lat < 30) {
    return {
      x: 176 + ((lng + 161) / 10) * 72,
      y: h - 84 + ((22.6 - lat) / 5) * 50,
    };
  }
  const minLng = -125;
  const maxLng = -66.4;
  const minLat = 24.4;
  const maxLat = 49.5;
  const padX = 30;
  const padY = 22;
  return {
    x: padX + ((lng - minLng) / (maxLng - minLng)) * (w - padX * 2),
    y: padY + ((maxLat - lat) / (maxLat - minLat)) * (h - padY * 2 - 18),
  };
}

function outlinePath() {
  return US_OUTLINE.map(([lng, lat], i) => {
    const { x, y } = project(lat, lng);
    return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ");
}

const GRID_LATS = [25, 30, 35, 40, 45];
const GRID_LNGS = [-120, -110, -100, -90, -80, -70];

export function NetworkMap() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const selectedId = useVpnStore((s) => s.selectedServerId);
  const connectedId = useVpnStore((s) => s.connectedServerId);
  const status = useVpnStore((s) => s.status);
  const geo = useVpnStore((s) => s.clientGeo);
  const selectServer = useVpnStore((s) => s.selectServer);

  const outline = useMemo(outlinePath, []);
  const selected = getServer(selectedId);
  const origin = geo ? project(geo.lat, geo.lng) : null;
  const dest = project(selected.lat, selected.lng);
  const live = status === "connected";

  const grid = useMemo(() => {
    const latLines = GRID_LATS.map((lat) => {
      const a = project(lat, -125);
      const b = project(lat, -67);
      return { lat, a, b };
    });
    const lngLines = GRID_LNGS.map((lng) => {
      const a = project(24.5, lng);
      const b = project(49.3, lng);
      return { lng, a, b };
    });
    return { latLines, lngLines };
  }, []);

  return (
    <div className="relative h-full min-h-64 w-full overflow-hidden rounded-xl bg-surface">
      {mounted ? (
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-full w-full"
          role="img"
          aria-label="United States server map"
        >
          <rect width={W} height={H} fill="var(--color-surface)" />

          {grid.latLines.map((line) => (
            <g key={line.lat}>
              <line
                x1={line.a.x}
                y1={line.a.y}
                x2={line.b.x}
                y2={line.b.y}
                stroke="var(--color-border)"
                strokeWidth="0.8"
              />
              <text
                x={W - 28}
                y={line.b.y - 4}
                fill="var(--color-subtle)"
                fontSize="9"
                fontFamily="var(--font-mono)"
                textAnchor="end"
              >
                {line.lat}°N
              </text>
            </g>
          ))}
          {grid.lngLines.map((line) => (
            <g key={line.lng}>
              <line
                x1={line.a.x}
                y1={line.a.y}
                x2={line.b.x}
                y2={line.b.y}
                stroke="var(--color-border)"
                strokeWidth="0.8"
              />
              <text
                x={line.a.x + 4}
                y={H - 14}
                fill="var(--color-subtle)"
                fontSize="9"
                fontFamily="var(--font-mono)"
              >
                {Math.abs(line.lng)}°W
              </text>
            </g>
          ))}

          <path
            d={outline}
            fill="color-mix(in oklab, var(--color-fg) 4%, transparent)"
            stroke="color-mix(in oklab, var(--color-fg) 22%, transparent)"
            strokeWidth="1.2"
          />

          <rect
            x="32"
            y={H - 118}
            width="132"
            height="88"
            rx="8"
            fill="none"
            stroke="var(--color-border)"
            strokeDasharray="3 4"
          />
          <text
            x="40"
            y={H - 104}
            fill="var(--color-subtle)"
            fontSize="9"
            fontFamily="var(--font-mono)"
          >
            AK
          </text>
          <text
            x="176"
            y={H - 88}
            fill="var(--color-subtle)"
            fontSize="9"
            fontFamily="var(--font-mono)"
          >
            HI
          </text>

          {origin && geo && geo.lng > -130 && geo.lat < 50 && geo.lat > 24 && (
            <g>
              <circle cx={origin.x} cy={origin.y} r="4" fill="var(--color-fg)" />
              <text
                x={origin.x + 8}
                y={origin.y - 8}
                fill="var(--color-muted)"
                fontSize="10"
                fontFamily="var(--font-sans)"
              >
                You
              </text>
            </g>
          )}

          {origin && (live || status === "connecting") && (
            <path
              d={`M ${origin.x} ${origin.y} Q ${(origin.x + dest.x) / 2} ${Math.min(origin.y, dest.y) - 48} ${dest.x} ${dest.y}`}
              fill="none"
              stroke={live ? "var(--color-live)" : "var(--color-fg)"}
              strokeWidth="1.4"
              className="route-flow"
              opacity={0.85}
            />
          )}

          {SERVERS.map((server) => {
            const { x, y } = project(server.lat, server.lng);
            const isSelected = server.id === selectedId;
            const isLive = live && server.id === connectedId;
            return (
              <g key={server.id}>
                <circle
                  cx={x}
                  cy={y}
                  r={isSelected ? 11 : 9}
                  fill="transparent"
                  className="cursor-pointer"
                  onClick={() => selectServer(server.id)}
                >
                  <title>{`${server.city}, ${server.code}`}</title>
                </circle>
                <circle
                  cx={x}
                  cy={y}
                  r={isSelected ? 3.6 : 2.2}
                  fill={
                    isLive
                      ? "var(--color-live)"
                      : isSelected
                        ? "var(--color-fg)"
                        : "color-mix(in oklab, var(--color-fg) 45%, transparent)"
                  }
                  className="pointer-events-none"
                />
                {isSelected && (
                  <circle
                    cx={x}
                    cy={y}
                    r="7"
                    fill="none"
                    stroke={isLive ? "var(--color-live)" : "var(--color-fg)"}
                    strokeWidth="1"
                    className="pointer-events-none"
                    opacity="0.7"
                  />
                )}
              </g>
            );
          })}
        </svg>
      ) : (
        <div className="h-full w-full" />
      )}
      <div className="pointer-events-none absolute top-3 left-3 font-mono text-xs text-subtle">
        US FLEET · {SERVERS.length} NODES
      </div>
    </div>
  );
}

export function MapLegend({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-4 font-mono text-xs text-muted", className)}>
      <span className="inline-flex items-center gap-1.5">
        <span className="size-1.5 rounded-full bg-fg" />
        Selected
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="size-1.5 rounded-full bg-live" />
        Live exit
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="size-1.5 rounded-full bg-muted" />
        PoP
      </span>
    </div>
  );
}
