'use server';

import { login, logout } from '@payloadcms/next/auth';
import config from '@payload-config';
import { getPayloadInstance } from '@/lib/payload';
import { headers as getHeaders } from 'next/headers';

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

export async function forgotAction(email: string) {
  try {
    const payload = await getPayloadInstance();
    const isUserExist = await payload
      .find({
        collection: 'users',
        where: {
          email: {
            equals: email,
          },
        },
      })
      .then(res => res.totalDocs > 0);

    if (!isUserExist) {
      return { success: false, error: 'User with that email does not exist' };
    }

    await payload.forgotPassword({
      collection: 'users',
      data: {
        email,
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Forgot password error:', error);
    return {
      success: false,
      error: 'Error processing forgot password request',
    };
  }
}

export async function resetAction(token: string, password: string) {
  try {
    const payload = await getPayloadInstance();
    await payload.resetPassword({
      collection: 'users',
      overrideAccess: true,
      data: {
        token,
        password,
      },
    });
    return { success: true };
  } catch (error) {
    console.error('Reset password error:', error);
    return { success: false, error: 'Error resetting password' };
  }
}

export async function logoutAction() {
  try {
    await logout({ allSessions: true, config });
    return { success: true };
  } catch (error) {
    console.error('Logout error:', error);
    return { success: false, error: 'Logout failed' };
  }
}

export async function authenticateUser() {
  const payload = await getPayloadInstance();
  const headers = await getHeaders();
  const { user } = await payload.auth({ headers });
  return !!user;
}
