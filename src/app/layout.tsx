import type { Metadata, Viewport } from 'next';
import Navigation from '@/components/Navigation';
import FloatingBtn from '@/components/FloatingBtn';
import { Github, Mail } from 'lucide-react';
import { getYearsOfExperience } from '@/lib/career';
import '../styles/globals.css';

// 경력 연차 (공통 유틸리티 사용)
const yearsOfExperience = getYearsOfExperience();

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0a0a0a' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://profile.jinproject.xyz'),
  title: {
    default: '프론트엔드 개발자 포트폴리오 | 김혜진 - React, Next.js, TypeScript',
    template: '%s | 프론트엔드 개발자 김혜진',
  },
  description: `프론트엔드 개발자 포트폴리오 | ${yearsOfExperience}년차 프론트엔드 개발자 김혜진입니다. React, Vue.js, Next.js, TypeScript 기반 웹 개발 전문. 사용자 경험을 최우선으로 생각하며, 비즈니스 가치를 만드는 프론트엔드 개발자입니다.`,
  keywords: [
    '프론트엔드 개발자 포트폴리오',
    '프론트엔드 개발자',
    '프론트엔드 포트폴리오',
    '프론트엔드 개발자 이력서',
    '프론트엔드 개발자 채용',
    'React 개발자',
    'React 개발자 포트폴리오',
    'Vue.js 개발자',
    'Next.js 개발자',
    'TypeScript 개발자',
    '웹 개발자 포트폴리오',
    '웹 프론트엔드 개발자',
    '프리랜서 프론트엔드 개발자',
    'Frontend Developer Portfolio',
    '개발자 포트폴리오',
    '김혜진 포트폴리오',
    '서울 프론트엔드 개발자',
    'JavaScript 개발자',
  ],
  authors: [{ name: '김혜진', url: 'https://github.com/mae916' }],
  creator: '김혜진',
  publisher: '김혜진',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://profile.jinproject.xyz',
    siteName: '프론트엔드 개발자 김혜진 포트폴리오',
    title: '프론트엔드 개발자 포트폴리오 | 김혜진 - React, Next.js, TypeScript',
    description: `프론트엔드 개발자 포트폴리오 | ${yearsOfExperience}년차 프론트엔드 개발자 김혜진. React, Vue.js, Next.js, TypeScript 기반 웹 개발 전문.`,
    images: [
      {
        url: '/images/profile.jpg',
        width: 520,
        height: 570,
        alt: '프론트엔드 개발자 포트폴리오 - 김혜진',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '프론트엔드 개발자 포트폴리오 | 김혜진',
    description: `프론트엔드 개발자 포트폴리오 | ${yearsOfExperience}년차 프론트엔드 개발자 김혜진. React, Next.js, TypeScript 전문.`,
    images: ['/images/profile.jpg'],
    creator: '@hyejin_dev',
  },
  category: 'technology',
  classification: 'Portfolio',
  alternates: {
    canonical: 'https://profile.jinproject.xyz',
    languages: {
      'ko-KR': 'https://profile.jinproject.xyz',
    },
  },
  other: {
    'naver-site-verification': '4aadc5d2f8667c22b2835a51a9ce82523656b677',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="min-h-screen bg-dark">
        {/* JSON-LD: Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: '김혜진',
              alternateName: 'Hyejin Kim',
              jobTitle: '프론트엔드 개발자',
              description: `프론트엔드 개발자 포트폴리오 | ${yearsOfExperience}년차 프론트엔드 개발자. React, Vue.js, Next.js, TypeScript 전문.`,
              url: 'https://profile.jinproject.xyz',
              image: 'https://profile.jinproject.xyz/images/profile.jpg',
              sameAs: [
                'https://github.com/mae916',
              ],
              knowsAbout: [
                'React',
                'Vue.js',
                'Next.js',
                'TypeScript',
                'JavaScript',
                'Tailwind CSS',
                'NestJS',
                'PostgreSQL',
                'Docker',
                'AWS',
              ],
              worksFor: {
                '@type': 'Organization',
                name: '프리랜서',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Seoul',
                addressCountry: 'KR',
              },
            }),
          }}
        />
        {/* JSON-LD: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: '프론트엔드 개발자 김혜진 포트폴리오',
              alternateName: 'Frontend Developer Hyejin Kim Portfolio',
              url: 'https://profile.jinproject.xyz',
              description: `프론트엔드 개발자 포트폴리오 | ${yearsOfExperience}년차 프론트엔드 개발자 김혜진`,
              author: {
                '@type': 'Person',
                name: '김혜진',
              },
              inLanguage: 'ko-KR',
            }),
          }}
        />
        {/* JSON-LD: BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: '홈', item: 'https://profile.jinproject.xyz' },
                { '@type': 'ListItem', position: 2, name: 'Q&A', item: 'https://profile.jinproject.xyz/qna' },
                { '@type': 'ListItem', position: 3, name: 'Skills', item: 'https://profile.jinproject.xyz/skills' },
                { '@type': 'ListItem', position: 4, name: 'Career', item: 'https://profile.jinproject.xyz/career' },
                { '@type': 'ListItem', position: 5, name: 'Projects', item: 'https://profile.jinproject.xyz/project' },
                { '@type': 'ListItem', position: 6, name: 'Contact', item: 'https://profile.jinproject.xyz/contact' },
              ],
            }),
          }}
        />

        <div className="lg:w-[60%] w-[95%] mx-auto">
          <Navigation />
          <main className="animate-fade-up">{children}</main>
          <FloatingBtn />

          {/* Footer */}
          <footer className="py-16 border-t border-dark-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left */}
              <div className="text-center md:text-left">
                <p className="text-2xl font-bold text-light mb-2">
                  hyejin<span className="text-accent">.</span>dev
                </p>
                <p className="text-sm text-muted">
                  Frontend Developer based in Seoul
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/mae916"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-dark-100 border border-dark-200 text-muted hover:text-light hover:border-dark-300 transition-all"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href="/contact"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-dark-100 border border-dark-200 text-muted hover:text-light hover:border-dark-300 transition-all"
                  aria-label="Contact"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-dark-200 text-center">
              <p className="text-sm text-muted">
                &copy; {new Date().getFullYear()} Kim Hyejin. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
