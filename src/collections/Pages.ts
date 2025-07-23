import type { CollectionConfig } from 'payload';
import { SlugField } from '@/fields/slug';
import { CTA } from '@/blocks/cta';
import { Content } from '@/blocks/content';
import { getServerURL } from '@/lib/utils';
import { populatePublishedAt } from '@/collections/hooks/populate-published-at';
import {
  revalidateDelete,
  revalidatePage,
} from '@/collections/hooks/revalidate-page';
import { titleField } from '@/fields/title';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data }) =>
        `${getServerURL()}/${data.slug == 'home' ? '' : data.slug}`,
    },
  },
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            titleField,
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
        },
      ],
    },
    ...SlugField({
      overrides: {
        slugOverrides: {
          admin: {
            description: 'Page with "home" slug will be used as homepage',
          },
        },
      },
    }),
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
  ],
  versions: {
    drafts: {
      autosave: {
        interval: 375,
      },
    },
    maxPerDoc: 20,
  },
};
