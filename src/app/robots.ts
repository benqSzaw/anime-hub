import type { MetadataRoute } from 'next';
import { getServerURL } from '@/lib/utils';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'],
    },
    sitemap: `${getServerURL()}/sitemap.xml`,
  };
}
