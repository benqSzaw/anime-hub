import type { Metadata } from 'next';
import { getServerURL } from '@/lib/utils';
import { Media, Page } from '@/payload-types';
import { formatPageSlug } from '@/lib/payload';

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  url: getServerURL(),
  images: [
    {
      url: `${getServerURL()}/og-imgae.webp`,
    },
  ],
  siteName: 'Anime Hub',
  title: 'Anime Hub',
  locale: 'en-US',
  description:
    'Discover and watch your favorite anime series and movies online.',
};

export const mergeOpenGraph = (
  og?: Metadata['openGraph'],
): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  };
};

export const layoutMeta: Metadata = {
  title: {
    default: 'Anime Hub',
    template: '%s | Anime Hub',
  },
  description:
    'Discover and watch your favorite anime series and movies online.',
  openGraph: mergeOpenGraph(),
};

export const generatePageMeta = (page: Page): Metadata => {
  const img = page.meta?.image as Media;
  return {
    title: page.meta?.title,
    description: page.meta?.description,
    openGraph: mergeOpenGraph({
      title: page.meta?.title || undefined,
      description: page.meta?.description || undefined,
      url: `${getServerURL()}/${formatPageSlug(page.slug)}`,
      images: img && [
        {
          url: img.url as string,
          alt: img.alt,
          width: img.width || 1200,
          height: img.height || 630,
        },
      ],
    }),
  };
};
