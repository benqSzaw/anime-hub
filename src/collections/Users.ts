import type { CollectionConfig } from 'payload';
import {
  admin,
  anyone,
  adminOrOwn,
  moderatorOrOwn,
  moderator,
} from '@/lib/access';
import { getServerURL } from '@/lib/utils';

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
      generateEmailHTML: ({ token, user }) => `
        <p>Hi ${user.username},</p>
        <p>Thank you for registering on Anime Hub. Please click the link below to verify your account:</p>
        <p><a href=${getServerURL()}/verify?t=${token}>Verify Account</a></p>
        <p>If you did not create this account, please ignore this email.</p>
      `,
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
