'use client';

import { classNames, isActiveLink } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();

  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 모바일 여부 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // IntersectionObserver
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
      <div ref={sentinelRef} className="h-0"></div>

      {/* Header Background */}
      <header
        style={{
          top: isSticky ? '0px' : '40px',
          width: isSticky ? '100%' : isMobile ? '95%' : '60%', // ✅ 조건 추가
          borderRadius: isSticky ? '0' : '50px',
          transition: 'all 0.2s ease-in-out',
        }}
        className="fixed left-0 right-0 mx-auto shadow-md z-40 h-[4.2rem] p-3 bg-primary"
      ></header>

      {/* Navigation */}
      <nav
        style={{
          top: isSticky ? '0px' : '40px',
          transition: 'all 0.2s ease-in-out',
        }}
        className="fixed top-0 left-0 right-0 mx-auto lg:w-[58.5%] w-[90%] h-[4.2rem] flex items-center justify-between z-50"
      >
        <Link href="/" className="flex items-center h-full">
          <div className="flex items-center justify-center h-[65%] mr-3 text-2xl font-medium rounded-full lg:mr-0 bg-accent text-primary aspect-square">
            H
          </div>
          <div className="hidden ml-3 text-xl text-white lg:block">
            HyeJin<b className="text-accent">.</b>
          </div>
        </Link>

        <ul className="flex items-center justify-between w-full pr-3 text-lg text-white lg:w-1/2">
          {[
            { href: '/', label: 'Home' },
            { href: '/qna', label: 'Q & A' },
            { href: '/skills', label: 'Skills' },
            { href: '/career', label: 'Career' },
            { href: '/project', label: 'Project' },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={classNames(
                  '',
                  isActiveLink(pathname, href) && ' text-accent'
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="mailto:ruchia916@naver.com"
          className="text-lg hidden bg-[var(--background)] text-primary rounded-full h-[65%] lg:flex items-center justify-center font-semibold px-5 transition-transform duration-200 hover:scale-105 hover:bg-accent hover:text-[var(--pointcolor-white)]"
        >
          Contact Me
        </a>
      </nav>
    </div>
  );
}
