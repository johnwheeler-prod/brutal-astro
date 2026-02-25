import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

function toISODate(d: Date): string {
  return d.toISOString().split('T')[0];
}

function urlEntry(loc: string, lastmod?: string): string {
  return lastmod
    ? `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
    : `  <url>\n    <loc>${loc}</loc>\n  </url>`;
}

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = site?.toString().replace(/\/$/, '') ?? 'https://johnwheelerproduction.com';

  const posts = await getCollection('blog', ({ data }) => !data.draft);

  // Collect unique lowercased tags from published posts
  const tags = [...new Set(posts.flatMap((p) => p.data.tags.map((t) => t.toLowerCase())))];

  const entries: string[] = [
    // Static pages (no reliable lastmod)
    urlEntry(`${siteUrl}/`),
    urlEntry(`${siteUrl}/blog/`),

    // Blog posts — use updatedDate, fall back to pubDate
    ...posts.map((post) => {
      const lastmod = toISODate(post.data.updatedDate ?? post.data.pubDate);
      return urlEntry(`${siteUrl}/blog/${post.slug}/`, lastmod);
    }),

    // Tag pages
    ...tags.map((tag) => urlEntry(`${siteUrl}/blog/tags/${encodeURIComponent(tag)}/`)),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
