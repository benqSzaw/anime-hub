import type { MetadataRoute } from 'next';
import { getServerURL } from '@/lib/utils';
import { unstable_cache } from 'next/cache';
import { getAllDocuments, OTHER_PAGES } from '@/lib/payload';

export const getCachedPages = unstable_cache(
  async () => getAllDocuments('pages'),
  ['sitemap'],
  {
    tags: ['sitemap'],
  },
);

type ChangeFrequency =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (slug: string) => `${getServerURL()}/${slug}`;
  const pages = await getCachedPages();

  return [
    ...pages.map(page => ({
      url: url(page.slug === 'home' ? '' : page.slug),
      lastModified: page.publishedAt || new Date(),
      changeFrequency: 'monthly' as ChangeFrequency,
      priority: page.slug === 'home' ? 1.0 : 0.8,
    })),
    ...OTHER_PAGES.map(page => ({
      url: url(page),
      lastModified: new Date(),
      changeFrequency: 'monthly' as ChangeFrequency,
      priority: 0.8,
    })),
  ];
}
