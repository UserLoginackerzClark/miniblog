import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(), // ✅ allows string like "2025-10-24"
    updatedDate: z.coerce.date().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};

