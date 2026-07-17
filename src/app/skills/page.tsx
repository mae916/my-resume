import type { Metadata } from 'next';
import Image from 'next/image';
import { skills } from '@/data/skills';

export const metadata: Metadata = {
  title: '기술 스택',
  description:
    '프론트엔드 개발자 김혜진의 기술 스택입니다. React, Vue.js, Next.js, TypeScript 등 프론트엔드 개발자 핵심 기술과 실무 경험을 확인해보세요.',
  openGraph: {
    title: '기술 스택 | 프론트엔드 개발자 김혜진',
    description: '프론트엔드 개발자 김혜진의 React, Vue.js, TypeScript, Next.js 기술 스택',
  },
};

export default function Skills() {
  return (
    <section className="section !pt-10 lg:!pt-14" aria-labelledby="skills-title">
      {/* Header */}
      <header className="mb-12">
        <p className="eyebrow mb-3">Tech Stack</p>
        <h1
          id="skills-title"
          className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
        >
          Skills<span className="text-accent">.</span>
        </h1>
        <p className="text-ink-soft text-lg max-w-xl">
          프로젝트에서 활용하는 주요 기술 스택입니다.
        </p>
      </header>

      {/* Skills - App Store 리스트 */}
      <div className="mac-window">
        <div className="mac-titlebar">
          <span className="mac-dot bg-ios-red" />
          <span className="mac-dot bg-ios-yellow" />
          <span className="mac-dot bg-ios-green" />
          <span className="mac-title">App Store — 내 기술 스택</span>
        </div>
        <ul className="divide-y divide-black/[0.05]">
          {skills.map((skill, index) => (
            <li
              key={skill.name}
              className="group px-5 md:px-7 py-5 flex items-start gap-4 md:gap-5 hover:bg-paper/60 transition-colors animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* 앱 아이콘 타일 */}
              <div className="shrink-0 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-[16px] bg-paper border border-black/[0.06] shadow-chip group-hover:scale-105 transition-transform">
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
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-base md:text-lg font-bold text-ink">
                    {skill.name}
                  </h2>
                  {/* GET 버튼 스타일 배지 */}
                  <span className="shrink-0 text-[11px] md:text-xs font-bold text-accent bg-paper-100 group-hover:bg-accent group-hover:text-white transition-colors rounded-full px-3.5 py-1 uppercase tracking-wide">
                    사용 중
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft max-w-2xl">
                  {skill.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Development Approach - 위젯 3종 */}
      <div className="mt-16">
        <div className="mb-6">
          <p className="eyebrow mb-2">How I Work</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            일하는 방식
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              no: '01',
              title: '사용자 중심',
              desc: '기능을 만들기 전에 사용자가 왜 필요로 하는지부터 묻습니다. UX를 최우선으로 고려합니다.',
            },
            {
              no: '02',
              title: '근본 해결',
              desc: '증상 완화와 근본 치료를 구분합니다. 재발하지 않도록 원인까지 파고들어 구조적으로 해결합니다.',
            },
            {
              no: '03',
              title: '기록과 공유',
              desc: '문제 해결 과정과 운영 절차를 문서로 남깁니다. 코드 리뷰와 문서화로 지식이 쌓이게 합니다.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-black/[0.06] shadow-widget p-6"
            >
              <p className="text-tiny font-bold text-accent tracking-[0.14em] mb-3">
                {item.no}
              </p>
              <h3 className="font-bold text-ink mb-2">{item.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
