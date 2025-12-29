'use client';

import { classNames, isActiveLink } from '@/lib/utils';
import { navItems } from '@/data/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [checkMobile]);

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

      {/* Navigation */}
      <nav
        className={classNames(
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-300 ease-out',
          isSticky ? 'glass border-b border-dark-200' : 'bg-transparent'
        )}
        aria-label="메인 네비게이션"
      >
        <div className="lg:w-[60%] w-[95%] mx-auto h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="홈으로 이동"
          >
            <div className="relative flex items-center justify-center w-10 h-10 text-lg font-bold rounded-xl bg-accent text-white overflow-hidden group-hover:scale-105 transition-transform">
              H
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </div>
            <span className="hidden lg:block text-lg font-semibold text-light tracking-tight">
              hyejin<span className="text-accent">.</span>dev
            </span>
          </Link>

          {/* Nav Links - Desktop */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map(({ href, label }) => {
              const isActive = isActiveLink(pathname, href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={classNames(
                      'relative px-4 py-2 text-sm font-medium rounded-lg',
                      'transition-all duration-200',
                      isActive
                        ? 'text-light bg-dark-100'
                        : 'text-muted hover:text-light hover:bg-dark-100/50'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Nav */}
          <ul className="flex md:hidden items-center gap-0.5 text-xs">
            {navItems.map(({ href, label }) => {
              const isActive = isActiveLink(pathname, href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={classNames(
                      'px-2.5 py-1.5 rounded-md font-medium',
                      'transition-colors duration-150',
                      isActive
                        ? 'text-light bg-dark-100'
                        : 'text-muted'
                    )}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Contact Button */}
          <Link
            href="/contact"
            className={classNames(
              'hidden lg:flex items-center gap-2',
              'text-sm font-medium px-5 py-2.5 rounded-full',
              'bg-light text-dark',
              'hover:bg-accent hover:text-white',
              'transition-all duration-200 group'
            )}
            aria-label="문의하기"
          >
            <span>Contact</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
