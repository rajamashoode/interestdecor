import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Slugs excluded from active listings (homepage, category, hub grids).
 * The posts themselves are never deleted or unrouted, only hidden from
 * "recent" style listings so they are not actively promoted.
 */
export const RETIRED_SLUGS: string[] = ['4th-of-july-decor-ideas'];

let cachedLivePosts: CollectionEntry<'blog'>[] | null = null;

/**
 * Returns published blog posts sorted newest first, excluding
 * future-dated posts (date after the current build/request time)
 * and retired seasonal posts. The schema has no draft/scheduled
 * field, so the existing date field doubles as the scheduling signal.
 */
export async function getLivePosts(): Promise<CollectionEntry<'blog'>[]> {
  if (cachedLivePosts) return cachedLivePosts;

  const now = new Date();
  const all = await getCollection('blog');

  cachedLivePosts = all
    .filter((post) => post.data.date <= now)
    .filter((post) => !RETIRED_SLUGS.includes(post.slug))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return cachedLivePosts;
}
