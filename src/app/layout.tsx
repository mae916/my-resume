import type { Metadata, Viewport } from 'next';
import Navigation from '@/components/Navigation';
import FloatingBtn from '@/components/FloatingBtn';
import { Github, Mail, Linkedin } from 'lucide-react';
import '../styles/globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0a0a',
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
      <body className="min-h-screen bg-dark">
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
