import type { Protocol, Region, ServerTag, VpnServer } from "./types";
import { PROTOCOL_META } from "./types";

function s(
  id: string,
  city: string,
  state: string,
  code: string,
  region: Region,
  lat: number,
  lng: number,
  tags: ServerTag[] = ["standard"],
  district?: string,
): VpnServer {
  return { id, city, state, code, region, lat, lng, tags, district };
}

export const SERVERS: VpnServer[] = [
  s("sea-1", "Seattle", "Washington", "WA", "west", 47.6062, -122.3321, ["standard", "p2p"]),
  s("sea-2", "Seattle", "Washington", "WA", "west", 47.6205, -122.3493, ["stealth"], "Tacoma PoP"),
  s("pdx-1", "Portland", "Oregon", "OR", "west", 45.5152, -122.6784),
  s("sfo-1", "San Francisco", "California", "CA", "west", 37.7749, -122.4194, ["standard", "streaming"]),
  s("sfo-2", "San Francisco", "California", "CA", "west", 37.8044, -122.2712, ["p2p"], "Oakland"),
  s("sjc-1", "San Jose", "California", "CA", "west", 37.3382, -121.8863, ["standard", "stealth"]),
  s("sac-1", "Sacramento", "California", "CA", "west", 38.5816, -121.4944),
  s("lax-1", "Los Angeles", "California", "CA", "west", 34.0522, -118.2437, ["standard", "streaming"]),
  s("lax-2", "Los Angeles", "California", "CA", "west", 34.1478, -118.1445, ["p2p"], "Pasadena"),
  s("lax-3", "Los Angeles", "California", "CA", "west", 33.7701, -118.1937, ["stealth"], "Long Beach"),
  s("san-1", "San Diego", "California", "CA", "west", 32.7157, -117.1611),
  s("las-1", "Las Vegas", "Nevada", "NV", "west", 36.1699, -115.1398, ["standard", "streaming"]),
  s("rno-1", "Reno", "Nevada", "NV", "west", 39.5296, -119.8138),
  s("boi-1", "Boise", "Idaho", "ID", "west", 43.615, -116.2023),
  s("phx-1", "Phoenix", "Arizona", "AZ", "west", 33.4484, -112.074, ["standard", "streaming"]),
  s("tus-1", "Tucson", "Arizona", "AZ", "west", 32.2226, -110.9747),
  s("slc-1", "Salt Lake City", "Utah", "UT", "west", 40.7608, -111.891),
  s("den-1", "Denver", "Colorado", "CO", "west", 39.7392, -104.9903, ["standard", "p2p", "multi-hop"]),
  s("abq-1", "Albuquerque", "New Mexico", "NM", "west", 35.0844, -106.6504),
  s("bil-1", "Billings", "Montana", "MT", "west", 45.7833, -108.5007),
  s("cys-1", "Cheyenne", "Wyoming", "WY", "west", 41.14, -104.8202),
  s("anc-1", "Anchorage", "Alaska", "AK", "west", 61.2181, -149.9003),
  s("hnl-1", "Honolulu", "Hawaii", "HI", "west", 21.3069, -157.8583, ["standard", "streaming"]),

  s("fargo-1", "Fargo", "North Dakota", "ND", "midwest", 46.8772, -96.7898),
  s("fsd-1", "Sioux Falls", "South Dakota", "SD", "midwest", 43.5446, -96.7311),
  s("oma-1", "Omaha", "Nebraska", "NE", "midwest", 41.2565, -95.9345),
  s("ict-1", "Wichita", "Kansas", "KS", "midwest", 37.6872, -97.3301),
  s("msp-1", "Minneapolis", "Minnesota", "MN", "midwest", 44.9778, -93.265, ["standard", "p2p"]),
  s("dsm-1", "Des Moines", "Iowa", "IA", "midwest", 41.5868, -93.625),
  s("stl-1", "St. Louis", "Missouri", "MO", "midwest", 38.627, -90.1994),
  s("mci-1", "Kansas City", "Missouri", "MO", "midwest", 39.0997, -94.5786, ["standard", "multi-hop"]),
  s("mke-1", "Milwaukee", "Wisconsin", "WI", "midwest", 43.0389, -87.9065),
  s("chi-1", "Chicago", "Illinois", "IL", "midwest", 41.8781, -87.6298, ["standard", "streaming", "p2p"]),
  s("chi-2", "Chicago", "Illinois", "IL", "midwest", 41.85, -87.65, ["stealth"], "Aurora"),
  s("ind-1", "Indianapolis", "Indiana", "IN", "midwest", 39.7684, -86.1581),
  s("dtw-1", "Detroit", "Michigan", "MI", "midwest", 42.3314, -83.0458, ["standard", "p2p"]),
  s("cmh-1", "Columbus", "Ohio", "OH", "midwest", 39.9612, -82.9988),
  s("cle-1", "Cleveland", "Ohio", "OH", "midwest", 41.4993, -81.6944),
  s("cvg-1", "Cincinnati", "Ohio", "OH", "midwest", 39.1031, -84.512),

  s("okc-1", "Oklahoma City", "Oklahoma", "OK", "south", 35.4676, -97.5164),
  s("dfw-1", "Dallas", "Texas", "TX", "south", 32.7767, -96.797, ["standard", "streaming", "p2p"]),
  s("dfw-2", "Dallas", "Texas", "TX", "south", 32.7555, -97.3308, ["stealth"], "Fort Worth"),
  s("iah-1", "Houston", "Texas", "TX", "south", 29.7604, -95.3698, ["standard", "streaming"]),
  s("aus-1", "Austin", "Texas", "TX", "south", 30.2672, -97.7431, ["standard", "p2p"]),
  s("sat-1", "San Antonio", "Texas", "TX", "south", 29.4241, -98.4936),
  s("lit-1", "Little Rock", "Arkansas", "AR", "south", 34.7465, -92.2896),
  s("msy-1", "New Orleans", "Louisiana", "LA", "south", 29.9511, -90.0715),
  s("sdf-1", "Louisville", "Kentucky", "KY", "south", 38.2527, -85.7585),
  s("bna-1", "Nashville", "Tennessee", "TN", "south", 36.1627, -86.7816, ["standard", "streaming"]),
  s("mem-1", "Memphis", "Tennessee", "TN", "south", 35.1495, -90.049),
  s("jan-1", "Jackson", "Mississippi", "MS", "south", 32.2988, -90.1848),
  s("bhm-1", "Birmingham", "Alabama", "AL", "south", 33.5186, -86.8104),
  s("atl-1", "Atlanta", "Georgia", "GA", "south", 33.749, -84.388, ["standard", "streaming", "multi-hop"]),
  s("atl-2", "Atlanta", "Georgia", "GA", "south", 33.883, -84.514, ["p2p"], "Marietta"),
  s("chs-1", "Charleston", "South Carolina", "SC", "south", 32.7765, -79.9311),
  s("clt-1", "Charlotte", "North Carolina", "NC", "south", 35.2271, -80.8431, ["standard", "streaming"]),
  s("rdu-1", "Raleigh", "North Carolina", "NC", "south", 35.7796, -78.6382),
  s("jax-1", "Jacksonville", "Florida", "FL", "south", 30.3322, -81.6557),
  s("tpa-1", "Tampa", "Florida", "FL", "south", 27.9506, -82.4572),
  s("mco-1", "Orlando", "Florida", "FL", "south", 28.5383, -81.3792, ["standard", "streaming"]),
  s("mia-1", "Miami", "Florida", "FL", "south", 25.7617, -80.1918, ["standard", "streaming", "p2p"]),
  s("mia-2", "Miami", "Florida", "FL", "south", 26.1224, -80.1373, ["stealth"], "Fort Lauderdale"),
  s("ric-1", "Richmond", "Virginia", "VA", "south", 37.5407, -77.436),
  s("orf-1", "Virginia Beach", "Virginia", "VA", "south", 36.8529, -75.978),
  s("crw-1", "Charleston", "West Virginia", "WV", "south", 38.3498, -81.6326),
  s("bwi-1", "Baltimore", "Maryland", "MD", "south", 39.2904, -76.6122),
  s("ilg-1", "Wilmington", "Delaware", "DE", "south", 39.7391, -75.5398),
  s("dca-1", "Washington", "District of Columbia", "DC", "south", 38.9072, -77.0369, ["standard", "stealth"]),
  s("dca-2", "Washington", "District of Columbia", "DC", "south", 38.8816, -77.091, ["multi-hop"], "Arlington"),

  s("pwm-1", "Portland", "Maine", "ME", "northeast", 43.6591, -70.2568),
  s("mht-1", "Manchester", "New Hampshire", "NH", "northeast", 42.9956, -71.4548),
  s("btv-1", "Burlington", "Vermont", "VT", "northeast", 44.4759, -73.2121),
  s("bos-1", "Boston", "Massachusetts", "MA", "northeast", 42.3601, -71.0589, ["standard", "streaming", "p2p"]),
  s("pvd-1", "Providence", "Rhode Island", "RI", "northeast", 41.824, -71.4128),
  s("bdl-1", "Hartford", "Connecticut", "CT", "northeast", 41.7658, -72.6734),
  s("nyc-1", "New York", "New York", "NY", "northeast", 40.7128, -74.006, ["standard", "streaming", "p2p"]),
  s("nyc-2", "New York", "New York", "NY", "northeast", 40.6782, -73.9442, ["stealth"], "Brooklyn"),
  s("nyc-3", "New York", "New York", "NY", "northeast", 40.7282, -73.7949, ["multi-hop"], "Queens"),
  s("buf-1", "Buffalo", "New York", "NY", "northeast", 42.8864, -78.8784),
  s("ewr-1", "Newark", "New Jersey", "NJ", "northeast", 40.7357, -74.1724, ["standard", "p2p"]),
  s("phl-1", "Philadelphia", "Pennsylvania", "PA", "northeast", 39.9526, -75.1652, ["standard", "streaming"]),
  s("pit-1", "Pittsburgh", "Pennsylvania", "PA", "northeast", 40.4406, -79.9959),
];

