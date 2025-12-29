import Image from 'next/image';
import Link from 'next/link';
import { hashTags } from '@/data/navigation';
import { externalLinkProps } from '@/lib/utils';
import profileImg from '@/../public/images/profile.jpg';
import { ArrowUpRight, Github, Mail, ChevronDown } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center relative">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-16">
          {/* Profile Image */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              <Image
                width={400}
                height={480}
                src={profileImg}
                alt="프론트엔드 개발자 김혜진"
                className="w-[280px] h-[340px] lg:w-[380px] lg:h-[460px] object-cover object-top rounded-2xl border border-dark-200"
                priority
                placeholder="blur"
              />

              {/* Status Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-dark-100 border border-dark-200 rounded-full">
                <div className="flex items-center gap-2 text-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span className="text-light-200">Available for work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Eyebrow */}
            <p className="text-muted text-sm font-medium tracking-widest uppercase mb-4 animate-fade-up">
              Frontend Developer
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-light leading-[1.1] tracking-tight mb-6">
              <span className="block animate-fade-up">기능보다</span>
              <span className="block animate-fade-up delay-100">
                <span className="text-accent">이유</span>를 먼저 묻는
              </span>
              <span className="block animate-fade-up delay-200">개발자 김혜진</span>
            </h1>

            {/* Description */}
            <p className="text-muted text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-up delay-300">
              사용자 경험을 고민하고, 문제의 본질을 파악하여
              <br className="hidden lg:block" />
              더 나은 서비스를 만들어갑니다.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10 animate-fade-up delay-400">
              {hashTags.map((tag) => (
                <span key={tag} className="tag">
                  <span className="text-accent mr-1">#</span>
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-up delay-500">
              <a
                href="https://github.com/mae916"
                {...externalLinkProps}
                className="btn btn-primary w-full sm:w-auto"
              >
                <Github size={18} />
                <span>GitHub</span>
                <ArrowUpRight size={14} />
              </a>
              <Link
                href="/contact"
                className="btn btn-outline w-full sm:w-auto"
              >
                <Mail size={18} />
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted animate-bounce">
          <span className="text-xs">Scroll</span>
          <ChevronDown size={16} />
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-20 border-t border-dark-200">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-light mb-6">
              사용자와 서비스의 흐름을
              <br />
              <span className="text-muted">함께 설계하는 개발자</span>
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                단순히 작동하는 기능보다,{' '}
                <span className="text-light">왜 이렇게 동작해야 하는가</span>,
                이 방식이 사용자에게 더 나은가를 먼저 고민합니다.
              </p>
              <p>
                업무 중 마주친 문제는 그대로 넘기지 않고,
                주말이나 퇴근 후에라도 다시 복기하고 분석하는 습관을 가지고 있습니다.
              </p>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: '3+', label: '년 경력' },
              { number: '10+', label: '프로젝트' },
              { number: 'React', label: 'Vue.js / Next.js' },
              { number: 'TS', label: 'TypeScript' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="card flex flex-col justify-center items-center text-center py-8"
              >
                <span className="text-3xl lg:text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </span>
                <span className="text-sm text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 border-t border-dark-200">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              href: '/career',
              title: 'Career',
              desc: '경력 및 프로젝트 경험',
            },
            {
              href: '/skills',
              title: 'Skills',
              desc: '기술 스택 및 역량',
            },
            {
              href: '/project',
              title: 'Projects',
              desc: '포트폴리오',
            },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group card flex items-center justify-between p-6 hover:border-accent/50"
            >
              <div>
                <h3 className="text-lg font-semibold text-light mb-1 group-hover:text-accent transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-muted">{link.desc}</p>
              </div>
              <ArrowUpRight
                size={20}
                className="text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
