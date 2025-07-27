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
import { OTHER_PAGES } from '@/lib/payload';

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
          //@ts-expect-error payload not recognizing the type
          validate: value => {
            if (OTHER_PAGES.includes(value))
              return `The slug "${value}" is reserved and cannot be used.`;
            return true;
          },
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
