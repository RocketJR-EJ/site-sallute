// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://clinicasallute.com.br',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    domains: ['clinicasallute.com.br'],
    remotePatterns: [{ protocol: "https" }]
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});