import { type AccessArgs, TypedUser } from 'payload';

export const admin = (args: AccessArgs) => args.req.user?.role === 'admin';

export const moderator = (args: AccessArgs) => {
  const { user } = args.req;
  return user?.role === 'admin' || user?.role === 'moderator';
};

export const user = (args: AccessArgs) => {
  const { user } = args.req;
  return !!user;
};

export const adminOrOwn = (args: AccessArgs) => {
  const { user } = args.req;
  return user?.role === 'admin' || user?.id === args.id;
};

export const moderatorOrOwn = (args: AccessArgs) => {
  const { user } = args.req;
  return (
    user?.role === 'admin' || user?.role === 'moderator' || user?.id === args.id
  );
};

export const anyone = () => true;

export const checkRole = (
  user: TypedUser,
  role: 'admin' | 'moderator' | 'user',
) => {
  if (!user) return false;
  return user.role === role;
};

export const PASS_MIN_LENGTH = 8;
export const PASS_MAX_LENGTH = 32;