const BY_ID = new Map(SERVERS.map((server) => [server.id, server]));

export function getServer(id: string | null | undefined): VpnServer {
  return (id && BY_ID.get(id)) || SERVERS.find((s) => s.id === "chi-1")!;
}

export function hash32(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function serverLoad(id: string): number {
  const h = hash32(id + ":load");
  const bias =
    id.startsWith("nyc") || id.startsWith("lax") || id.startsWith("chi")
      ? 18
      : 0;
  return 11 + (h % 62) + bias;
}

export function virtualIp(server: VpnServer): string {
  const h = hash32(server.id);
  const a =
    server.region === "west"
      ? 104
      : server.region === "south"
        ? 72
        : server.region === "midwest"
          ? 50
          : 23;
  const b = 8 + (h % 180);
  const c = (h >>> 8) % 256;
  const d = 1 + ((h >>> 16) % 254);
  return `${a}.${b}.${c}.${d}`;
}

export function haversineKm(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number,
): number {
  const r = 6371;
  const p1 = (lat1 * Math.PI) / 180;
  const p2 = (lat2 * Math.PI) / 180;
  const dp = ((lat2 - lat1) * Math.PI) / 180;
  const dl = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dp / 2) ** 2 +
    Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) ** 2;
  return 2 * r * Math.asin(Math.min(1, Math.sqrt(a)));
}

