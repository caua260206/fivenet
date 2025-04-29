// @ts-check
import { defineConfig } from 'astro/config';

// @ts-ignore
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // @ts-ignore
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()],
  adapter: cloudflare(),
  experimental: {
    session: true, // Ativa a funcionalidade de sessão
  },
  output: 'server',
  vite: {
    resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      // @ts-ignore
      alias: import.meta.env.PROD && {
        "react-dom/server": "react-dom/server.edge",
      },
    },
// @ts-ignore
});