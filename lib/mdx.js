import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.mdx?$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { slug: realSlug, frontmatter: data, content };
}

export async function getPostBySlugMdx(slug) {
  const post = getPostBySlug(slug);
  const mdxSource = await serialize(post.content);
  return {
    slug: post.slug,
    frontmatter: post.frontmatter,
    mdxSource,
  };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug));
  return posts;
}
