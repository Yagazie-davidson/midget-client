import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Midget",
        short_name: "Midget",
        start_url: "/",
        display: "standalone",
        icons: [
          {
            src: "https://i.ibb.co/5xcDvpz/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "https://i.ibb.co/k8DSbbV/icon-256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "https://i.ibb.co/ZVpfZJV/icon-384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "https://i.ibb.co/8rq1W00/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        background_color: "#ffffff",
        lang: "en",
        scope: "/",
        theme_color: "#ffffff",
      },
      injectRegister: "auto",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
    }),
    react(),
  ],
});
