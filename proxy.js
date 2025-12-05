// proxy.js
import { NextResponse } from 'next/server';

export function proxy(req) {
  const url = new URL(req.url);
  const { hostname, pathname } = url;

  const isPhotosHost =
    hostname === 'photos.thescottwedding.co.uk' ||
    hostname.startsWith('localhost') ||
    hostname.startsWith('127.0.0.1');

  // 1) Gate /registry so it's ONLY visible on photos.*
  if (pathname.startsWith('/registry') && !isPhotosHost) {
    return NextResponse.rewrite(new URL('/404', req.url));
  }

  // 2) On photos.* root ("/"), show ceremony photos instead of your default homepage
  if (isPhotosHost && (pathname === '/' || pathname === '')) {
    return NextResponse.rewrite(new URL('/ceremony', req.url));
  }

  return NextResponse.next();
}

// Intercept site root and /registry
export const config = {
  matcher: ['/', '/registry/:path*'],
};
