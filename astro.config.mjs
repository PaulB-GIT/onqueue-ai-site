// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * The site's public address (confirmed by Paul on 2026-11-22).
 * Used for canonical URLs, share links and the sitemap.
 * It can be overridden with a SITE_URL environment variable if it ever changes.
 * Search engines are still asked NOT to index the site until
 * `allowIndexing` is set to true in src/config/site.ts.
 */
const SITE_URL = process.env.SITE_URL || 'https://ai.onqueueva.com';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: SITE_URL ? [sitemap({ filter: (page) => !page.includes('/404') })] : [],
});
