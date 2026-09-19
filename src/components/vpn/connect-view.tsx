import { ConnectOrb } from "./connect-orb";
import { MapLegend, NetworkMap } from "./network-map";
import { SelectedServerCard } from "./server-list";
import { SessionMeter } from "./session-meter";
import { Button } from "@/components/ui/button";
import { useVpnStore } from "@/lib/vpn/store";
import { SERVERS } from "@/lib/vpn/servers";

export function ConnectView() {
  const smartConnect = useVpnStore((s) => s.smartConnect);
  const status = useVpnStore((s) => s.status);
  const setView = useVpnStore((s) => s.setView);
  const disconnect = useVpnStore((s) => s.disconnect);
  const setKillSwitch = useVpnStore((s) => s.setKillSwitch);
  const blocked = status === "blocked";

  return (
    <div className="flex min-h-0 flex-col gap-4 lg:h-full lg:flex-row">
      <section className="flex min-h-0 min-w-0 flex-1 flex-col gap-3">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono text-xs tracking-wide text-subtle">
              50 STATES + DC · {SERVERS.length} CITIES
            </p>
            <h1 className="mt-1 text-2xl font-medium tracking-tight text-fg">
              United States network
            </h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setView("servers")}>
              All servers
            </Button>
            <Button
              onClick={() => void smartConnect()}
              disabled={status === "connecting" || status === "connected"}
            >
              Fastest
            </Button>
          </div>
        </div>
        <div className="relative h-72 sm:h-96 lg:h-auto lg:min-h-0 lg:flex-1">
          <div className="h-full pb-32">
            <NetworkMap />
          </div>
          <div className="absolute inset-x-0 bottom-3 flex justify-center">
            <ConnectOrb />
          </div>
        </div>
        <MapLegend />
        {blocked && (
          <div className="rounded-xl bg-danger/10 p-4">
            <p className="text-sm font-medium text-danger">
              Internet held by kill switch
            </p>
            <p className="mt-1 text-sm text-muted">
              The tunnel is down. Traffic stays blocked until you reconnect or disarm the switch.
            </p>
            <div className="mt-3 flex gap-2">
              <Button onClick={() => void useVpnStore.getState().connect()}>
                Reconnect
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setKillSwitch(false);
                  void disconnect();
                }}
              >
                Disarm
              </Button>
            </div>
          </div>
        )}
      </section>
      <aside className="flex w-full shrink-0 flex-col gap-3 lg:w-80">
        <SelectedServerCard />
        <SessionMeter />
      </aside>
    </div>
  );
}
