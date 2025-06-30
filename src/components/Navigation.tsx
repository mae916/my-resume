'use client';

import { classNames, isActiveLink } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

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

    return () => {
      observer.unobserve(sentinel);
    };
  }, []);

  return (
    <header
      className={`flex items-center justify-center sticky top-10 z-50 h-17 rounded-full p-3 bg-[var(--pointcolor-navy)] text-[var(--background)] w-full text-lg transition-shadow duration-300 ${
        isSticky ? 'shadow-lg' : ''
      }`}
    >
      <nav className="flex items-center lg:justify-between w-full h-full">
        <Link href="/" className="flex items-center h-full">
          <div className="mr-3 lg:mr-0 bg-[var(--pointcolor-yellow)] text-[var(--pointcolor-navy)] rounded-full aspect-square h-full flex items-center justify-center font-medium text-2xl">
            H
          </div>
          <div className="ml-3 text-xl hidden lg:block">
            HyeJin<b className="text-[var(--pointcolor-yellow)]">.</b>
          </div>
        </Link>
        <ul className="flex items-center justify-between lg:w-1/2 w-full pr-3">
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
                  isActiveLink(pathname, href) &&
                    ' text-[var(--pointcolor-yellow)]'
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="mailto:ruchia916@naver.com"
          className="hidden bg-[var(--background)] text-[var(--pointcolor-navy)] rounded-full h-full lg:flex items-center justify-center font-semibold px-5 transition-transform duration-200 hover:scale-105 hover:bg-[var(--pointcolor-yellow)] hover:text-[var(--pointcolor-white)]"
        >
          Contact Me
        </a>
      </nav>
    </header>
  );
}
