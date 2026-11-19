import { defineConfig } from 'astro/config';

// Fully static site. Set `site` to the production URL once known (enables canonical + social-share URLs).
export default defineConfig({
  // site: 'https://example.com',
  build: { inlineStylesheets: 'auto' },
});
