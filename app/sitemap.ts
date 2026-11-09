import { MetadataRoute } from "next";

/**
 * Next.js Dynamic Sitemap Generator (App Router)
 *
 * Purpose:
 * - Automatically generates a `sitemap.xml` file at build time / runtime (`https://www.intelleon.com/sitemap.xml`).
 * - Helps Search Engines (Google, Bing) and AI Crawlers (GPTBot, ClaudeBot, Perplexity) discover, crawl, and index all public URLs efficiently.
 * - Maximizes SEO / AIO score by indicating page priority and content modification frequency.
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.intelleon.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    // 2. Dynamic Routes Example (e.g., Blog posts, Case studies, Projects, Services)
    // If you fetch data from a Database (Prisma, PostgreSQL) or CMS, unlock this section:
    /*
    const posts = await fetch('https://api.intelleon.com/posts').then((res) => res.json());

    const dynamicBlogRoutes: MetadataRoute.Sitemap = posts.map((post: { slug: string; updatedAt: string }) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt),
        changeFrequency: 'weekly',
        priority: 0.6,
    }));
  */
  ];
}
