import type { CollectionConfig } from 'payload';
import {
  admin,
  anyone,
  adminOrOwn,
  moderatorOrOwn,
  moderator,
} from '@/lib/access';

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  access: {
    create: anyone,
    update: adminOrOwn,
    read: anyone,
    unlock: moderator,
    delete: moderatorOrOwn,
    admin: moderator,
    readVersions: moderator,
  },
  auth: true,
  fields: [
    {
      required: true,
      type: 'select',
      name: 'role',
      admin: {
        description: 'Only admins can assign admin or moderator roles.',
      },
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Moderator',
          value: 'moderator',
        },
        {
          label: 'User',
          value: 'user',
        },
      ],
      defaultValue: 'user',
      access: {
        create: admin,
        update: admin,
        read: anyone,
      },
    },
  ],
};
