import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://interestdecor.com',
  output: 'hybrid',
  adapter: vercel(),
  trailingSlash: 'always',
});