export function ENV(key: string, defaultValue?: string) {
  const value = process.env[key];
  if (value === undefined) {
    if (defaultValue === undefined)
      throw new Error(`Env variable ${key} is not defined`);
    return defaultValue;
  }
  return value;
}

export const IS_DEV = process.env.NODE_ENV == 'development';

export function getServerURL() {
  return ENV('URL', 'http://localhost:3000');
}

export function getClientURL() {
  if (canUseDOM) {
    const protocol = window.location.protocol;
    const domain = window.location.hostname;
    const port = window.location.port;
    return `${protocol}//${domain}${port ? `:${port}` : ''}`;
  }
  return getServerURL();
}

export const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);
