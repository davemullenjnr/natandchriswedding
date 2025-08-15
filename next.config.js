module.exports = {
  compiler: {
    styledComponents: true,
  },
  images: {
    // add higher widths so 1350/2160/2700 candidates exist
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1350, 1920, 2160, 2700],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
  },
  // Additional Next.js config options...
};
