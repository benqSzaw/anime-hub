import type { CollectionConfig } from 'payload';
import { SlugField } from '@/collections/fields/slug';
import { CTA } from '@/blocks/cta';
import { Content } from '@/blocks/content';
import { getServerURL } from '@/lib/utils';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data }) => `${getServerURL()}/${data.slug}`,
    },
  },
  fields: [
    ...SlugField(),
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [CTA, Content],
      admin: {
        initCollapsed: true,
      },
    },
  ],
  versions: {
    drafts: {
      autosave: {
        interval: 375,
      },
    },
  },
};
