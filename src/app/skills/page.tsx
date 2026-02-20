import type { Metadata } from 'next';
import Image from 'next/image';
import { skills } from '@/data/skills';
import { Code2, Layers, Server, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Skills',
  description:
    '김혜진의 기술 스택입니다. React, Vue.js, TypeScript, Express, Docker 등을 활용한 개발 경험을 확인해보세요.',
  openGraph: {
    title: 'Skills | 김혜진 포트폴리오',
    description: 'React, Vue.js, TypeScript, NestJS, Docker 등 기술 스택과 실무 경험',
  },
};

// 스킬 카테고리화
const categories = [
  { id: 'frontend', name: 'Frontend', icon: Code2 },
  { id: 'backend', name: 'Backend', icon: Server },
  { id: 'tools', name: 'Tools & Others', icon: Wrench },
];

export default function Skills() {
  return (
    <section className="section" aria-labelledby="skills-title">
      {/* Header */}
      <div className="mb-16">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
          Tech Stack
        </p>
        <h1 id="skills-title" className="text-4xl lg:text-5xl font-bold text-light mb-4">
          Skills
        </h1>
        <p className="text-muted text-lg max-w-xl">
          프로젝트에서 활용하는 주요 기술 스택입니다.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <article
            key={skill.name}
            className="card group hover:border-accent/30 animate-fade-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="flex-shrink-0 p-3 rounded-xl bg-dark-200 border border-dark-300 group-hover:border-accent/30 transition-colors">
                <Image
                  width={32}
                  height={32}
                  src={skill.icon}
                  alt=""
                  aria-hidden="true"
                  className="object-contain w-8 h-8"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-light group-hover:text-accent transition-colors">
                  {skill.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {skill.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Additional Skills Summary */}
      <div className="mt-16 card">
        <h2 className="text-xl font-bold text-light mb-6">Development Approach</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: '🎯',
              title: '사용자 중심',
              desc: 'UX를 최우선으로 고려한 개발',
            },
            {
              icon: '🔄',
              title: '지속적 학습',
              desc: '새로운 기술과 트렌드를 적극적으로 습득',
            },
            {
              icon: '🤝',
              title: '협업 지향',
              desc: '코드 리뷰와 문서화를 통한 팀워크',
            },
          ].map((item) => (
            <div key={item.title} className="text-center p-4">
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <h3 className="font-semibold text-light mb-2">{item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
