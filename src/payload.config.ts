import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { Pages } from './collections/Pages';

import { Header } from './globals/Header';
import { Footer } from './globals/Footer';

import { ENV, getServerURL, IS_DEV } from '@/lib/utils';
import { seoPlugin } from '@payloadcms/plugin-seo';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: ' | Anime Hub',
      description: 'Admin panel Anime Hub',
      icons: [
        {
          rel: 'icon',
          type: 'image/ico',
          url: '/favicon.ico',
        },
      ],
    },
    components: {
      graphics: {
        Icon: './components/payload/icon',
        Logo: './components/payload/logo',
      },
      beforeDashboard: ['./components/payload/before-dashboard'],
      beforeNavLinks: ['./components/payload/before-nav'],
    },
    avatar: {
      Component: './components/payload/avatar',
    },
    autoLogin: IS_DEV
      ? {
          email: ENV('AUTOLOGIN_MAIL'),
          password: ENV('AUTOLOGIN_PASS'),
          prefillOnly: true,
        }
      : undefined,
    livePreview: {
      breakpoints: [
        {
          label: 'Small',
          name: 'sm',
          width: 640,
          height: 960,
        },
        {
          label: 'Medium',
          name: 'md',
          width: 768,
          height: 1024,
        },
        {
          label: 'Large',
          name: 'lg',
          width: 1024,
          height: 1366,
        },
        {
          label: 'Extra Large',
          name: 'xl',
          width: 1280,
          height: 800,
        },
        {
          label: '2X Large',
          name: '2xl',
          width: 1536,
          height: 960,
        },
      ],
    },
  },
  collections: [Users, Media, Pages],
  globals: [Header, Footer],
  editor: lexicalEditor(),
  secret: ENV('PAYLOAD_SECRET'),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: ENV('DATABASE_URI'),
    },
  }),
  sharp,
  plugins: [
    seoPlugin({
      collections: ['pages'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => `${doc.title} | Anime Hub`,
      generateURL: ({ doc }) => `${getServerURL()}/${doc.slug}`,
      tabbedUI: true,
    }),
  ],
});
