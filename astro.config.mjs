// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import { fileURLToPath } from 'node:url';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://rosamruizpsicologa.es',
  trailingSlash: 'always',

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Onest',
      cssVariable: '--font-onest',
      weights: ['100 900'],
      fallbacks: ['Arial', 'Helvetica Neue', 'system-ui', 'sans-serif'],
      display: 'fallback',
    },
  ],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },

  build: {
    inlineStylesheets: 'always',
  },

  integrations: [
    sitemap({
      serialize(item) {
        if (/aviso-legal|politica-de-cookies|politica-de-privacidad/.test(item.url)) {
          return undefined;
        }
        return item;
      },
    }),
  ],
});
