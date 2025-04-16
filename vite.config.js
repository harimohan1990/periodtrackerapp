import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Period Tracking App',
        short_name: 'Period Tracker',
        description: 'A simple app to track period dates and moods',
        theme_color: '#ff77a9',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'https://periodtrackerapp.vercel.app/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'https://periodtrackerapp.vercel.app/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
