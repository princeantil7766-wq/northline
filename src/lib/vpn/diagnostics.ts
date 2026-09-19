import type { ClientGeo } from "./types";

function isPublicIpv4(ip: string): boolean {
  const p = ip.split(".").map(Number);
  if (p.length !== 4 || p.some((n) => Number.isNaN(n))) return false;
  const [a, b] = p as [number, number, number, number];
  if (a === 10 || a === 127 || a === 0) return false;
  if (a === 192 && b === 168) return false;
  if (a === 172 && b >= 16 && b <= 31) return false;
  if (a === 169 && b === 254) return false;
  return true;
}

export async function fetchClientGeo(): Promise<ClientGeo | null> {
  try {
    const res = await fetch("https://api.ipify.org?format=json", {
      signal: AbortSignal.timeout(3500),
    });
    if (!res.ok) return null;
    const j = (await res.json()) as { ip?: string };
    if (!j.ip) return null;
    return {
      ip: j.ip,
      city: "",
      region: "",
      lat: 39.1,
      lng: -94.58,
    };
  } catch {
    return null;
  }
}

export async function collectWebRtcIps(waitMs = 1600): Promise<string[]> {
  if (typeof RTCPeerConnection === "undefined") return [];
  const ips = new Set<string>();
  const pc = new RTCPeerConnection({
    iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
  });

  try {
    pc.createDataChannel("nl");
    pc.onicecandidate = (event) => {
      const cand = event.candidate?.candidate;
      if (!cand) return;
      const found = cand.match(
        /\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b|\b(?:[a-fA-F0-9:]+:+)+[a-fA-F0-9]+\b/,
      );
      if (found) ips.add(found[0]!);
    };
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    await new Promise((resolve) => setTimeout(resolve, waitMs));
  } catch {
    /* WebRTC blocked */
  } finally {
    pc.close();
  }

  return [...ips];
}

export function classifyLeak(
  tunnelIp: string | null,
  webrtcIps: string[],
  connected: boolean,
): { ok: boolean; detail: string } {
  const publicOnes = webrtcIps.filter(isPublicIpv4);
  if (!connected) {
    return {
      ok: true,
      detail:
        publicOnes.length > 0
          ? `${publicOnes.length} public ICE candidate${publicOnes.length === 1 ? "" : "s"} visible while disconnected.`
          : "No public ICE candidates advertised.",
    };
  }
  if (publicOnes.length === 0) {
    return { ok: true, detail: "No public ICE candidates leaked." };
  }
  if (tunnelIp && publicOnes.every((ip) => ip === tunnelIp)) {
    return { ok: true, detail: "ICE candidates match the tunnel exit." };
  }
  return {
    ok: false,
    detail: `WebRTC is advertising ${publicOnes.join(", ")} outside the tunnel.`,
  };
}
