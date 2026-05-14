// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://rosamruizpsicologa.es',
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()],
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
