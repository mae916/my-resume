import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { projectList } from '@/data/projects';
import { externalLinkProps } from '@/lib/utils';
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Lock,
  Share,
} from 'lucide-react';

export const metadata: Metadata = {
  title: '프로젝트 포트폴리오',
  description:
    '프론트엔드 개발자 김혜진의 프로젝트 포트폴리오입니다. React, Next.js, Vue.js를 활용한 프론트엔드 개발자 실무 프로젝트를 확인해보세요.',
  openGraph: {
    title: '프로젝트 포트폴리오 | 프론트엔드 개발자 김혜진',
    description: '프론트엔드 개발자 김혜진의 React, Next.js, Vue.js 프로젝트 포트폴리오',
  },
};

export default function Project() {
  return (
    <section className="section !pt-10 lg:!pt-14 relative" aria-labelledby="project-title">
      {/* 키노트풍 배경 블롭 */}
      <div
        className="blob -top-16 -left-36 w-[360px] h-[360px] bg-gradient-to-br from-[#DDEBFF] to-[#E3D5FF]"
        aria-hidden="true"
      />

      {/* Header */}
      <header className="mb-12">
        <p className="eyebrow mb-3">Portfolio</p>
        <h1
          id="project-title"
          className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
        >
          Projects<span className="text-accent">.</span>
        </h1>
        <p className="text-ink-soft text-lg max-w-xl">
          실무에서 진행한 프로젝트와 개인 사이드 프로젝트입니다.
        </p>
      </header>

      {/* Project Grid - macOS 윈도우 카드 */}
      <div className="grid md:grid-cols-2 gap-6">
        {projectList.map((project, index) => {
          const isInternal = project.link.startsWith('/');
          const [name, subtitle] = project.title.split(' - ');

          const CardContent = (
            <article className="group mac-window h-full hover:-translate-y-1 transition-all duration-300 animate-fade-up flex flex-col"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Safari 스타일 툴바 */}
              <div className="flex items-center gap-2 px-3.5 h-10 bg-paper border-b border-black/[0.06]">
                <span className="flex gap-1.5 shrink-0">
                  <span className="mac-dot bg-ios-red" />
                  <span className="mac-dot bg-ios-yellow" />
                  <span className="mac-dot bg-ios-green" />
                </span>
                <span className="hidden sm:flex items-center gap-0.5 text-paper-200 shrink-0">
                  <ChevronLeft size={15} className="text-muted" />
                  <ChevronRight size={15} />
                </span>
                <span className="flex-1 flex items-center justify-center gap-1.5 bg-white rounded-lg py-1 text-tiny text-muted font-medium border border-black/[0.04] truncate px-3">
                  <Lock size={9} className="shrink-0" />
                  <span className="truncate">
                    {String(index + 1).padStart(2, '0')} — {name}
                  </span>
                </span>
                <Share
                  size={13}
                  className="text-muted group-hover:text-accent transition-colors shrink-0"
                />
              </div>

              {/* Screenshot */}
              <div className="relative overflow-hidden aspect-[16/9]">
                <Image
                  fill
                  src={project.image}
                  alt={`${name} 프로젝트`}
                  sizes="(min-width: 768px) 480px, 100vw"
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <h2 className="text-lg font-bold text-ink group-hover:text-accent transition-colors">
                  {name}
                </h2>
                {subtitle && (
                  <p className="mt-0.5 text-sm font-medium text-muted">
                    {subtitle}
                  </p>
                )}
                <p className="mt-2.5 text-sm text-ink-soft leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="tag">+{project.tags.length - 4}</span>
                  )}
                </div>
              </div>
            </article>
          );

          return (
            <div key={project.title}>
              {isInternal ? (
                <Link
                  href={project.link}
                  className="block h-full"
                  aria-label={`${name} 상세 보기`}
                >
                  {CardContent}
                </Link>
              ) : (
                <a
                  href={project.link}
                  {...externalLinkProps}
                  className="block h-full"
                  aria-label={`${name} GitHub 방문`}
                >
                  {CardContent}
                </a>
              )}
            </div>
          );
        })}
      </div>

      {/* GitHub CTA */}
      <div className="mt-14 flex flex-col items-center gap-4">
        <p className="text-muted text-sm">더 많은 프로젝트는 GitHub에서 확인하세요</p>
        <a
          href="https://github.com/mae916"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          <Github size={16} />
          <span>View GitHub</span>
          <ExternalLink size={13} />
        </a>
      </div>
    </section>
  );
}
