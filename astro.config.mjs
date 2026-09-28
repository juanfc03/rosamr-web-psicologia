// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://rosamruizpsicologa.es',
  trailingSlash: 'always',
  compressHTML: true,

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Onest',
      cssVariable: '--font-onest',
      weights: ['100 900'],
      fallbacks: ['Arial', 'Helvetica Neue', 'system-ui', 'sans-serif'],
      display: 'swap',
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Newsreader',
      cssVariable: '--font-newsreader',
      weights: [400],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'Times New Roman', 'serif'],
      display: 'swap',
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    inlineStylesheets: 'always',
  },

  integrations: [
    sitemap({
      serialize(item) {
        if (
          /aviso-legal|politica-de-cookies|politica-de-privacidad/.test(
            item.url,
          )
        ) {
          return undefined;
        }
        return item;
      },
    }),
  ],
});
