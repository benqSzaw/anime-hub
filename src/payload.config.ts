import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { ENV, IS_DEV } from '@/lib/utils';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    autoLogin: IS_DEV
      ? {
          email: ENV('AUTOLOGIN_MAIL'),
          password: ENV('AUTOLOGIN_PASS'),
          prefillOnly: true,
        }
      : undefined,
  },
  collections: [Users, Media],
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
  plugins: [],
});
