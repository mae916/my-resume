import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { projectList } from '@/data/projects';
import { externalLinkProps } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    '김혜진의 프론트엔드 개발 프로젝트들입니다. React, Next.js, Vue.js를 활용한 웹 애플리케이션을 확인해보세요.',
};

export default function Project() {
  return (
    <section className="py-20" aria-labelledby="project-title">
      <h2 id="project-title" className="mb-10 text-2xl font-bold text-center">
        <span className="text-gray-800">Project</span>
      </h2>
      <div className="max-w-6xl px-6 mx-auto">
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projectList.map((project) => {
            const isInternal = project.link.startsWith('/');

            const CardContent = (
              <article className="h-full overflow-hidden transition bg-white shadow rounded-xl hover:shadow-md">
                <Image
                  width={800}
                  height={450}
                  src={project.image}
                  alt={`${project.title} 프로젝트 스크린샷`}
                  className="object-cover object-left-top w-full border-gray-400 h-[360px]"
                  loading="lazy"
                />
                <div className="p-4 space-y-2">
                  <ul className="flex flex-wrap gap-2 mb-5" aria-label="사용 기술">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="px-2 py-1 text-xs font-semibold border border-gray-200 rounded-full bg-accent text-black-600"
                      >
                        #{tag}
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </article>
            );

            return (
              <li key={project.title}>
                {isInternal ? (
                  <Link
                    href={project.link}
                    className="block overflow-hidden transition shadow cursor-pointer rounded-xl hover:opacity-80 hover:shadow-lg h-fit lg:h-[520px]"
                    aria-label={`${project.title} 프로젝트 상세 보기`}
                  >
                    {CardContent}
                  </Link>
                ) : (
                  <a
                    href={project.link}
                    {...externalLinkProps}
                    className="block overflow-hidden transition shadow cursor-pointer rounded-xl hover:opacity-80 hover:shadow-lg h-fit lg:h-[520px]"
                    aria-label={`${project.title} 프로젝트 GitHub 저장소 방문`}
                  >
                    {CardContent}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
