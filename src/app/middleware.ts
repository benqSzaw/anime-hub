import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getServerURL } from '@/lib/utils';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  response.headers.set(
    'Content-Security-Policy',
    `frame-ancestors 'self' ${getServerURL()}`,
  );
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');

  return response;
}
