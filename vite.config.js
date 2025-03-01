import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from '@tailwindcss/vite';

/* eslint-disable no-template-curly-in-string */
export default defineConfig(() => ({
  server: {
    port: 3000,
    proxy: {
      '/api/socket': 'ws://s1.mastermind-portal.com:8082',
      '/api': 'http://s1.mastermind-portal.com:8082',
    },
  },
  build: {
    outDir: 'build',
  },
  plugins: [
    tailwindcss(),
    svgr(),
    react(),
    VitePWA({
      includeAssets: ['favicon.ico', 'apple-touch-icon-180x180.png'],
      workbox: {
        navigateFallbackDenylist: [/^\/api/],
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
        globPatterns: ['**/*.{js,css,html,woff,woff2,mp3}'],
      },
      manifest: {
        "name": "GBTracker GPS Tracking",
        "short_name": "GBTracker",
        "start_url": "/app/",
        "display": "standalone",
        "background_color": "#ffffff",
        "lang": "en",
        "scope": "/app/",
        "theme_color": "#ffffff",
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
}));
