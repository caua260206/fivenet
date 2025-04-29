// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // CORRETO
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), // Use o plugin oficial do Astro para Tailwind
    react()
  ],
  adapter: cloudflare(),
  experimental: {
    session: true, // Ativa a funcionalidade de sessão
  },
  output: 'server',
  vite: {
    resolve: {
      alias: import.meta.env.PROD && {
        "react-dom/server": "react-dom/server.edge",
      },
    },
  },
});
