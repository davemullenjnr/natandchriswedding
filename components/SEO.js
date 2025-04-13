import Head from 'next/head';
import React from 'react';

export default function SEO({ title, description, keywords, author }) {
  return (
    <Head>
      <title>{title || 'davemullenjnr.co.uk Portfolio'}</title>
      <meta name='description' content={description || 'Portfolio website'} />
      {keywords && <meta name='keywords' content={keywords.join(', ')} />}
      {author && <meta name='author' content={author} />}
      <meta
        property='og:title'
        content={title || 'davemullenjnr.co.uk Portfolio'}
      />
      <meta
        property='og:description'
        content={description || 'Portfolio website'}
      />
      <meta property='og:type' content='website' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:title'
        content={title || 'davemullenjnr.co.uk Portfolio'}
      />
      <meta
        name='twitter:description'
        content={description || 'Portfolio website'}
      />
      {/* Add additional meta tags or override these on a per-page basis */}
    </Head>
  );
}
