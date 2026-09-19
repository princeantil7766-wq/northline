import { Star } from "lucide-react";
import { SERVERS, estimateLatency, getServer, serverLoad } from "@/lib/vpn/servers";
import { useVpnStore } from "@/lib/vpn/store";
import { formatLoad, formatPing, loadTone } from "@/lib/vpn/format";
import type { Region, VpnServer } from "@/lib/vpn/types";
import { REGION_LABEL } from "@/lib/vpn/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const REGIONS: Array<"all" | Region> = ["all", "west", "midwest", "south", "northeast"];
const TAGS: Array<"all" | "p2p" | "streaming" | "stealth" | "multi-hop"> = [
  "all",
  "p2p",
  "streaming",
  "stealth",
  "multi-hop",
];

function matches(server: VpnServer, q: string) {
  if (!q) return true;
  const hay = `${server.city} ${server.state} ${server.code} ${server.district ?? ""}`.toLowerCase();
  return hay.includes(q.trim().toLowerCase());
}

function ServerRow({
  server,
  compact,
}: {
  server: VpnServer;
  compact?: boolean;
}) {
  const selectedId = useVpnStore((s) => s.selectedServerId);
  const connectedId = useVpnStore((s) => s.connectedServerId);
  const status = useVpnStore((s) => s.status);
  const protocol = useVpnStore((s) => s.protocol);
  const geo = useVpnStore((s) => s.clientGeo);
  const favorites = useVpnStore((s) => s.favorites);
  const selectServer = useVpnStore((s) => s.selectServer);
  const toggleFavorite = useVpnStore((s) => s.toggleFavorite);
  const connect = useVpnStore((s) => s.connect);

  const ping = estimateLatency(geo, server, protocol);
  const load = serverLoad(server.id);
  const tone = loadTone(load);
  const selected = selectedId === server.id;
  const live = status === "connected" && connectedId === server.id;
  const fav = favorites.includes(server.id);

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-lg px-2 py-2 transition-colors duration-150",
        selected ? "bg-elevated" : "hover:bg-elevated/60",
      )}
    >
      <button
        type="button"
        aria-label={fav ? "Remove favorite" : "Add favorite"}
        onClick={() => toggleFavorite(server.id)}
        className="grid size-10 shrink-0 place-items-center text-subtle hover:text-fg"
      >
        <Star className={cn("size-4", fav && "fill-fg text-fg")} strokeWidth={1.5} />
      </button>
      <button
        type="button"
        onClick={() => selectServer(server.id)}
        className="min-w-0 flex-1 text-left"
      >
        <div className="flex items-baseline gap-2">
          <span className="truncate text-sm font-medium text-fg">
            {server.city}
            {server.district ? ` · ${server.district}` : ""}
          </span>
          <span className="font-mono text-xs text-subtle">{server.code}</span>
          {live && <Badge variant="live">Live</Badge>}
        </div>
        {!compact && (
          <p className="mt-0.5 font-mono text-xs text-muted">
            {server.state} · {REGION_LABEL[server.region]}
          </p>
        )}
      </button>
      <div className="hidden shrink-0 text-right sm:block">
        <p className="font-mono text-xs tabular-nums text-fg">{formatPing(ping)}</p>
        <p
          className={cn(
            "font-mono text-xs tabular-nums",
            tone === "live" && "text-live",
            tone === "warn" && "text-warn",
            tone === "danger" && "text-danger",
          )}
        >
          {formatLoad(load)}
        </p>
      </div>
      <Button
        size="sm"
        variant={live ? "outline" : "subtle"}
        className="shrink-0"
        onClick={() => void connect(server.id)}
        disabled={live || status === "connecting"}
      >
        {live ? "On" : "Use"}
      </Button>
    </div>
  );
}

