import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://eddie4k-code.github.io',
  base: '/bettorindex/',
  output: 'static',
  integrations: [sitemap()],
});
