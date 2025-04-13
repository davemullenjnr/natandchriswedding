import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { getAllPosts } from '../../lib/mdx';

const BlogList = styled.div`
  padding: 2rem;
`;

const PostItem = styled.div`
  margin-bottom: 2rem;
`;

const PostTitle = styled.h2`
  margin: 0;
`;

const PostDate = styled.p`
  margin: 0.5rem 0;
  font-size: 0.9rem;
  color: #666;
`;

export default function BlogIndex({ posts }) {
  return (
    <Layout>
      <SEO title="Blog | davemullenjnr.co.uk" description="List of blog posts" />
      <BlogList>
        <h1>Blog</h1>
        {posts.map((post) => (
          <PostItem key={post.slug}>
            <Link href={`/blog/${post.slug}`} passHref legacyBehavior>
              <a>
                <PostTitle>{post.frontmatter.title}</PostTitle>
              </a>
            </Link>
            <PostDate>{post.frontmatter.date}</PostDate>
            <p>{post.frontmatter.excerpt}</p>
          </PostItem>
        ))}
      </BlogList>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  // Sort posts by date descending (newest first)
  posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

  return {
    props: { posts }
  };
}