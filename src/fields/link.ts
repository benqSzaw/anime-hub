import { GroupField } from 'payload';

export const LinkField: GroupField = {
  name: 'link',
  type: 'group',
  admin: {
    hideGutter: true,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          type: 'radio',
          name: 'type',
          label: 'Link Type',
          required: true,
          defaultValue: 'reference',
          options: [
            {
              label: 'Reference',
              value: 'reference',
            },
            {
              label: 'Custom URL',
              value: 'custom',
            },
          ],
        },
        {
          name: 'newTab',
          type: 'checkbox',
          admin: {
            style: {
              alignSelf: 'flex-end',
            },
            width: '50%',
          },
          label: 'Open in new tab',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Label',
        },
        {
          name: 'reference',
          type: 'relationship',
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'reference',
          },
          label: 'Document to link to',
          relationTo: ['pages'],
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'custom',
          },
          label: 'Custom URL',
          required: true,
        },
      ],
    },
  ],
};
