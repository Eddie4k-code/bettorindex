import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bettorindex.app',
  base: '/',
  output: 'static',
  integrations: [sitemap()],
});
