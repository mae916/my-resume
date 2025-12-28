import type { Metadata, Viewport } from 'next';
import Navigation from '@/components/Navigation';
import FloatingBtn from '@/components/FloatingBtn';
import '../styles/globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1d3557',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.jinproject.xyz'),
  title: {
    default: "Hyejin's Portfolio | 프론트엔드 개발자 김혜진",
    template: '%s | 김혜진 포트폴리오',
  },
  description:
    '기능보다 이유를 먼저 묻는 프론트엔드 개발자 김혜진입니다. React, Vue.js, TypeScript를 활용한 웹 개발 포트폴리오입니다.',
  keywords: [
    '프론트엔드 개발자',
    '김혜진',
    'React',
    'Vue.js',
    'TypeScript',
    'Next.js',
    '포트폴리오',
    '웹 개발자',
  ],
  authors: [{ name: '김혜진', url: 'https://github.com/mae916' }],
  creator: '김혜진',
  publisher: '김혜진',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://portfolio.jinproject.xyz',
    siteName: '김혜진 포트폴리오',
    title: '프론트엔드 개발자 김혜진 | Portfolio',
    description:
      '기능보다 이유를 먼저 묻는 프론트엔드 개발자 김혜진의 포트폴리오입니다.',
    images: [
      {
        url: '/images/profile.jpg',
        width: 520,
        height: 570,
        alt: '김혜진 프로필 이미지',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '프론트엔드 개발자 김혜진 | Portfolio',
    description:
      '기능보다 이유를 먼저 묻는 프론트엔드 개발자 김혜진의 포트폴리오입니다.',
    images: ['/images/profile.jpg'],
  },
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://portfolio.jinproject.xyz',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div className="lg:w-[60%] w-[95%] mx-auto mb-5 lg:mb-0">
          <Navigation />
          <main>{children}</main>
          <FloatingBtn />
          <footer className="py-8 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} 김혜진. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
