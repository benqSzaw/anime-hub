import type { CollectionConfig } from 'payload';
import {
  admin,
  adminOrOwn,
  anyone,
  moderator,
  moderatorOrOwn,
} from '@/lib/access';
import { renderVerifyEmail } from '@/emails/get-email';

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
  auth: {
    verify: {
      generateEmailSubject: () => `Verify your account on Anime Hub`,
      generateEmailHTML: async ({ token, user }) =>
        renderVerifyEmail(user.username, token),
    },
  },
  fields: [
    {
      required: true,
      unique: true,
      name: 'username',
      type: 'text',
    },
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
