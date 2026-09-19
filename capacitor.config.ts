import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.northline.vpn",
  appName: "NORTHLINE",
  loggingBehavior: "none",
  webDir: "dist",
  server: {
    url: "https://northline-izlske4hb-princeantil7766-princeantil7766-wq.vercel.app",
    cleartext: false,
    androidScheme: "https",
  },
};

export default config;
