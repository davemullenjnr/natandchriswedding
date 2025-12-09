import Head from 'next/head';
import React from 'react';

export default function SEO({ title, description, keywords, author, image }) {
  // Default to the main site domain for og:image URLs
  const getImageUrl = (img) => {
    if (!img) return null;
    // If it's already a full URL, use it as-is
    if (img.startsWith('http')) return img;
    // Otherwise, construct the full URL
    return `https://thescottwedding.co.uk${img}`;
  };

  const imageUrl = getImageUrl(image);

  return (
    <Head>
      <title>{title || ''}</title>
      <meta name='description' content={description || ''} />
      {keywords && <meta name='keywords' content={keywords.join(', ')} />}
      {author && <meta name='author' content={author} />}
      <meta property='og:title' content={title || ''} />
      <meta property='og:description' content={description || ''} />
      <meta property='og:type' content='website' />
      {imageUrl && (
        <>
          <meta property='og:image' content={imageUrl} />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />
        </>
      )}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title || ''} />
      <meta name='twitter:description' content={description || ''} />
      {imageUrl && <meta name='twitter:image' content={imageUrl} />}
      {/* Add additional meta tags or override these on a per-page basis */}
    </Head>
  );
}
