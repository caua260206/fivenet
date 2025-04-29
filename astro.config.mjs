// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    ssr: {
      noExternal: ['@radix-ui/react-accordion']
    },

    resolve: {
      alias: {
        '@': process.env.NODE_ENV === 'production' ? '/src' : '/src'
      }
    },

    plugins: [tailwindcss()]
  }
});