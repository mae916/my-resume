import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { projectList } from '@/data/projects';
import { externalLinkProps } from '@/lib/utils';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    '김혜진의 프론트엔드 개발 프로젝트들입니다. React, Next.js, Vue.js를 활용한 웹 애플리케이션을 확인해보세요.',
  openGraph: {
    title: 'Projects | 김혜진 포트폴리오',
    description: 'React, Next.js, Vue.js를 활용한 프론트엔드 프로젝트 포트폴리오',
  },
};

export default function Project() {
  return (
    <section className="section" aria-labelledby="project-title">
      {/* Header */}
      <div className="mb-16">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
          Portfolio
        </p>
        <h1 id="project-title" className="text-4xl lg:text-5xl font-bold text-light mb-4">
          Projects
        </h1>
        <p className="text-muted text-lg max-w-xl">
          실무에서 진행한 프로젝트와 개인 사이드 프로젝트입니다.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {projectList.map((project, index) => {
          const isInternal = project.link.startsWith('/');

          const CardContent = (
            <article className="group h-full card p-0 overflow-hidden hover:border-accent/30">
              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  width={800}
                  height={450}
                  src={project.image}
                  alt={`${project.title} 프로젝트`}
                  className="object-cover object-left-top w-full h-[220px] lg:h-[260px] group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="flex items-center gap-2 text-light font-medium">
                    View Project
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="tag text-xs">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="tag text-xs">+{project.tags.length - 4}</span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-light mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </article>
          );

          return (
            <div
              key={project.title}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {isInternal ? (
                <Link
                  href={project.link}
                  className="block h-full"
                  aria-label={`${project.title} 상세 보기`}
                >
                  {CardContent}
                </Link>
              ) : (
                <a
                  href={project.link}
                  {...externalLinkProps}
                  className="block h-full"
                  aria-label={`${project.title} GitHub 방문`}
                >
                  {CardContent}
                </a>
              )}
            </div>
          );
        })}
      </div>

      {/* GitHub CTA */}
      <div className="mt-16 text-center">
        <p className="text-muted mb-4">
          더 많은 프로젝트는 GitHub에서 확인하세요
        </p>
        <a
          href="https://github.com/mae916"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          <Github size={18} />
          <span>View GitHub</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </section>
  );
}
