import { GlobalConfig } from 'payload';
import { urlValidation } from '@/collections/hooks/url-validation';
import { IconField } from '@/fields/icon';

export const Settings: GlobalConfig = {
  slug: 'settings',
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      filterOptions: {
        mimeType: { contains: 'image' },
      },
    },
    {
      name: 'socials',
      type: 'array',
      fields: [
        {
          name: 'link',
          type: 'text',
          required: true,
          //@ts-expect-error payload does not recognize type of value
          validate: value => urlValidation(value),
        },
        IconField({ required: true }),
      ],
    },
  ],
};
