import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePluginRadar } from 'vite-plugin-radar'

export default defineConfig({
  plugins: [
    react(),
    VitePluginRadar({
      analytics: [
        {
          id: "G-3QJJ2L7MVD", // Replace with your actual GA4 Measurement ID
          config: {
            send_page_view: true,
          },
        },
      ],
    }),
  ],
});