export function estimateLatency(
  origin: { lat: number; lng: number } | null,
  server: VpnServer,
  protocol: Protocol,
): number {
  const from = origin ?? { lat: 39.1, lng: -94.58 };
  const km = haversineKm(from.lat, from.lng, server.lat, server.lng);
  const rtt = km * 0.0135 + 8;
  const load = serverLoad(server.id) * 0.18;
  return Math.max(6, Math.round(rtt + load + PROTOCOL_META[protocol].latency));
}

export function pickFastest(
  origin: { lat: number; lng: number } | null,
  protocol: Protocol,
  pool: VpnServer[] = SERVERS,
): VpnServer {
  let best = pool[0]!;
  let bestMs = Infinity;
  for (const server of pool) {
    const ms = estimateLatency(origin, server, protocol);
    if (ms < bestMs) {
      best = server;
      bestMs = ms;
    }
  }
  return best;
}

export const US_OUTLINE: [number, number][] = [
  [-124.73, 48.16],
  [-124.21, 46.97],
  [-124.38, 42.92],
  [-124.41, 40.44],
  [-123.73, 38.95],
  [-122.38, 37.22],
  [-122.42, 36.57],
  [-121.87, 36.28],
  [-120.63, 34.58],
  [-117.12, 32.53],
  [-114.72, 32.72],
  [-110.91, 31.33],
  [-108.21, 31.33],
  [-106.53, 31.78],
  [-103.06, 28.98],
  [-97.14, 25.96],
  [-97.39, 25.84],
  [-93.21, 29.71],
  [-89.1, 28.91],
  [-89.02, 30.22],
  [-88.39, 30.38],
  [-85.0, 29.68],
  [-82.93, 29.16],
  [-82.05, 26.53],
  [-80.87, 25.2],
  [-80.38, 25.24],
  [-80.12, 26.87],
  [-81.17, 31.05],
  [-80.66, 32.22],
  [-75.53, 35.23],
  [-75.72, 36.55],
  [-75.88, 37.88],
  [-75.47, 38.46],
  [-73.9, 40.57],
  [-71.88, 41.22],
  [-70.66, 41.49],
  [-69.95, 41.81],
  [-70.65, 42.86],
  [-67.14, 44.64],
  [-67.79, 47.07],
  [-69.23, 47.45],
  [-70.03, 46.69],
  [-71.51, 45.02],
  [-74.34, 44.99],
  [-76.37, 44.32],
  [-79.17, 43.61],
  [-82.12, 43.59],
  [-82.42, 45.34],
  [-84.78, 45.88],
  [-84.89, 46.98],
  [-87.95, 46.51],
  [-90.83, 46.81],
  [-91.21, 47.96],
  [-95.15, 49.19],
  [-107.0, 49.0],
  [-116.05, 49.0],
  [-122.76, 49.0],
  [-124.73, 48.16],
];

export const STATE_COUNT = new Set(SERVERS.map((s) => s.code)).size;
