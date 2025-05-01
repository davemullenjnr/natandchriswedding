import Head from 'next/head';
import React from 'react';

export default function SEO({ title, description, keywords, author }) {
  return (
    <Head>
      <title>{title || ''}</title>
      <meta name='description' content={description || ''} />
      {keywords && <meta name='keywords' content={keywords.join(', ')} />}
      {author && <meta name='author' content={author} />}
      <meta property='og:title' content={title || ''} />
      <meta property='og:description' content={description || ''} />
      <meta property='og:type' content='website' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title || ''} />
      <meta name='twitter:description' content={description || ''} />
      {/* Add additional meta tags or override these on a per-page basis */}
    </Head>
  );
}
