'use client';

import { classNames, isActiveLink } from '@/lib/utils';
import { navItems } from '@/data/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, useCallback } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 모바일 여부 감지
  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [checkMobile]);

  // IntersectionObserver로 스크롤 감지
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.unobserve(sentinel);
  }, []);

  return (
    <div className="relative h-20">
      <div ref={sentinelRef} className="h-0" aria-hidden="true" />

      {/* Header Background */}
      <header
        style={{
          top: isSticky ? '0px' : '40px',
          width: isSticky ? '100%' : isMobile ? '95%' : '60%',
          borderRadius: isSticky ? '0' : '50px',
          transition: 'all 0.2s ease-in-out',
        }}
        className="fixed left-0 right-0 mx-auto shadow-md z-40 h-[4.2rem] p-3 bg-primary"
        aria-hidden="true"
      />

      {/* Navigation */}
      <nav
        style={{
          top: isSticky ? '0px' : '40px',
          transition: 'all 0.2s ease-in-out',
        }}
        className="fixed top-0 left-0 right-0 mx-auto lg:w-[58.5%] w-[90%] h-[4.2rem] flex items-center justify-between z-50"
        aria-label="메인 네비게이션"
      >
        <Link
          href="/"
          className="flex items-center h-full"
          aria-label="홈으로 이동"
        >
          <div
            className="flex items-center justify-center h-[65%] mr-3 text-2xl font-medium rounded-full lg:mr-0 bg-accent text-primary aspect-square"
            aria-hidden="true"
          >
            H
          </div>
          <div className="hidden ml-3 text-xl text-white lg:block">
            HyeJin<b className="text-accent">.</b>
          </div>
        </Link>

        <ul className="flex items-center justify-between w-full pr-3 text-lg text-white lg:w-1/2">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={classNames(
                  'transition-colors hover:text-accent',
                  isActiveLink(pathname, href) && 'text-accent'
                )}
                aria-current={isActiveLink(pathname, href) ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="mailto:ruchia916@naver.com"
          className="text-lg hidden bg-[var(--background)] text-primary rounded-full h-[65%] lg:flex items-center justify-center font-semibold px-5 transition-transform duration-200 hover:scale-105 hover:bg-accent hover:text-[var(--pointcolor-white)]"
          aria-label="이메일로 연락하기"
        >
          Contact Me
        </a>
      </nav>
    </div>
  );
}
