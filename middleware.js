// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = new URL(req.url);
  const { hostname, pathname } = url;

  if (!pathname.startsWith('/registry')) return NextResponse.next();

  const allowed =
    hostname === 'photos.thescottwedding.co.uk' ||
    hostname.startsWith('localhost') ||
    hostname.startsWith('127.0.0.1');

  if (allowed) return NextResponse.next();

  // 404 for other hosts (or redirect if you prefer)
  return NextResponse.rewrite(new URL('/404', req.url));
}

export const config = { matcher: ['/registry/:path*'] };
