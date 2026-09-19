export function formatBytes(n: number): string {
  if (n < 1024) return `${Math.round(n)} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  if (n < 1024 * 1024 * 1024) return `${(n / (1024 * 1024)).toFixed(1)} MB`;
  return `${(n / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}

export function formatBps(bytesPerSec: number): string {
  const bits = bytesPerSec * 8;
  if (bits < 1000) return `${Math.round(bits)} bps`;
  if (bits < 1_000_000) return `${(bits / 1000).toFixed(0)} Kbps`;
  if (bits < 1_000_000_000) return `${(bits / 1_000_000).toFixed(1)} Mbps`;
  return `${(bits / 1_000_000_000).toFixed(2)} Gbps`;
}

export function formatDuration(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const pad = (v: number) => v.toString().padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

export function formatPing(ms: number): string {
  return `${Math.round(ms)} ms`;
}

export function formatLoad(pct: number): string {
  return `${Math.round(pct)}%`;
}

export function loadTone(pct: number): "live" | "warn" | "danger" {
  if (pct < 45) return "live";
  if (pct < 75) return "warn";
  return "danger";
}
