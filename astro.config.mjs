import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://interestdecor.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://interestdecor.com/',
        'https://interestdecor.com/categories/',
        'https://interestdecor.com/about/',
        'https://interestdecor.com/contact/',
      ],
    }),
  ],
});