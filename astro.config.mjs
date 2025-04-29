// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  adapter: cloudflare(),
  output: 'server',
  vite: {
    ssr: {
      noExternal: ['@radix-ui/react-accordion']
    },
    resolve: {
      alias: {
        '@': process.env.NODE_ENV === 'production' ? '/src' : '/src'
      }
    }
  }
});