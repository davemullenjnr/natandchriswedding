import React from 'react';
import { getPostSlugs, getPostBySlugMdx } from '../../lib/mdx';
import { MDXRemote } from 'next-mdx-remote';
import styled from 'styled-components';
import SEO from '../../components/SEO';
import Layout from '../../components/Layout';

const PostWrapper = styled.article`
  padding: 2rem;
`;

export default function PostPage({ slug, frontmatter, mdxSource }) {
  return (
    <Layout>
      <SEO
        title={`${frontmatter.title} | davemullenjnr.co.uk`}
        description={frontmatter.excerpt || ''}
      />
      <PostWrapper>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
        <MDXRemote {...mdxSource} />
      </PostWrapper>
    </Layout>
  );
}

export async function getStaticPaths() {
  const slugs = getPostSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug: slug.replace(/\.mdx?$/, '') }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlugMdx(params.slug);
  return { props: post };
}