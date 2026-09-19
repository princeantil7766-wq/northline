import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServerFilters, ServerList } from "./server-list";
import { useVpnStore } from "@/lib/vpn/store";
import { SERVERS, STATE_COUNT } from "@/lib/vpn/servers";

export function ServersView() {
  const smartConnect = useVpnStore((s) => s.smartConnect);
  const status = useVpnStore((s) => s.status);

  return (
    <div className="flex min-h-0 flex-col gap-4 lg:h-full">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-mono text-xs tracking-wide text-subtle">
            FLEET DIRECTORY
          </p>
          <h1 className="mt-1 text-2xl font-medium tracking-tight text-fg">
            All US servers
          </h1>
          <p className="mt-1 text-sm text-muted">
            {SERVERS.length} cities across {STATE_COUNT} states and D.C. Favorites rise to the top.
          </p>
        </div>
        <Button
          onClick={() => void smartConnect()}
          disabled={status === "connecting"}
        >
          <Zap className="size-4" />
          Fastest city
        </Button>
      </div>
      <ServerFilters />
      <div className="h-96 min-h-0 flex-1 rounded-xl bg-surface p-2 lg:h-auto">
        <ServerList />
      </div>
    </div>
  );
}
