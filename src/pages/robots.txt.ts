import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  // Generate a valid sitemap URL (rss.xml acts as your sitemap/feed)
  const sitemapURL = new URL("rss.xml", site);

  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
};

