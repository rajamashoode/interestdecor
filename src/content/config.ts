import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    excerpt: z.string(),
    category: z.string(),
    categorySlug: z.string(),
    date: z.coerce.date(),
    displayDate: z.string(),
    readTime: z.string(),
    heroImage: z.string(),
    heroAlt: z.string(),
    author: z.string().default('Mashood Elahi'),
    keywords: z.string().optional(),
    toc: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    relatedPost: z
      .object({
        slug: z.string(),
        hook: z.string(),
      })
      .optional(),
  }),
});

export const collections = { blog };
