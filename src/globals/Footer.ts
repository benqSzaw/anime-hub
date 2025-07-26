import { GlobalConfig } from 'payload';
import { LinkField } from '@/fields/link';
import { IconField } from '@/fields/icon';

export const Footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    {
      name: 'text',
      type: 'text',
      label: 'Footer Text',
      required: true,
      defaultValue: 'Animehub',
    },
    {
      name: 'socials',
      type: 'array',
      fields: [
        {
          name: 'link',
          type: 'text',
          required: true,
        },
        IconField({ required: true }),
      ],
    },
    {
      name: 'links',
      type: 'array',
      fields: [LinkField],
    },
  ],
};
