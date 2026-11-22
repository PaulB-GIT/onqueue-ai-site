import type { APIRoute } from 'astro';
import { site } from '../config/site';

/**
 * robots.txt is generated from src/config/site.ts.
 * While `allowIndexing` is false we still ALLOW crawling, so search engines can
 * read the "noindex" tag on each page (a blocked page can't be read, and can
 * still appear in results as a bare link). Pages say noindex until launch.
 */
export const GET: APIRoute = ({ site: siteUrl }) => {
  const lines = ['User-agent: *', 'Allow: /'];
  if (site.allowIndexing && siteUrl) lines.push('', `Sitemap: ${new URL('sitemap-index.xml', siteUrl).href}`);
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
