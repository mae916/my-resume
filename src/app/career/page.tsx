import type { Metadata } from 'next';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import type { WorkItem } from '@/types';
import { workData } from '@/data/career';
import { getYearsOfExperienceLabel } from '@/lib/career';

export const metadata: Metadata = {
  title: 'Career',
  description:
    '프론트엔드 개발자 김혜진의 경력 사항입니다. 프리랜서, 올수, 컨택트에서의 실무 경험을 확인해보세요.',
  openGraph: {
    title: 'Career | 김혜진 포트폴리오',
    description: '프론트엔드 개발자 김혜진의 경력과 프로젝트 경험',
  },
};

export default function Career() {
  return (
    <section className="section" aria-labelledby="career-title">
      {/* Header */}
      <div className="mb-16">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
          Experience
        </p>
        <h1 id="career-title" className="text-4xl lg:text-5xl font-bold text-light mb-4">
          Career
        </h1>
        <p className="text-muted text-lg max-w-xl">
          프론트엔드 개발자로서의 경력과 성장 과정입니다.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div
          className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-dark-200 md:-translate-x-px"
          aria-hidden="true"
        />

        {/* Timeline Items */}
        <div className="space-y-12">
          {workData.map((item: WorkItem, idx: number) => (
            <div
              key={idx}
              className={`relative flex flex-col md:flex-row gap-8 ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-dark border-4 border-accent rounded-full -translate-x-[7px] md:-translate-x-1/2 z-10" />

              {/* Content */}
              <div className={`flex-1 pl-8 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className="card group hover:border-accent/30">
                  {/* Period Badge */}
                  <div className={`flex items-center gap-2 mb-4 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Calendar size={14} className="text-accent" />
                    <span className="text-sm font-medium text-accent">
                      {item.period}
                    </span>
                  </div>

                  {/* Company */}
                  <h3 className="text-xl font-bold text-light mb-2 group-hover:text-accent transition-colors">
                    {item.company}
                  </h3>

                  {/* Description */}
                  <p className="text-muted leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Tags (if exists) */}
                  {item.tags && (
                    <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {item.tags.map((tag: string) => (
                        <span key={tag} className="tag text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { value: getYearsOfExperienceLabel(), label: '년 경력' },
          { value: '10+', label: '프로젝트' },
          { value: '5+', label: '협업 기업' },
          { value: '100%', label: '열정' },
        ].map((stat) => (
          <div key={stat.label} className="card text-center py-6">
            <p className="text-2xl lg:text-3xl font-bold text-accent mb-1">
              {stat.value}
            </p>
            <p className="text-xs text-muted uppercase tracking-wide">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
