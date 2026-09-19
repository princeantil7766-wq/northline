import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Settings, c as Gauge, i as Shield, l as Earth, o as Power, r as Star, s as MapPinned, t as Zap, u as Activity } from "../_libs/lucide-react.mjs";
import { i as Slot } from "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/@radix-ui/react-switch+[...].mjs";
import { a as Trigger, i as Root3, n as Portal, r as Provider, t as Content2 } from "../_libs/@radix-ui/react-tooltip+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { i as Viewport, n as Scrollbar, r as Thumb, t as Root } from "../_libs/radix-ui__react-scroll-area.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BP5IKq59.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var TooltipProvider = Provider;
var Tooltip = Root3;
var TooltipTrigger = Trigger;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 6, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 rounded-md bg-elevated px-2.5 py-1.5 text-xs text-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_14%,transparent)]", className),
	...props
}) }));
TooltipContent.displayName = "TooltipContent";
var PROTOCOL_META = {
	wireguard: {
		label: "WireGuard",
		short: "WG",
		latency: 0,
		speed: 1,
		blurb: "Modern kernel-level tunnel. Lowest overhead, fastest reconnect."
	},
	"openvpn-udp": {
		label: "OpenVPN UDP",
		short: "OVPN",
		latency: 8,
		speed: .52,
		blurb: "Battle-tested UDP. Broad compatibility, moderate throughput."
	},
	"openvpn-tcp": {
		label: "OpenVPN TCP",
		short: "TCP",
		latency: 18,
		speed: .32,
		blurb: "TCP 443. Passes restrictive firewalls at the cost of speed."
	},
	ikev2: {
		label: "IKEv2 / IPsec",
		short: "IKE",
		latency: 4,
		speed: .68,
		blurb: "Mobile-first. Survives network switches without dropping."
	},
	stealth: {
		label: "Stealth (TLS)",
		short: "STL",
		latency: 22,
		speed: .28,
		blurb: "Looks like ordinary HTTPS. Use on censored or hostile networks."
	}
};
var REGION_LABEL = {
	west: "West",
	midwest: "Midwest",
	south: "South",
	northeast: "Northeast"
};
var SPLIT_APPS = [
	{
		id: "browser",
		label: "Browser"
	},
	{
		id: "mail",
		label: "Mail"
	},
	{
		id: "slack",
		label: "Slack"
	},
	{
		id: "zoom",
		label: "Zoom"
	},
	{
		id: "spotify",
		label: "Spotify"
	},
	{
		id: "netflix",
		label: "Netflix"
	},
	{
		id: "steam",
		label: "Steam"
	},
	{
		id: "discord",
		label: "Discord"
	},
	{
		id: "terminal",
		label: "Terminal"
	},
	{
		id: "updates",
		label: "System updates"
	}
];
function s(id, city, state, code, region, lat, lng, tags = ["standard"], district) {
	return {
		id,
		city,
		state,
		code,
		region,
		lat,
		lng,
		tags,
		district
	};
}
var SERVERS = [
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
	s("den-1", "Denver", "Colorado", "CO", "west", 39.7392, -104.9903, [
		"standard",
		"p2p",
		"multi-hop"
	]),
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
	s("chi-1", "Chicago", "Illinois", "IL", "midwest", 41.8781, -87.6298, [
		"standard",
		"streaming",
		"p2p"
	]),
	s("chi-2", "Chicago", "Illinois", "IL", "midwest", 41.85, -87.65, ["stealth"], "Aurora"),
	s("ind-1", "Indianapolis", "Indiana", "IN", "midwest", 39.7684, -86.1581),
	s("dtw-1", "Detroit", "Michigan", "MI", "midwest", 42.3314, -83.0458, ["standard", "p2p"]),
	s("cmh-1", "Columbus", "Ohio", "OH", "midwest", 39.9612, -82.9988),
	s("cle-1", "Cleveland", "Ohio", "OH", "midwest", 41.4993, -81.6944),
	s("cvg-1", "Cincinnati", "Ohio", "OH", "midwest", 39.1031, -84.512),
	s("okc-1", "Oklahoma City", "Oklahoma", "OK", "south", 35.4676, -97.5164),
	s("dfw-1", "Dallas", "Texas", "TX", "south", 32.7767, -96.797, [
		"standard",
		"streaming",
		"p2p"
	]),
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
	s("atl-1", "Atlanta", "Georgia", "GA", "south", 33.749, -84.388, [
		"standard",
		"streaming",
		"multi-hop"
	]),
	s("atl-2", "Atlanta", "Georgia", "GA", "south", 33.883, -84.514, ["p2p"], "Marietta"),
	s("chs-1", "Charleston", "South Carolina", "SC", "south", 32.7765, -79.9311),
	s("clt-1", "Charlotte", "North Carolina", "NC", "south", 35.2271, -80.8431, ["standard", "streaming"]),
	s("rdu-1", "Raleigh", "North Carolina", "NC", "south", 35.7796, -78.6382),
	s("jax-1", "Jacksonville", "Florida", "FL", "south", 30.3322, -81.6557),
	s("tpa-1", "Tampa", "Florida", "FL", "south", 27.9506, -82.4572),
	s("mco-1", "Orlando", "Florida", "FL", "south", 28.5383, -81.3792, ["standard", "streaming"]),
	s("mia-1", "Miami", "Florida", "FL", "south", 25.7617, -80.1918, [
		"standard",
		"streaming",
		"p2p"
	]),
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
	s("bos-1", "Boston", "Massachusetts", "MA", "northeast", 42.3601, -71.0589, [
		"standard",
		"streaming",
		"p2p"
	]),
	s("pvd-1", "Providence", "Rhode Island", "RI", "northeast", 41.824, -71.4128),
	s("bdl-1", "Hartford", "Connecticut", "CT", "northeast", 41.7658, -72.6734),
	s("nyc-1", "New York", "New York", "NY", "northeast", 40.7128, -74.006, [
		"standard",
		"streaming",
		"p2p"
	]),
	s("nyc-2", "New York", "New York", "NY", "northeast", 40.6782, -73.9442, ["stealth"], "Brooklyn"),
	s("nyc-3", "New York", "New York", "NY", "northeast", 40.7282, -73.7949, ["multi-hop"], "Queens"),
	s("buf-1", "Buffalo", "New York", "NY", "northeast", 42.8864, -78.8784),
	s("ewr-1", "Newark", "New Jersey", "NJ", "northeast", 40.7357, -74.1724, ["standard", "p2p"]),
	s("phl-1", "Philadelphia", "Pennsylvania", "PA", "northeast", 39.9526, -75.1652, ["standard", "streaming"]),
	s("pit-1", "Pittsburgh", "Pennsylvania", "PA", "northeast", 40.4406, -79.9959)
];
var BY_ID = new Map(SERVERS.map((server) => [server.id, server]));
function getServer(id) {
	return id && BY_ID.get(id) || SERVERS.find((s) => s.id === "chi-1");
}
function hash32(input) {
	let h = 2166136261;
	for (let i = 0; i < input.length; i++) {
		h ^= input.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return h >>> 0;
}
function serverLoad(id) {
	const h = hash32(id + ":load");
	const bias = id.startsWith("nyc") || id.startsWith("lax") || id.startsWith("chi") ? 18 : 0;
	return 11 + h % 62 + bias;
}
function virtualIp(server) {
	const h = hash32(server.id);
	return `${server.region === "west" ? 104 : server.region === "south" ? 72 : server.region === "midwest" ? 50 : 23}.${8 + h % 180}.${(h >>> 8) % 256}.${1 + (h >>> 16) % 254}`;
}
function haversineKm(lat1, lng1, lat2, lng2) {
	const r = 6371;
	const p1 = lat1 * Math.PI / 180;
	const p2 = lat2 * Math.PI / 180;
	const dp = (lat2 - lat1) * Math.PI / 180;
	const dl = (lng2 - lng1) * Math.PI / 180;
	const a = Math.sin(dp / 2) ** 2 + Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) ** 2;
	return 2 * r * Math.asin(Math.min(1, Math.sqrt(a)));
}
function estimateLatency(origin, server, protocol) {
	const from = origin ?? {
		lat: 39.1,
		lng: -94.58
	};
	const rtt = haversineKm(from.lat, from.lng, server.lat, server.lng) * .0135 + 8;
	const load = serverLoad(server.id) * .18;
	return Math.max(6, Math.round(rtt + load + PROTOCOL_META[protocol].latency));
}
function pickFastest(origin, protocol, pool = SERVERS) {
	let best = pool[0];
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
var US_OUTLINE = [
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
	[-85, 29.68],
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
	[-107, 49],
	[-116.05, 49],
	[-122.76, 49],
	[-124.73, 48.16]
];
var STATE_COUNT = new Set(SERVERS.map((s) => s.code)).size;
var MAX_LOGS = 80;
function sleep$1(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
function handshakeSteps(protocol, multiHop) {
	const base = protocol === "stealth" ? [
		"Opening TLS 1.3 cover session",
		"Authenticating client certificate",
		"Obfuscating handshake as HTTPS",
		"Deriving session keys",
		"Bringing up stealth tunnel",
		"Binding private DNS"
	] : protocol === "wireguard" ? [
		"Resolving endpoint",
		"Noise_IK handshake",
		"Deriving transport keys",
		"Bringing up tunnel interface",
		"Installing routes",
		"Binding private DNS"
	] : protocol.startsWith("openvpn") ? [
		"Resolving endpoint",
		"TLS control channel",
		"Authenticating credentials",
		"Pushing client config",
		"Bringing up tun adapter",
		"Binding private DNS"
	] : [
		"Resolving endpoint",
		"IKE_SA_INIT",
		"IKE_AUTH + EAP",
		"Child SA established",
		"Installing IPsec policies",
		"Binding private DNS"
	];
	if (multiHop) return [
		"Selecting entry node",
		...base.slice(0, 3),
		"Chaining exit hop",
		...base.slice(3)
	];
	return base;
}
var connectGen = 0;
var useVpnStore = create()(persist((set, get) => ({
	view: "connect",
	status: "disconnected",
	protocol: "wireguard",
	selectedServerId: "chi-1",
	connectedServerId: null,
	multiHop: false,
	multiHopExitId: "nyc-1",
	handshakeLabel: "",
	handshakeStep: 0,
	handshakeTotal: 0,
	sessionStartedAt: null,
	bytesUp: 0,
	bytesDown: 0,
	samples: [],
	pingLive: 0,
	virtualIp: null,
	clientGeo: null,
	favorites: [
		"nyc-1",
		"lax-1",
		"chi-1"
	],
	killSwitch: true,
	dnsProtection: true,
	ipv6Protection: true,
	adBlock: true,
	malwareBlock: true,
	obfuscation: false,
	autoConnect: false,
	splitTunnel: false,
	splitApps: ["updates"],
	dohProvider: "northline",
	logs: [],
	lastSpeed: null,
	speedRunning: false,
	query: "",
	regionFilter: "all",
	tagFilter: "all",
	setView: (view) => set({ view }),
	setQuery: (query) => set({ query }),
	setRegionFilter: (regionFilter) => set({ regionFilter }),
	setTagFilter: (tagFilter) => set({ tagFilter }),
	setProtocol: (protocol) => {
		set({ protocol });
		get().log("info", `Protocol set to ${PROTOCOL_META[protocol].label}`);
	},
	selectServer: (id) => set({ selectedServerId: id }),
	toggleFavorite: (id) => set((s) => ({ favorites: s.favorites.includes(id) ? s.favorites.filter((x) => x !== id) : [...s.favorites, id] })),
	setKillSwitch: (killSwitch) => {
		set({ killSwitch });
		if (!killSwitch && get().status === "blocked") {
			set({ status: "disconnected" });
			get().log("warn", "Kill switch disarmed. Traffic unrestricted.");
		} else get().log("info", killSwitch ? "Kill switch armed." : "Kill switch off.");
	},
	setDnsProtection: (dnsProtection) => set({ dnsProtection }),
	setIpv6Protection: (ipv6Protection) => set({ ipv6Protection }),
	setAdBlock: (adBlock) => set({ adBlock }),
	setMalwareBlock: (malwareBlock) => set({ malwareBlock }),
	setObfuscation: (obfuscation) => {
		set({ obfuscation });
		if (obfuscation && get().protocol === "wireguard") get().log("info", "Obfuscation on — wrapping WireGuard in TLS 443.");
	},
	setAutoConnect: (autoConnect) => set({ autoConnect }),
	setSplitTunnel: (splitTunnel) => set({ splitTunnel }),
	toggleSplitApp: (id) => set((s) => ({ splitApps: s.splitApps.includes(id) ? s.splitApps.filter((x) => x !== id) : [...s.splitApps, id] })),
	setDohProvider: (dohProvider) => set({ dohProvider }),
	setMultiHop: (multiHop) => set({ multiHop }),
	setMultiHopExit: (multiHopExitId) => set({ multiHopExitId }),
	setClientGeo: (clientGeo) => set({ clientGeo }),
	log: (level, message) => set((s) => ({ logs: [{
		id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
		at: Date.now(),
		level,
		message
	}, ...s.logs].slice(0, MAX_LOGS) })),
	tickTraffic: () => {
		const { status, protocol, connectedServerId, clientGeo } = get();
		if (status !== "connected" || !connectedServerId) return;
		const server = getServer(connectedServerId);
		const factor = PROTOCOL_META[protocol].speed;
		const down = (18e3 + Math.random() * 22e4) * factor;
		const up = (4e3 + Math.random() * 48e3) * factor;
		const base = estimateLatency(clientGeo, server, protocol);
		const pingLive = Math.max(6, Math.round(base + (Math.random() - .45) * 6));
		const sample = {
			t: Date.now(),
			down,
			up
		};
		set((s) => ({
			bytesDown: s.bytesDown + down,
			bytesUp: s.bytesUp + up,
			pingLive,
			samples: [...s.samples, sample].slice(-36)
		}));
	},
	connect: async (serverId) => {
		const current = get();
		if (current.status === "connecting" || current.status === "connected") return;
		const id = serverId ?? current.selectedServerId;
		const server = getServer(id);
		const gen = ++connectGen;
		const protocol = current.obfuscation ? "stealth" : current.protocol;
		const steps = handshakeSteps(protocol, current.multiHop);
		set({
			status: "connecting",
			selectedServerId: id,
			handshakeStep: 0,
			handshakeTotal: steps.length,
			handshakeLabel: steps[0] ?? "",
			samples: [],
			bytesUp: 0,
			bytesDown: 0
		});
		get().log("info", `Connecting to ${server.city}${server.district ? ` (${server.district})` : ""}, ${server.code} via ${PROTOCOL_META[protocol].label}`);
		for (let i = 0; i < steps.length; i++) {
			if (gen !== connectGen) return;
			set({
				handshakeStep: i,
				handshakeLabel: steps[i] ?? ""
			});
			await sleep$1(240 + Math.random() * 260);
		}
		if (gen !== connectGen) return;
		const vIp = virtualIp(server);
		const ping = estimateLatency(get().clientGeo, server, protocol);
		set({
			status: "connected",
			connectedServerId: server.id,
			sessionStartedAt: Date.now(),
			virtualIp: vIp,
			pingLive: ping,
			handshakeLabel: "Tunnel up",
			handshakeStep: steps.length
		});
		const hop = get().multiHop ? ` · hop via ${getServer(get().multiHopExitId).city}` : "";
		get().log("info", `Tunnel up. Exit ${vIp}${hop}.`);
	},
	disconnect: async () => {
		connectGen += 1;
		const { status, killSwitch, connectedServerId } = get();
		if (status !== "connected" && status !== "connecting") {
			if (status === "blocked" && !killSwitch) set({ status: "disconnected" });
			return;
		}
		set({
			status: "disconnecting",
			handshakeLabel: "Tearing down session"
		});
		const server = connectedServerId ? getServer(connectedServerId) : null;
		await sleep$1(380);
		if (killSwitch) {
			set({
				status: "blocked",
				connectedServerId: null,
				sessionStartedAt: null,
				virtualIp: null,
				pingLive: 0,
				handshakeLabel: "Kill switch holding traffic"
			});
			get().log("warn", `Disconnected from ${server?.city ?? "server"}. Kill switch is holding traffic.`);
		} else {
			set({
				status: "disconnected",
				connectedServerId: null,
				sessionStartedAt: null,
				virtualIp: null,
				pingLive: 0,
				handshakeLabel: ""
			});
			get().log("info", `Disconnected from ${server?.city ?? "server"}.`);
		}
	},
	smartConnect: async () => {
		const { protocol, clientGeo, obfuscation } = get();
		const best = pickFastest(clientGeo, obfuscation ? "stealth" : protocol);
		set({ selectedServerId: best.id });
		await get().connect(best.id);
	},
	setSpeedRunning: (speedRunning) => set({ speedRunning }),
	setLastSpeed: (lastSpeed) => set({ lastSpeed })
}), {
	name: "northline-vpn",
	skipHydration: true,
	partialize: (s) => ({
		protocol: s.protocol,
		selectedServerId: s.selectedServerId,
		favorites: s.favorites,
		killSwitch: s.killSwitch,
		dnsProtection: s.dnsProtection,
		ipv6Protection: s.ipv6Protection,
		adBlock: s.adBlock,
		malwareBlock: s.malwareBlock,
		obfuscation: s.obfuscation,
		autoConnect: s.autoConnect,
		splitTunnel: s.splitTunnel,
		splitApps: s.splitApps,
		dohProvider: s.dohProvider,
		multiHop: s.multiHop,
		multiHopExitId: s.multiHopExitId
	})
}));
var STATUS_COPY = {
	disconnected: "Tap to connect",
	connecting: "Handshaking",
	connected: "Connected",
	disconnecting: "Closing tunnel",
	blocked: "Traffic held"
};
function ConnectOrb() {
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
			disconnect();
			return;
		}
		connect();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: onToggle,
			"aria-pressed": live,
			"aria-label": STATUS_COPY[status] ?? "Connect",
			className: cn("relative grid size-36 place-items-center rounded-full bg-surface text-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_14%,transparent)] transition-[box-shadow,transform] duration-150 ease-out", "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none", live && "shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-live)_55%,transparent)]", blocked && "shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-danger)_50%,transparent)]"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 140 140",
				className: "absolute inset-0",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "70",
						cy: "70",
						r: "64",
						fill: "none",
						stroke: "var(--color-border)",
						strokeWidth: "1"
					}),
					busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
						className: "handshake-orbit",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "70",
							cy: "70",
							r: "64",
							fill: "none",
							stroke: "var(--color-fg)",
							strokeWidth: "1.6",
							strokeDasharray: "36 280",
							strokeLinecap: "round"
						})
					}),
					live && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "70",
						cy: "70",
						r: "64",
						fill: "none",
						stroke: "var(--color-live)",
						strokeWidth: "1.4",
						className: "live-pulse"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Power, {
				className: cn("relative size-8", live ? "text-live" : blocked ? "text-danger" : "text-fg"),
				strokeWidth: 1.5
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium tracking-wide text-fg",
				children: STATUS_COPY[status]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 min-h-5 font-mono text-xs text-muted",
				children: busy ? `${label} · ${Math.min(step + 1, total)}/${total}` : live ? "Tunnel up · tap to stop" : blocked ? "Kill switch armed" : "US private network"
			})]
		})]
	});
}
var W = 800;
var H = 500;
function project(lat, lng, w = W, h = H) {
	if (lat > 50) return {
		x: 40 + (lng + 170) / 54 * 124,
		y: h - 112 + (71.4 - lat) / 20 * 80
	};
	if (lng < -140 && lat < 30) return {
		x: 176 + (lng + 161) / 10 * 72,
		y: h - 84 + (22.6 - lat) / 5 * 50
	};
	return {
		x: 30 + (lng - -125) / 58.599999999999994 * (w - 60),
		y: 22 + (49.5 - lat) / 25.1 * (h - 44 - 18)
	};
}
function outlinePath() {
	return US_OUTLINE.map(([lng, lat], i) => {
		const { x, y } = project(lat, lng);
		return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
	}).join(" ");
}
var GRID_LATS = [
	25,
	30,
	35,
	40,
	45
];
var GRID_LNGS = [
	-120,
	-110,
	-100,
	-90,
	-80,
	-70
];
function NetworkMap() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setMounted(true), []);
	const selectedId = useVpnStore((s) => s.selectedServerId);
	const connectedId = useVpnStore((s) => s.connectedServerId);
	const status = useVpnStore((s) => s.status);
	const geo = useVpnStore((s) => s.clientGeo);
	const selectServer = useVpnStore((s) => s.selectServer);
	const outline = (0, import_react.useMemo)(outlinePath, []);
	const selected = getServer(selectedId);
	const origin = geo ? project(geo.lat, geo.lng) : null;
	const dest = project(selected.lat, selected.lng);
	const live = status === "connected";
	const grid = (0, import_react.useMemo)(() => {
		return {
			latLines: GRID_LATS.map((lat) => {
				return {
					lat,
					a: project(lat, -125),
					b: project(lat, -67)
				};
			}),
			lngLines: GRID_LNGS.map((lng) => {
				return {
					lng,
					a: project(24.5, lng),
					b: project(49.3, lng)
				};
			})
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full min-h-64 w-full overflow-hidden rounded-xl bg-surface",
		children: [mounted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: `0 0 ${W} ${H}`,
			className: "h-full w-full",
			role: "img",
			"aria-label": "United States server map",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: W,
					height: H,
					fill: "var(--color-surface)"
				}),
				grid.latLines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: line.a.x,
					y1: line.a.y,
					x2: line.b.x,
					y2: line.b.y,
					stroke: "var(--color-border)",
					strokeWidth: "0.8"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
					x: 772,
					y: line.b.y - 4,
					fill: "var(--color-subtle)",
					fontSize: "9",
					fontFamily: "var(--font-mono)",
					textAnchor: "end",
					children: [line.lat, "°N"]
				})] }, line.lat)),
				grid.lngLines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: line.a.x,
					y1: line.a.y,
					x2: line.b.x,
					y2: line.b.y,
					stroke: "var(--color-border)",
					strokeWidth: "0.8"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
					x: line.a.x + 4,
					y: 486,
					fill: "var(--color-subtle)",
					fontSize: "9",
					fontFamily: "var(--font-mono)",
					children: [Math.abs(line.lng), "°W"]
				})] }, line.lng)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: outline,
					fill: "color-mix(in oklab, var(--color-fg) 4%, transparent)",
					stroke: "color-mix(in oklab, var(--color-fg) 22%, transparent)",
					strokeWidth: "1.2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "32",
					y: 382,
					width: "132",
					height: "88",
					rx: "8",
					fill: "none",
					stroke: "var(--color-border)",
					strokeDasharray: "3 4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "40",
					y: 396,
					fill: "var(--color-subtle)",
					fontSize: "9",
					fontFamily: "var(--font-mono)",
					children: "AK"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "176",
					y: 412,
					fill: "var(--color-subtle)",
					fontSize: "9",
					fontFamily: "var(--font-mono)",
					children: "HI"
				}),
				origin && geo && geo.lng > -130 && geo.lat < 50 && geo.lat > 24 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: origin.x,
					cy: origin.y,
					r: "4",
					fill: "var(--color-fg)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: origin.x + 8,
					y: origin.y - 8,
					fill: "var(--color-muted)",
					fontSize: "10",
					fontFamily: "var(--font-sans)",
					children: "You"
				})] }),
				origin && (live || status === "connecting") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: `M ${origin.x} ${origin.y} Q ${(origin.x + dest.x) / 2} ${Math.min(origin.y, dest.y) - 48} ${dest.x} ${dest.y}`,
					fill: "none",
					stroke: live ? "var(--color-live)" : "var(--color-fg)",
					strokeWidth: "1.4",
					className: "route-flow",
					opacity: .85
				}),
				SERVERS.map((server) => {
					const { x, y } = project(server.lat, server.lng);
					const isSelected = server.id === selectedId;
					const isLive = live && server.id === connectedId;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: x,
							cy: y,
							r: isSelected ? 11 : 9,
							fill: "transparent",
							className: "cursor-pointer",
							onClick: () => selectServer(server.id),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: `${server.city}, ${server.code}` })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: x,
							cy: y,
							r: isSelected ? 3.6 : 2.2,
							fill: isLive ? "var(--color-live)" : isSelected ? "var(--color-fg)" : "color-mix(in oklab, var(--color-fg) 45%, transparent)",
							className: "pointer-events-none"
						}),
						isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: x,
							cy: y,
							r: "7",
							fill: "none",
							stroke: isLive ? "var(--color-live)" : "var(--color-fg)",
							strokeWidth: "1",
							className: "pointer-events-none",
							opacity: "0.7"
						})
					] }, server.id);
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute top-3 left-3 font-mono text-xs text-subtle",
			children: [
				"US FLEET · ",
				SERVERS.length,
				" NODES"
			]
		})]
	});
}
function MapLegend({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-wrap gap-4 font-mono text-xs text-muted", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-fg" }), "Selected"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-live" }), "Live exit"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-muted" }), "PoP"]
			})
		]
	});
}
function formatBytes(n) {
	if (n < 1024) return `${Math.round(n)} B`;
	if (n < 1048576) return `${(n / 1024).toFixed(1)} KB`;
	if (n < 1073741824) return `${(n / 1048576).toFixed(1)} MB`;
	return `${(n / 1073741824).toFixed(2)} GB`;
}
function formatBps(bytesPerSec) {
	const bits = bytesPerSec * 8;
	if (bits < 1e3) return `${Math.round(bits)} bps`;
	if (bits < 1e6) return `${(bits / 1e3).toFixed(0)} Kbps`;
	if (bits < 1e9) return `${(bits / 1e6).toFixed(1)} Mbps`;
	return `${(bits / 1e9).toFixed(2)} Gbps`;
}
function formatDuration(ms) {
	const total = Math.max(0, Math.floor(ms / 1e3));
	const h = Math.floor(total / 3600);
	const m = Math.floor(total % 3600 / 60);
	const s = total % 60;
	const pad = (v) => v.toString().padStart(2, "0");
	return `${pad(h)}:${pad(m)}:${pad(s)}`;
}
function formatPing(ms) {
	return `${Math.round(ms)} ms`;
}
function formatLoad(pct) {
	return `${Math.round(pct)}%`;
}
function loadTone(pct) {
	if (pct < 45) return "live";
	if (pct < 75) return "warn";
	return "danger";
}
var badgeVariants = cva("inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium tracking-wide", {
	variants: { variant: {
		default: "bg-elevated text-muted",
		live: "bg-live/15 text-live",
		warn: "bg-warn/15 text-warn",
		danger: "bg-danger/15 text-danger",
		solid: "bg-primary text-primary-fg"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[background-color,color,box-shadow,opacity,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg hover:bg-primary/90",
			outline: "bg-transparent text-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_14%,transparent)] hover:bg-elevated",
			ghost: "text-fg hover:bg-elevated",
			subtle: "bg-elevated text-fg hover:bg-elevated/80",
			danger: "bg-danger/15 text-danger hover:bg-danger/25"
		},
		size: {
			default: "h-10 px-4",
			sm: "h-8 rounded-sm px-3 text-xs",
			lg: "h-12 rounded-lg px-6",
			icon: "size-10",
			"icon-sm": "size-8 rounded-sm"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
	ref,
	className: cn("flex h-10 w-full rounded-md bg-elevated px-3 text-sm text-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_12%,transparent)] outline-none transition-[box-shadow] duration-(--motion-quick) placeholder:text-subtle focus-visible:ring-2 focus-visible:ring-ring", className),
	...props
}));
Input.displayName = "Input";
var ScrollArea = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root, {
	ref,
	className: cn("relative overflow-hidden", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
		className: "h-full w-full rounded-[inherit]",
		children
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scrollbar, {
		orientation: "vertical",
		className: "flex w-2 touch-none select-none p-0.5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thumb, { className: "relative flex-1 rounded-full bg-border" })
	})]
}));
ScrollArea.displayName = "ScrollArea";
var REGIONS = [
	"all",
	"west",
	"midwest",
	"south",
	"northeast"
];
var TAGS = [
	"all",
	"p2p",
	"streaming",
	"stealth",
	"multi-hop"
];
function matches(server, q) {
	if (!q) return true;
	return `${server.city} ${server.state} ${server.code} ${server.district ?? ""}`.toLowerCase().includes(q.trim().toLowerCase());
}
function ServerRow({ server, compact }) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center gap-2 rounded-lg px-2 py-2 transition-colors duration-150", selected ? "bg-elevated" : "hover:bg-elevated/60"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": fav ? "Remove favorite" : "Add favorite",
				onClick: () => toggleFavorite(server.id),
				className: "grid size-10 shrink-0 place-items-center text-subtle hover:text-fg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
					className: cn("size-4", fav && "fill-fg text-fg"),
					strokeWidth: 1.5
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => selectServer(server.id),
				className: "min-w-0 flex-1 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "truncate text-sm font-medium text-fg",
							children: [server.city, server.district ? ` · ${server.district}` : ""]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-subtle",
							children: server.code
						}),
						live && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "live",
							children: "Live"
						})
					]
				}), !compact && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-0.5 font-mono text-xs text-muted",
					children: [
						server.state,
						" · ",
						REGION_LABEL[server.region]
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden shrink-0 text-right sm:block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tabular-nums text-fg",
					children: formatPing(ping)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("font-mono text-xs tabular-nums", tone === "live" && "text-live", tone === "warn" && "text-warn", tone === "danger" && "text-danger"),
					children: formatLoad(load)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				variant: live ? "outline" : "subtle",
				className: "shrink-0",
				onClick: () => void connect(server.id),
				disabled: live || status === "connecting",
				children: live ? "On" : "Use"
			})
		]
	});
}
function ServerFilters() {
	const query = useVpnStore((s) => s.query);
	const setQuery = useVpnStore((s) => s.setQuery);
	const region = useVpnStore((s) => s.regionFilter);
	const setRegion = useVpnStore((s) => s.setRegionFilter);
	const tag = useVpnStore((s) => s.tagFilter);
	const setTag = useVpnStore((s) => s.setTagFilter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: query,
				onChange: (e) => setQuery(e.target.value),
				placeholder: "Search city or state",
				"aria-label": "Search servers"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1.5",
				children: REGIONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setRegion(r),
					className: cn("h-8 rounded-full px-3 text-xs font-medium", region === r ? "bg-primary text-primary-fg" : "bg-elevated text-muted"),
					children: r === "all" ? "All" : REGION_LABEL[r]
				}, r))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1.5",
				children: TAGS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTag(t),
					className: cn("h-8 rounded-full px-3 text-xs font-medium", tag === t ? "bg-primary text-primary-fg" : "bg-elevated text-muted"),
					children: t === "all" ? "Any type" : t === "p2p" ? "P2P" : t === "multi-hop" ? "Multi-hop" : t[0].toUpperCase() + t.slice(1)
				}, t))
			})
		]
	});
}
function ServerList({ compact = false }) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
		className: "h-full min-h-80",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pr-2",
			children: [rows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-3 py-8 text-center text-sm text-muted",
				children: "No cities match that filter."
			}), rows.map((server) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServerRow, {
				server,
				compact
			}, server.id))]
		})
	});
}
function SelectedServerCard() {
	const selectedId = useVpnStore((s) => s.selectedServerId);
	const protocol = useVpnStore((s) => s.protocol);
	const geo = useVpnStore((s) => s.clientGeo);
	const status = useVpnStore((s) => s.status);
	const virtualIp = useVpnStore((s) => s.virtualIp);
	const pingLive = useVpnStore((s) => s.pingLive);
	const server = getServer(selectedId);
	const ping = status === "connected" ? pingLive : estimateLatency(geo, server, protocol);
	const load = serverLoad(server.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs tracking-wide text-subtle",
				children: "EXIT NODE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 text-xl font-medium tracking-tight text-fg",
				children: server.city
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					server.district ? `${server.district} · ` : "",
					server.state,
					" · ",
					server.code
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-4 grid grid-cols-2 gap-3 font-mono text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-subtle",
						children: "Latency"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-0.5 tabular-nums text-fg",
						children: formatPing(ping)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-subtle",
						children: "Load"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-0.5 tabular-nums text-fg",
						children: formatLoad(load)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-subtle",
							children: "Exit IP"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-0.5 text-fg",
							children: status === "connected" && virtualIp ? virtualIp : "—"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-1.5",
				children: server.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: t }, t))
			})
		]
	});
}
function Spark({ down, up }) {
	const w = 280;
	const h = 56;
	if (down.length < 2) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-14 items-center font-mono text-xs text-subtle",
		children: "Waiting for traffic"
	});
	const max = Math.max(...down, ...up, 1);
	const toPts = (arr) => arr.map((v, i) => {
		const x = i / (arr.length - 1) * w;
		const y = h - v / max * 50 - 3;
		return `${x.toFixed(1)},${y.toFixed(1)}`;
	}).join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: `0 0 ${w} ${h}`,
		className: "h-14 w-full",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
			points: toPts(down),
			fill: "none",
			stroke: "var(--color-fg)",
			strokeWidth: "1.4"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
			points: toPts(up),
			fill: "none",
			stroke: "var(--color-muted)",
			strokeWidth: "1.2"
		})]
	});
}
function SessionMeter() {
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
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	(0, import_react.useEffect)(() => {
		if (status !== "connected") return;
		const id = setInterval(() => setNow(Date.now()), 1e3);
		return () => clearInterval(id);
	}, [status]);
	const last = samples[samples.length - 1];
	const proto = obfuscation ? "stealth" : protocol;
	const server = connectedId ? getServer(connectedId) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 rounded-xl bg-surface p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tracking-wide text-subtle",
					children: "SESSION"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-mono text-2xl font-medium tabular-nums tracking-tight text-fg",
					children: status === "connected" && started ? formatDuration(now - started) : "00:00:00"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-xs text-muted",
					children: [PROTOCOL_META[proto].short, multiHop ? " · MH" : ""]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spark, {
				down: samples.map((s) => s.down),
				up: samples.map((s) => s.up)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "grid grid-cols-2 gap-3 font-mono text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-subtle",
						children: "Download"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
						className: "mt-0.5 tabular-nums text-fg",
						children: [formatBytes(bytesDown), last ? ` · ${formatBps(last.down)}` : ""]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-subtle",
						children: "Upload"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
						className: "mt-0.5 tabular-nums text-fg",
						children: [formatBytes(bytesUp), last ? ` · ${formatBps(last.up)}` : ""]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-subtle",
						children: "Ping"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-0.5 tabular-nums text-fg",
						children: status === "connected" ? `${pingLive} ms` : "—"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-subtle",
						children: "Your IP"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-0.5 truncate text-fg",
						children: clientGeo?.ip ?? "—"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-subtle",
							children: "Path"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-0.5 text-fg",
							children: status === "connected" && server ? `${clientGeo?.city || "You"} → ${server.city}${multiHop ? ` → ${getServer(exitId).city}` : ""} · ${virtualIp}` : "Not tunneled"
						})]
					})
				]
			})
		]
	});
}
function ConnectView() {
	const smartConnect = useVpnStore((s) => s.smartConnect);
	const status = useVpnStore((s) => s.status);
	const setView = useVpnStore((s) => s.setView);
	const disconnect = useVpnStore((s) => s.disconnect);
	const setKillSwitch = useVpnStore((s) => s.setKillSwitch);
	const blocked = status === "blocked";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-col gap-4 lg:h-full lg:flex-row",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "flex min-h-0 min-w-0 flex-1 flex-col gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-xs tracking-wide text-subtle",
						children: [
							"50 STATES + DC · ",
							SERVERS.length,
							" CITIES"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 text-2xl font-medium tracking-tight text-fg",
						children: "United States network"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setView("servers"),
							children: "All servers"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => void smartConnect(),
							disabled: status === "connecting" || status === "connected",
							children: "Fastest"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-72 sm:h-96 lg:h-auto lg:min-h-0 lg:flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full pb-32",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NetworkMap, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-x-0 bottom-3 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConnectOrb, {})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapLegend, {}),
				blocked && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-danger/10 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-danger",
							children: "Internet held by kill switch"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "The tunnel is down. Traffic stays blocked until you reconnect or disarm the switch."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => void useVpnStore.getState().connect(),
								children: "Reconnect"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => {
									setKillSwitch(false);
									disconnect();
								},
								children: "Disarm"
							})]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "flex w-full shrink-0 flex-col gap-3 lg:w-80",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectedServerCard, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SessionMeter, {})]
		})]
	});
}
function ServersView() {
	const smartConnect = useVpnStore((s) => s.smartConnect);
	const status = useVpnStore((s) => s.status);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 flex-col gap-4 lg:h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-wide text-subtle",
						children: "FLEET DIRECTORY"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 text-2xl font-medium tracking-tight text-fg",
						children: "All US servers"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							SERVERS.length,
							" cities across ",
							STATE_COUNT,
							" states and D.C. Favorites rise to the top."
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => void smartConnect(),
					disabled: status === "connecting",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-4" }), "Fastest city"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServerFilters, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-96 min-h-0 flex-1 rounded-xl bg-surface p-2 lg:h-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServerList, {})
			})
		]
	});
}
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
	ref,
	className: cn("peer inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full bg-elevated shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_14%,transparent)] transition-colors duration-(--motion-quick) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-40 data-[state=checked]:bg-primary", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: "pointer-events-none block size-5 translate-x-0.5 rounded-full bg-muted transition-transform duration-(--motion-quick) data-[state=checked]:translate-x-4 data-[state=checked]:bg-primary-fg" })
}));
Switch.displayName = "Switch";
function Row({ title, hint, checked, onCheckedChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start justify-between gap-4 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-medium text-fg",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-0.5 text-sm text-muted",
				children: hint
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
			checked,
			onCheckedChange,
			"aria-label": title
		})]
	});
}
function ShieldView() {
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
	const armed = [
		killSwitch,
		dnsProtection,
		ipv6Protection,
		adBlock,
		malwareBlock
	].filter(Boolean).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex w-full max-w-3xl flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tracking-wide text-subtle",
					children: "NETWORK SHIELD"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 text-2xl font-medium tracking-tight text-fg",
					children: "Protection"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-muted",
					children: [armed, " of 5 core controls armed. Status applies on the next handshake."]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						title: "Kill switch",
						hint: "Block all traffic if the tunnel drops. Prevents IP leaks during reconnects.",
						checked: killSwitch,
						onCheckedChange: useVpnStore.getState().setKillSwitch
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-border" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						title: "DNS leak protection",
						hint: "Force every lookup through NORTHLINE resolvers. No ISP DNS.",
						checked: dnsProtection,
						onCheckedChange: useVpnStore.getState().setDnsProtection
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-border" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						title: "IPv6 leak protection",
						hint: "Disable native IPv6 so the adapter cannot skip the tunnel.",
						checked: ipv6Protection,
						onCheckedChange: useVpnStore.getState().setIpv6Protection
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-border" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						title: "Tracker blocking",
						hint: "Sinkhole known ad and analytics hosts at the resolver.",
						checked: adBlock,
						onCheckedChange: useVpnStore.getState().setAdBlock
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-border" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						title: "Malware sinkhole",
						hint: "Block command-and-control and phishing domains on the DNS path.",
						checked: malwareBlock,
						onCheckedChange: useVpnStore.getState().setMalwareBlock
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-start justify-between gap-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-fg",
						children: "DNS over HTTPS"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-sm text-muted",
						children: "Resolver used inside the tunnel."
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex flex-wrap gap-1.5",
					children: [
						["northline", "NORTHLINE"],
						["cloudflare", "Cloudflare 1.1.1.1"],
						["quad9", "Quad9"],
						["nextdns", "NextDNS"]
					].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => useVpnStore.getState().setDohProvider(id),
						className: cn("h-9 rounded-full px-3 text-xs font-medium", doh === id ? "bg-primary text-primary-fg" : "bg-elevated text-muted"),
						children: label
					}, id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						title: "Stealth obfuscation",
						hint: "Wrap the tunnel in TLS on 443 so it looks like ordinary HTTPS.",
						checked: obfuscation,
						onCheckedChange: useVpnStore.getState().setObfuscation
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-border" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						title: "Multi-hop",
						hint: "Route through two US cities. Entry is the selected server; pick an exit below.",
						checked: multiHop,
						onCheckedChange: useVpnStore.getState().setMultiHop
					}),
					multiHop && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-2 text-xs text-muted",
							children: [
								"Entry ",
								getServer(selectedServerId).city,
								" → exit"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: "h-10 w-full rounded-md bg-elevated px-3 text-sm text-fg shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_12%,transparent)] outline-none",
							value: multiHopExitId,
							onChange: (e) => useVpnStore.getState().setMultiHopExit(e.target.value),
							"aria-label": "Multi-hop exit city",
							children: SERVERS.filter((s) => s.id !== selectedServerId).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
								value: s.id,
								children: [
									s.city,
									", ",
									s.code,
									s.district ? ` · ${s.district}` : ""
								]
							}, s.id))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-fg",
						children: "Split tunneling"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-sm text-muted",
						children: "Checked apps bypass the tunnel. Everything else stays inside."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						checked: splitTunnel,
						onCheckedChange: useVpnStore.getState().setSplitTunnel,
						"aria-label": "Split tunneling"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: cn("mt-3 grid grid-cols-1 gap-1 sm:grid-cols-2", !splitTunnel && "opacity-40"),
					children: SPLIT_APPS.map((app) => {
						const on = splitApps.includes(app.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							disabled: !splitTunnel,
							onClick: () => useVpnStore.getState().toggleSplitApp(app.id),
							className: "flex h-11 w-full items-center justify-between rounded-lg px-3 text-sm hover:bg-elevated",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: app.label }), on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "bypass" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "default",
								children: "tunnel"
							})]
						}) }, app.id);
					})
				})]
			})
		]
	});
}
function sleep(ms) {
	return new Promise((r) => setTimeout(r, ms));
}
function SpeedView() {
	const status = useVpnStore((s) => s.status);
	const protocol = useVpnStore((s) => s.protocol);
	const obfuscation = useVpnStore((s) => s.obfuscation);
	const connectedId = useVpnStore((s) => s.connectedServerId);
	const selectedId = useVpnStore((s) => s.selectedServerId);
	const geo = useVpnStore((s) => s.clientGeo);
	const last = useVpnStore((s) => s.lastSpeed);
	const running = useVpnStore((s) => s.speedRunning);
	const [phase, setPhase] = (0, import_react.useState)("idle");
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [liveDown, setLiveDown] = (0, import_react.useState)(0);
	const [liveUp, setLiveUp] = (0, import_react.useState)(0);
	const cancel = (0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => () => {
		cancel.current += 1;
	}, []);
	async function run() {
		if (status !== "connected") return;
		const gen = ++cancel.current;
		const proto = obfuscation ? "stealth" : protocol;
		const server = getServer(connectedId ?? selectedId);
		const ping = estimateLatency(geo, server, proto);
		const load = serverLoad(server.id);
		const cap = 940 * PROTOCOL_META[proto].speed * (1 - load / 220);
		const downTarget = cap * (.72 + Math.random() * .22);
		const upTarget = cap * (.18 + Math.random() * .12);
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
			setLiveDown(downTarget * (.55 + .45 * eased));
			setProgress(10 + t * 50);
			await sleep(90);
		}
		setPhase("up");
		for (let i = 0; i <= 16; i++) {
			if (gen !== cancel.current) return;
			const t = i / 16;
			const eased = 1 - (1 - t) ** 2;
			setLiveUp(upTarget * (.5 + .5 * eased));
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
			protocol: proto
		});
		useVpnStore.getState().log("info", `Speed test ${downTarget.toFixed(0)} / ${upTarget.toFixed(0)} Mbps via ${server.city}`);
		useVpnStore.getState().setSpeedRunning(false);
		setPhase("idle");
		setProgress(100);
	}
	const server = getServer(connectedId ?? selectedId);
	const result = last;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex w-full max-w-xl flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tracking-wide text-subtle",
					children: "PATH QUALITY"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 text-2xl font-medium tracking-tight text-fg",
					children: "Speed test"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-muted",
					children: [
						"Measures the tunneled path to ",
						server.city,
						". Connect first to run a test."
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto grid size-44 place-items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							viewBox: "0 0 120 120",
							className: "absolute inset-0",
							"aria-hidden": "true",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "60",
								cy: "60",
								r: "52",
								fill: "none",
								stroke: "var(--color-border)",
								strokeWidth: "4"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "60",
								cy: "60",
								r: "52",
								fill: "none",
								stroke: "var(--color-fg)",
								strokeWidth: "4",
								strokeDasharray: `${progress / 100 * 327} 327`,
								strokeLinecap: "round",
								transform: "rotate(-90 60 60)"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-3xl font-medium tabular-nums tracking-tight text-fg",
								children: phase === "down" ? liveDown.toFixed(0) : phase === "up" ? liveUp.toFixed(0) : result ? result.downMbps.toFixed(0) : "—"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs text-muted",
								children: phase === "latency" ? "Ping" : phase === "up" ? "Mbps up" : "Mbps down"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-center text-sm text-muted",
						children: status !== "connected" ? "Connect to a city to test the tunnel." : running ? phase === "latency" ? "Sampling latency" : phase === "down" ? "Saturating download" : "Saturating upload" : "Ready"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => void run(),
							disabled: status !== "connected" || running,
							size: "lg",
							children: running ? "Testing" : "Run test"
						})
					})
				]
			}),
			result && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "grid grid-cols-2 gap-3 rounded-xl bg-surface p-4 font-mono text-sm sm:grid-cols-4",
				children: [
					["Down", `${result.downMbps.toFixed(1)} Mbps`],
					["Up", `${result.upMbps.toFixed(1)} Mbps`],
					["Ping", `${result.pingMs} ms`],
					["Jitter", `${result.jitterMs} ms`]
				].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-xs text-subtle",
					children: k
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: cn("mt-1 tabular-nums text-fg"),
					children: v
				})] }, k))
			})
		]
	});
}
function isPublicIpv4(ip) {
	const p = ip.split(".").map(Number);
	if (p.length !== 4 || p.some((n) => Number.isNaN(n))) return false;
	const [a, b] = p;
	if (a === 10 || a === 127 || a === 0) return false;
	if (a === 192 && b === 168) return false;
	if (a === 172 && b >= 16 && b <= 31) return false;
	if (a === 169 && b === 254) return false;
	return true;
}
async function fetchClientGeo() {
	try {
		const res = await fetch("https://api.ipify.org?format=json", { signal: AbortSignal.timeout(3500) });
		if (!res.ok) return null;
		const j = await res.json();
		if (!j.ip) return null;
		return {
			ip: j.ip,
			city: "",
			region: "",
			lat: 39.1,
			lng: -94.58
		};
	} catch {
		return null;
	}
}
async function collectWebRtcIps(waitMs = 1600) {
	if (typeof RTCPeerConnection === "undefined") return [];
	const ips = /* @__PURE__ */ new Set();
	const pc = new RTCPeerConnection({ iceServers: [{ urls: "stun:stun.l.google.com:19302" }] });
	try {
		pc.createDataChannel("nl");
		pc.onicecandidate = (event) => {
			const cand = event.candidate?.candidate;
			if (!cand) return;
			const found = cand.match(/\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b|\b(?:[a-fA-F0-9:]+:+)+[a-fA-F0-9]+\b/);
			if (found) ips.add(found[0]);
		};
		const offer = await pc.createOffer();
		await pc.setLocalDescription(offer);
		await new Promise((resolve) => setTimeout(resolve, waitMs));
	} catch {} finally {
		pc.close();
	}
	return [...ips];
}
function classifyLeak(tunnelIp, webrtcIps, connected) {
	const publicOnes = webrtcIps.filter(isPublicIpv4);
	if (!connected) return {
		ok: true,
		detail: publicOnes.length > 0 ? `${publicOnes.length} public ICE candidate${publicOnes.length === 1 ? "" : "s"} visible while disconnected.` : "No public ICE candidates advertised."
	};
	if (publicOnes.length === 0) return {
		ok: true,
		detail: "No public ICE candidates leaked."
	};
	if (tunnelIp && publicOnes.every((ip) => ip === tunnelIp)) return {
		ok: true,
		detail: "ICE candidates match the tunnel exit."
	};
	return {
		ok: false,
		detail: `WebRTC is advertising ${publicOnes.join(", ")} outside the tunnel.`
	};
}
function ActivityView() {
	const logs = useVpnStore((s) => s.logs);
	const status = useVpnStore((s) => s.status);
	const virtualIp = useVpnStore((s) => s.virtualIp);
	const clientGeo = useVpnStore((s) => s.clientGeo);
	const [rtc, setRtc] = (0, import_react.useState)(null);
	const [scanning, setScanning] = (0, import_react.useState)(false);
	async function scan() {
		setScanning(true);
		const [ips, geo] = await Promise.all([collectWebRtcIps(), fetchClientGeo()]);
		if (geo) useVpnStore.getState().setClientGeo(geo);
		setRtc(ips);
		setScanning(false);
	}
	const leak = classifyLeak(virtualIp, rtc ?? [], status === "connected");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex w-full max-w-3xl flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs tracking-wide text-subtle",
					children: "DIAGNOSTICS"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 text-2xl font-medium tracking-tight text-fg",
					children: "Activity"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Handshake log and a live WebRTC leak check against your current path."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-fg",
							children: "WebRTC leak check"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-sm text-muted",
							children: "Reads ICE candidates from this browser. Real check, not a mock."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => void scan(),
							disabled: scanning,
							children: scanning ? "Scanning" : rtc ? "Rescan" : "Scan"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 grid gap-3 font-mono text-xs sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Device IP"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-0.5 text-fg",
								children: clientGeo?.ip ?? "—"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-subtle",
								children: "Tunnel exit"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-0.5 text-fg",
								children: virtualIp ?? "Not connected"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-subtle",
									children: "ICE candidates"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-0.5 text-fg",
									children: rtc === null ? "Not scanned" : rtc.length ? rtc.join(" · ") : "None advertised"
								})]
							})
						]
					}),
					rtc !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: leak.ok ? "live" : "danger",
							children: leak.ok ? "No leak" : "Leak"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: leak.detail
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-3 py-2 font-mono text-xs tracking-wide text-subtle",
					children: "EVENT LOG"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "max-h-96 overflow-auto",
					children: [logs.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "px-3 py-6 text-sm text-muted",
						children: "No events yet."
					}), logs.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 border-t border-border px-3 py-2.5 font-mono text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
								className: "w-16 shrink-0 tabular-nums text-subtle",
								children: new Date(entry.at).toLocaleTimeString([], {
									hour: "2-digit",
									minute: "2-digit",
									second: "2-digit"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("w-12 shrink-0 uppercase", entry.level === "error" && "text-danger", entry.level === "warn" && "text-warn", entry.level === "info" && "text-muted"),
								children: entry.level
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-fg",
								children: entry.message
							})
						]
					}, entry.id))]
				})]
			})
		]
	});
}
var PROTOCOLS = Object.keys(PROTOCOL_META);
function SettingsView() {
	const protocol = useVpnStore((s) => s.protocol);
	const autoConnect = useVpnStore((s) => s.autoConnect);
	const setProtocol = useVpnStore((s) => s.setProtocol);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex w-full max-w-3xl flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs tracking-wide text-subtle",
				children: "CLIENT"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 text-2xl font-medium tracking-tight text-fg",
				children: "Settings"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-fg",
						children: "Tunnel protocol"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-sm text-muted",
						children: "WireGuard is the default. Stealth disguises the session as HTTPS."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid gap-2",
						children: PROTOCOLS.map((id) => {
							const meta = PROTOCOL_META[id];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setProtocol(id),
								className: cn("rounded-lg p-3 text-left transition-colors duration-150", protocol === id ? "bg-elevated" : "hover:bg-elevated/50"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium text-fg",
										children: meta.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs text-subtle",
										children: meta.short
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: meta.blurb
								})]
							}, id);
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex items-start justify-between gap-4 rounded-xl bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-fg",
					children: "Auto-connect on launch"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-sm text-muted",
					children: "Pick the lowest-latency US city when the client opens."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
					checked: autoConnect,
					onCheckedChange: useVpnStore.getState().setAutoConnect,
					"aria-label": "Auto-connect on launch"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-surface p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-fg",
						children: "About this client"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [
							"NORTHLINE is a US-only private network client: ",
							SERVERS.length,
							" cities,",
							" ",
							STATE_COUNT,
							" states. Browsers cannot install a system VPN tunnel, so the handshake, traffic meters, and speed test run as a full client simulation. The WebRTC leak check and public IP lookup are live."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-mono text-xs text-subtle",
						children: "NORTHLINE · US fleet 2026"
					})
				]
			})
		]
	});
}
function NorthlineMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: cn("text-fg", className),
		fill: "none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 2.5v19",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 2.5 7.5 8.2",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M12 2.5 16.5 8.2",
				stroke: "currentColor",
				strokeWidth: "1.5",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "14.5",
				r: "3",
				stroke: "currentColor",
				strokeWidth: "1.5"
			})
		]
	});
}
var NAV = [
	{
		id: "connect",
		label: "Connect",
		icon: Earth
	},
	{
		id: "servers",
		label: "Servers",
		icon: MapPinned
	},
	{
		id: "shield",
		label: "Shield",
		icon: Shield
	},
	{
		id: "speed",
		label: "Speed",
		icon: Gauge
	},
	{
		id: "activity",
		label: "Activity",
		icon: Activity
	},
	{
		id: "settings",
		label: "Settings",
		icon: Settings
	}
];
function AppShell() {
	const view = useVpnStore((s) => s.view);
	const setView = useVpnStore((s) => s.setView);
	const status = useVpnStore((s) => s.status);
	const protocol = useVpnStore((s) => s.protocol);
	const obfuscation = useVpnStore((s) => s.obfuscation);
	const selectedId = useVpnStore((s) => s.selectedServerId);
	const connectedId = useVpnStore((s) => s.connectedServerId);
	(0, import_react.useEffect)(() => {
		const result = useVpnStore.persist.rehydrate();
		Promise.resolve(result).then(() => {
			const store = useVpnStore.getState();
			if (store.logs.length === 0) store.log("info", "NORTHLINE client ready. US fleet online.");
			if (store.autoConnect) store.smartConnect();
		});
	}, []);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => {
			useVpnStore.getState().tickTraffic();
		}, 1e3);
		return () => window.clearInterval(id);
	}, []);
	const server = getServer(connectedId ?? selectedId);
	const proto = obfuscation ? "stealth" : protocol;
	const statusLabel = status === "connected" ? "Protected" : status === "connecting" ? "Connecting" : status === "blocked" ? "Held" : "Exposed";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
		delayDuration: 250,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-dvh flex-col bg-bg text-fg lg:flex-row",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-center justify-between gap-3 border-b border-border px-4 py-3 lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NorthlineMark, { className: "size-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium tracking-wide",
							children: "NORTHLINE"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, {
						status,
						label: statusLabel
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "order-last flex border-t border-border lg:order-none lg:h-auto lg:w-16 lg:flex-col lg:border-t-0 lg:border-r",
					"aria-label": "Primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden items-center justify-center py-5 lg:flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NorthlineMark, { className: "size-6" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex w-full justify-around lg:flex-col lg:gap-1 lg:px-2",
						children: NAV.map((item) => {
							const Icon = item.icon;
							const on = view === item.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "flex-1 lg:flex-none",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setView(item.id),
										"aria-current": on ? "page" : void 0,
										"aria-label": item.label,
										className: cn("flex h-14 w-full flex-col items-center justify-center gap-1 text-xs text-muted transition-colors duration-150 lg:h-12 lg:rounded-md", on && "text-fg lg:bg-elevated"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "size-5",
											strokeWidth: 1.5
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "lg:hidden",
											children: item.label
										})]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
									side: "right",
									className: "hidden lg:block",
									children: item.label
								})] })
							}, item.id);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-0 min-w-0 flex-1 flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden items-center justify-between gap-3 border-b border-border px-6 py-3 lg:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium tracking-widest",
								children: "NORTHLINE"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-subtle",
								children: "US PRIVATE NETWORK"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 font-mono text-xs text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: PROTOCOL_META[proto].label }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-border",
									children: "/"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									server.city,
									", ",
									server.code
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, {
									status,
									label: statusLabel
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "min-h-0 flex-1 overflow-auto p-4 pb-6 sm:p-6",
						children: view === "connect" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConnectView, {}) : view === "servers" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServersView, {}) : view === "shield" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldView, {}) : view === "speed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeedView, {}) : view === "activity" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActivityView, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsView, {})
					})]
				})
			]
		})
	});
}
function StatusChip({ status, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-xs", status === "connected" && "bg-live/15 text-live", status === "blocked" && "bg-danger/15 text-danger", status === "connecting" && "bg-warn/15 text-warn", (status === "disconnected" || status === "disconnecting") && "bg-elevated text-muted"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 rounded-full", status === "connected" && "bg-live", status === "blocked" && "bg-danger", status === "connecting" && "bg-warn", (status === "disconnected" || status === "disconnecting") && "bg-muted") }), label]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {});
}
//#endregion
export { Home as component };
