'use client';

import { classNames, isActiveLink } from '@/lib/utils';
import { navItems } from '@/data/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

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
    <div className="relative h-16 md:h-[76px]">
      <div ref={sentinelRef} className="h-0" aria-hidden="true" />

      {/* Navigation */}
      <nav
        className={classNames(
          'fixed top-0 left-0 right-0 z-50',
          'transition-all duration-300 ease-out',
          isSticky ? 'glass border-b border-black/[0.06]' : 'bg-transparent'
        )}
        aria-label="메인 네비게이션"
      >
        <div className="mx-auto w-full max-w-5xl px-5 md:px-8 h-16 md:h-[76px] flex items-center justify-between gap-3">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group shrink-0"
            aria-label="홈으로 이동"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-[10px] bg-ink text-white text-sm font-bold shadow-chip group-hover:scale-105 transition-transform">
              H
            </span>
            <span className="hidden lg:block text-[15px] font-semibold tracking-tight text-ink">
              hyejin.dev
            </span>
          </Link>

          {/* Nav Links - 세그먼트 필 */}
          <ul className="glass-card flex items-center gap-0.5 md:gap-1 rounded-full p-1">
            {navItems.map(({ href, label }) => {
              const isActive = isActiveLink(pathname, href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={classNames(
                      'block px-2.5 md:px-4 py-1.5 rounded-full text-[11px] md:text-[13px] font-medium hover:scale-105',
                      'transition-all duration-200 whitespace-nowrap',
                      isActive
                        ? 'bg-ink text-white shadow-chip'
                        : 'text-ink-soft hover:bg-paper-100'
                    )}
                    aria-current={isActive ? 'page' : undefined}
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
              'hidden md:inline-flex items-center gap-1.5 shrink-0',
              'text-[13px] font-semibold px-4 py-2 rounded-full',
              'bg-accent text-white shadow-chip',
              'hover:bg-accent-hover hover:scale-[1.03] active:scale-[0.97]',
              'transition-all duration-200 group'
            )}
            aria-label="문의하기"
          >
            <span>Contact</span>
            <ArrowUpRight
              size={13}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
}
