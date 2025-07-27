import { GlobalConfig } from 'payload';
import { LinkField } from '@/fields/link';

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
      name: 'links',
      type: 'array',
      fields: [LinkField],
    },
  ],
};
