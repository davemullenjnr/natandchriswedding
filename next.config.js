const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  compiler: {
    styledComponents: true,
  },
  // Additional Next.js config options...
});
