import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sushilkhatri.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
