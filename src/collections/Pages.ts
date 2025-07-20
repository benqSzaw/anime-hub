import type { CollectionConfig } from 'payload';
import { SlugField } from '@/collections/fields/slug';
import { CTA } from '@/blocks/cta';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    ...SlugField(),
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [CTA],
      admin: {
        initCollapsed: true,
      },
    },
  ],
};
