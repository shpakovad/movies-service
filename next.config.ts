
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? {
            exclude: ['error', 'warn'],
          }
        : false,
    styledComponents: false,
  },
  experimental: {
    webpackBuildWorker: false,
    optimizePackageImports: ['antd', '@ant-design/icons'],
    optimizeServerReact: true,
    serverMinification: true,
    optimizeCss: true,
  },
  async headers() {
    return [
      {
        source: '/_next/static/css/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.tvmaze.com',
        pathname: '/uploads/images/**',
      },
    ],

    formats: ['image/avif', 'image/webp'],

    unoptimized: false,

    minimumCacheTTL: 60 * 60 * 24 * 7,

    qualities: [55],

    ...(process.env.NODE_ENV === 'development' && {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    }),
  },
};

export default nextConfig;