export function ServerFilters() {
  const query = useVpnStore((s) => s.query);
  const setQuery = useVpnStore((s) => s.setQuery);
  const region = useVpnStore((s) => s.regionFilter);
  const setRegion = useVpnStore((s) => s.setRegionFilter);
  const tag = useVpnStore((s) => s.tagFilter);
  const setTag = useVpnStore((s) => s.setTagFilter);

  return (
    <div className="space-y-3">
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search city or state"
        aria-label="Search servers"
      />
      <div className="flex flex-wrap gap-1.5">
        {REGIONS.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRegion(r)}
            className={cn(
              "h-8 rounded-full px-3 text-xs font-medium",
              region === r ? "bg-primary text-primary-fg" : "bg-elevated text-muted",
            )}
          >
            {r === "all" ? "All" : REGION_LABEL[r]}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5">
        {TAGS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTag(t)}
            className={cn(
              "h-8 rounded-full px-3 text-xs font-medium",
              tag === t ? "bg-primary text-primary-fg" : "bg-elevated text-muted",
            )}
          >
            {t === "all"
              ? "Any type"
              : t === "p2p"
                ? "P2P"
                : t === "multi-hop"
                  ? "Multi-hop"
                  : t[0]!.toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

export function ServerList({ compact = false }: { compact?: boolean }) {
  const query = useVpnStore((s) => s.query);
  const region = useVpnStore((s) => s.regionFilter);
  const tag = useVpnStore((s) => s.tagFilter);
  const favorites = useVpnStore((s) => s.favorites);

  const rows = SERVERS.filter((s) => {
    if (!matches(s, query)) return false;
    if (region !== "all" && s.region !== region) return false;
    if (tag !== "all" && !s.tags.includes(tag)) return false;
    return true;
  }).sort((a, b) => {
    const af = favorites.includes(a.id) ? 0 : 1;
    const bf = favorites.includes(b.id) ? 0 : 1;
    if (af !== bf) return af - bf;
    return a.city.localeCompare(b.city) || a.id.localeCompare(b.id);
  });

  return (
    <ScrollArea className="h-full min-h-80">
      <div className="pr-2">
        {rows.length === 0 && (
          <p className="px-3 py-8 text-center text-sm text-muted">
            No cities match that filter.
          </p>
        )}
        {rows.map((server) => (
          <ServerRow key={server.id} server={server} compact={compact} />
        ))}
      </div>
    </ScrollArea>
  );
}

export function SelectedServerCard() {
  const selectedId = useVpnStore((s) => s.selectedServerId);
  const protocol = useVpnStore((s) => s.protocol);
  const geo = useVpnStore((s) => s.clientGeo);
  const status = useVpnStore((s) => s.status);
  const virtualIp = useVpnStore((s) => s.virtualIp);
  const pingLive = useVpnStore((s) => s.pingLive);
  const server = getServer(selectedId);
  const ping = status === "connected" ? pingLive : estimateLatency(geo, server, protocol);
  const load = serverLoad(server.id);

  return (
    <div className="rounded-xl bg-surface p-4">
      <p className="font-mono text-xs tracking-wide text-subtle">EXIT NODE</p>
      <h2 className="mt-1 text-xl font-medium tracking-tight text-fg">
        {server.city}
      </h2>
      <p className="text-sm text-muted">
        {server.district ? `${server.district} · ` : ""}
        {server.state} · {server.code}
      </p>
      <dl className="mt-4 grid grid-cols-2 gap-3 font-mono text-xs">
        <div>
          <dt className="text-subtle">Latency</dt>
          <dd className="mt-0.5 tabular-nums text-fg">{formatPing(ping)}</dd>
        </div>
        <div>
          <dt className="text-subtle">Load</dt>
          <dd className="mt-0.5 tabular-nums text-fg">{formatLoad(load)}</dd>
        </div>
        <div className="col-span-2">
          <dt className="text-subtle">Exit IP</dt>
          <dd className="mt-0.5 text-fg">
            {status === "connected" && virtualIp ? virtualIp : "—"}
          </dd>
        </div>
      </dl>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {server.tags.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </div>
  );
}
