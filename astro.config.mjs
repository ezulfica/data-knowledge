import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://ezulfica.github.io',
  base: '/data-knowledge',
  integrations: [mdx()],
});
