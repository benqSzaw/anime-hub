'use server';

import { login } from '@payloadcms/next/auth';
import config from '@payload-config';

export async function loginAction({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    await login({
      collection: 'users',
      config,
      email,
      password,
    });
    return { success: true };
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, error: 'Invalid email or password' };
  }
}
