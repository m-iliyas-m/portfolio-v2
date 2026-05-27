import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Change this to your domain after setup
export default defineConfig({
  site: 'https://yourdomain.com',
  integrations: [
    mdx(),
    sitemap(),
  ],
  output: 'static',
});
