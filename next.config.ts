import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Docker 배포를 위한 standalone 출력 모드
  output: 'standalone',

  // 이미지 최적화 설정
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // 빌드 시 ESLint 오류 무시 (CI에서는 별도로 실행)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // 빌드 시 TypeScript 오류 무시 (CI에서는 별도로 실행)
  typescript: {
    ignoreBuildErrors: true,
  },

  // 압축 활성화
  compress: true,

  // 헤더 설정 (보안 및 캐싱)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/icons/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
