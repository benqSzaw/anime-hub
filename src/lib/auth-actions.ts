'use server';

import { login } from '@payloadcms/next/auth';
import config from '@payload-config';
import { getPayloadInstance } from '@/lib/payload';

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

export async function registerAction({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) {
  try {
    const payload = await getPayloadInstance();

    const isEmailTaken = await payload
      .find({
        collection: 'users',
        where: {
          email: {
            equals: email,
          },
        },
      })
      .then(res => res.totalDocs > 0);
    if (isEmailTaken)
      return {
        success: false,
        error: 'User with that email already exists',
      };

    const isUsernameTaken = await payload
      .find({
        collection: 'users',
        where: {
          username: {
            equals: username,
          },
        },
      })
      .then(res => res.totalDocs > 0);
    if (isUsernameTaken)
      return {
        success: false,
        error: 'User with that username already exists',
      };

    await payload.create({
      collection: 'users',
      data: {
        username,
        email,
        password,
        role: 'user',
      },
    });
    return { success: true };
  } catch (error) {
    console.error('Registration error:', error);
    return { success: false, error: 'Registration error' };
  }
}

export async function verifyAction(token: string) {
  try {
    const payload = await getPayloadInstance();
    await payload.verifyEmail({
      collection: 'users',
      token,
    });

    return { success: true };
  } catch (error) {
    console.error('Verification error:', error);
    return { success: false };
  }
}
