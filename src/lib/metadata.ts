import type { Metadata } from 'next';
import { getServerURL } from '@/lib/utils';

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
