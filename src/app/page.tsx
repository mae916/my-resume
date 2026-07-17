import Image from 'next/image';
import Link from 'next/link';
import { projectList } from '@/data/projects';
import { externalLinkProps } from '@/lib/utils';
import { getYearsOfExperienceLabel } from '@/lib/career';
import { skills } from '@/data/skills';
import profileImg from '@/../public/images/profile.jpg';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import { ArrowUpRight, ArrowRight, MousePointer2 } from 'lucide-react';

export default function Home() {
  const selectedWork = projectList.slice(0, 4);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="pt-8 md:pt-16 pb-16 md:pb-20 relative">
        {/* 키노트풍 배경 블롭 */}
        <div
          className="blob -top-24 -left-40 w-[440px] h-[440px] bg-gradient-to-br from-[#BFD8FF] to-[#E3D5FF]"
          aria-hidden="true"
        />
        <div
          className="blob top-32 -right-24 w-[380px] h-[380px] bg-gradient-to-br from-[#FFE3EC] to-[#DDEBFF]"
          aria-hidden="true"
        />

        <div className="relative grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Text */}
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6 animate-fade-up">
              Full-stack Developer — Incheon
            </p>

            <h1 className="text-5xl md:text-6xl xl:text-[4.25rem] font-extrabold tracking-[-0.03em] leading-[1.08] mb-7">
              <span className="block animate-fade-up">
                기능보다 <span className="text-accent">이유</span>를
              </span>
              <span className="block animate-fade-up delay-100">
                먼저 묻는 개발자<span className="text-accent">.</span>
              </span>
            </h1>

            <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-md mb-9 animate-fade-up delay-300">
              문제의 본질을 파악해 앱부터 서버·인프라까지 직접 만들고,
              <br className="hidden md:block" />
              실사용자가 있는 서비스를 책임지고 운영합니다.
            </p>

            <div className="flex flex-wrap items-center gap-3 animate-fade-up delay-400">
              <Link href="/project" className="btn btn-primary group">
                <span>프로젝트 보기</span>
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
              <a
                href="https://github.com/mae916"
                {...externalLinkProps}
                className="btn btn-outline"
              >
                <span>GitHub</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Portrait - macOS 윈도우 */}
          <div className="lg:col-span-5 animate-fade-up delay-200">
            <div className="relative max-w-[340px] mx-auto lg:ml-auto lg:mr-0">
              <div className="mac-window floaty">
                <div className="mac-titlebar">
                  <span className="mac-dot bg-ios-red" />
                  <span className="mac-dot bg-ios-yellow" />
                  <span className="mac-dot bg-ios-green" />
                  <span className="mac-title">profile.jpg</span>
                </div>
                <Image
                  width={400}
                  height={480}
                  src={profileImg}
                  alt="풀스택 개발자 김혜진"
                  className="w-full aspect-[4/5] object-cover object-top"
                  priority
                  placeholder="blur"
                />
              </div>

              {/* 커서 + 툴팁 스티커 */}
              <div className="cursor-sticker absolute -bottom-4 -left-6 md:-left-10 flex items-start gap-0.5">
                <MousePointer2
                  size={18}
                  className="text-ink fill-white mt-4 drop-shadow"
                />
                <span className="ui-tooltip">김혜진 — Kim Hyejin</span>
              </div>

              {/* 상태 배지 */}
              <div className="glass-card absolute -top-3 -right-2 md:-right-4 rounded-full px-3.5 py-2 flex items-center gap-2 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ios-green opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-ios-green" />
                </span>
                Available for work
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Liquid Glass 위젯 */}
      <section className="pb-16 md:pb-20 relative">
        <div
          className="blob -top-24 left-1/4 w-[420px] h-[300px] bg-gradient-to-br from-[#BFD8FF] to-[#FFE3EC]"
          aria-hidden="true"
        />
        <div
          className="blob -bottom-16 right-1/4 w-[360px] h-[260px] bg-gradient-to-br from-[#E3D5FF] to-[#DFF5E9]"
          aria-hidden="true"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: getYearsOfExperienceLabel(), label: '년차 개발자' },
            { number: '10+', label: '프로젝트 출시' },
            { number: '4', label: '운영 중인 서비스' },
            { number: 'A–Z', label: '앱 · 서버 · 인프라' },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="glass-card rounded-[22px] p-6 flex flex-col justify-between min-h-[130px] hover:-translate-y-1 transition-all duration-300">
                <p className="text-3xl md:text-4xl font-extrabold tracking-tight tabular-nums">
                  <CountUp value={stat.number} />
                </p>
                <p className="text-[13px] text-muted font-semibold mt-2">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Tech Marquee */}
      <section className="pb-16 md:pb-20">
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track gap-4 pr-4">
            {[...skills, ...skills].map((skill, i) => (
              <span
                key={`${skill.name}-${i}`}
                className="flex items-center gap-2.5 shrink-0 bg-white border border-black/[0.06] shadow-chip rounded-2xl px-4 py-2.5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={skill.icon}
                  alt=""
                  className="w-5 h-5 object-contain"
                  loading="lazy"
                />
                <span className="text-[13px] font-semibold text-ink-soft whitespace-nowrap">
                  {skill.name}
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work - 앱 윈도우 그리드 */}
      <section className="pb-16 md:pb-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="eyebrow mb-2">Selected Work</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              대표 프로젝트
            </h2>
          </div>
          <Link
            href="/project"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-hover"
          >
            전체 보기 <ArrowRight size={14} />
          </Link>
        </div>

        {/* Finder 폴더 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {selectedWork.map((project, i) => {
            const [name, subtitle] = project.title.split(' - ');
            return (
              <Reveal key={project.title} delay={i * 90} variant="pop">
              <Link
                href={project.link}
                className="group block text-center"
                aria-label={`${name} 상세 보기`}
              >
                <div className="folder mb-4">
                  <div className="folder-back" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt=""
                    aria-hidden="true"
                    className="folder-photo"
                    loading="lazy"
                  />
                  <div className="folder-front" />
                </div>
                <h3 className="text-[15px] font-semibold text-ink group-hover:text-accent transition-colors">
                  {name}
                </h3>
                <p className="mt-0.5 text-xs text-muted truncate px-1">
                  {subtitle ?? project.description}
                </p>
              </Link>
              </Reveal>
            );
          })}
        </div>

        <Link
          href="/project"
          className="sm:hidden mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent"
        >
          전체 프로젝트 보기 <ArrowRight size={14} />
        </Link>
      </section>

      {/* About */}
      <section className="pb-8 relative">
        <div
          className="blob -top-10 -right-28 w-[380px] h-[280px] bg-gradient-to-br from-[#DDEBFF] to-[#FFE3EC]"
          aria-hidden="true"
        />
        <Reveal>
        <div className="glass-card rounded-2xl p-8 md:p-10">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-2">About</p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-snug">
                사용자 관점에서
                <br />
                서비스를 설계합니다
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-4 text-ink-soft leading-[1.8]">
                <p>
                  단순히 동작하는 코드보다{' '}
                  <span className="font-semibold text-ink">
                    왜 이렇게 구현해야 하는지
                  </span>
                  를 먼저 고민합니다. 사용자에게 더 나은 경험을 제공하는 것이
                  개발의 목적이라고 생각합니다.
                </p>
                <p>
                  프론트엔드에서 출발해 지금은{' '}
                  <span className="font-semibold text-ink">
                    React Native 앱부터 NestJS 백엔드, AWS 인프라까지
                  </span>{' '}
                  혼자 맡아 실사용자가 있는 상용 서비스를 운영합니다.
                  결제·환불·정산처럼 틀리면 안 되는 도메인을 설계하고, 장애가
                  나면 복구에서 끝내지 않고 재발 방지 장치까지 만드는 개발자입니다.
                </p>
              </div>

              {/* Quick Links */}
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
                {[
                  { href: '/career', label: 'Career' },
                  { href: '/skills', label: 'Skills' },
                  { href: '/qna', label: 'Q&A' },
                  { href: '/contact', label: 'Contact' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-hover"
                  >
                    {link.label}
                    <ArrowRight size={13} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        </Reveal>
      </section>
    </div>
  );
}
