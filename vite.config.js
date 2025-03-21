import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import { VitePluginRadar } from "vite-plugin-radar";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePluginRadar({
      analytics: [
        {
          id: "G-3QJJ2L7MVD",
          config: {
            send_page_view: true,
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
