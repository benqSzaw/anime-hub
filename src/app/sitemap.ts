import type { MetadataRoute } from 'next';
import { getServerURL } from '@/lib/utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (slug: string) => `${getServerURL()}/${slug}`;

  return [
    {
      url: url(''),
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
