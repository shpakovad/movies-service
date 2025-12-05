// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    webpackBuildWorker: false,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.tvmaze.com',
        pathname: '/uploads/images/**',
      },
    ],

    formats: ['image/webp', 'image/avif'],

    unoptimized: false,

    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 дней

    ...(process.env.NODE_ENV === 'development' && {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    }),
  },
};

export default nextConfig;
