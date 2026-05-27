import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Removed sitemap integration — add it back once you set a real domain
// import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://m-iliyas-m.github.io',
  base: '/portfolio-v2',   // ← must match your exact GitHub repo name
  integrations: [
    mdx(),
    // sitemap(),   ← re-enable after setting your real domain
  ],
  output: 'static',
});