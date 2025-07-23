import { GlobalConfig } from 'payload';
import { LinkField } from '@/fields/link';

export const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    {
      name: 'links',
      type: 'array',
      fields: [LinkField],
    },
  ],
};
