'use client';

import { classNames, isActiveLink } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between h-17 rounded-full p-3 bg-[var(--pointcolor-navy)] text-[var(--background)] w-full text-lg">
      <div className="flex items-center h-full">
        <div className="bg-[var(--pointcolor-yellow)] text-[var(--pointcolor-navy)] rounded-full aspect-square h-full flex items-center justify-center font-medium text-2xl">
          H
        </div>
        <div className="ml-3 text-xl">
          HyeJin<b className="text-[var(--pointcolor-yellow)]">.</b>
        </div>
      </div>
      <ul className="flex items-center justify-between w-1/2">
        <li>
          <Link
            href="/"
            className={classNames(
              '',
              isActiveLink(pathname, '/') && ' text-[var(--pointcolor-yellow)]'
            )}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/qna"
            className={classNames(
              '',
              isActiveLink(pathname, '/qna') &&
                ' text-[var(--pointcolor-yellow)]'
            )}
          >
            Q & A
          </Link>
        </li>
        <li>
          <Link
            href="/skills"
            className={classNames(
              '',
              isActiveLink(pathname, '/skills') &&
                ' text-[var(--pointcolor-yellow)]'
            )}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            href="/career"
            className={classNames(
              '',
              isActiveLink(pathname, '/career') &&
                ' text-[var(--pointcolor-yellow)]'
            )}
          >
            Career
          </Link>
        </li>
        <li>
          <Link
            href="/project"
            className={classNames(
              '',
              isActiveLink(pathname, '/project') &&
                ' text-[var(--pointcolor-yellow)]'
            )}
          >
            Project
          </Link>
        </li>
      </ul>
      <a
        href="mailto:ruchia916@naver.com"
        className="bg-[var(--background)] text-[var(--pointcolor-navy)] rounded-full h-full flex items-center justify-center font-medium px-5"
      >
        Contact Me
      </a>
    </nav>
  );
}
