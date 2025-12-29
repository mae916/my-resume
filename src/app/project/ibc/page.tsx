import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IBC Group - 글로벌 엔지니어링 컨설팅 기업 웹사이트',
  description: '아프리카 중심 글로벌 엔지니어링 및 컨설팅 기업 IBC Group의 기업 소개 웹사이트',
};

const features = [
  {
    title: '다국어 지원 (i18n)',
    description: 'Next.js App Router 기반 다국어 라우팅 구현. 영어/프랑스어 지원으로 글로벌 사용자 대응.',
  },
  {
    title: '반응형 디자인',
    description: 'Tailwind CSS를 활용한 모바일/태블릿/데스크톱 완벽 대응. 모든 디바이스에서 최적화된 UX 제공.',
  },
  {
    title: '인터랙티브 애니메이션',
    description: 'Framer Motion을 활용한 스크롤 기반 애니메이션과 페이지 전환 효과로 몰입감 있는 사용자 경험 구현.',
  },
  {
    title: '이메일 문의 시스템',
    description: 'Resend API를 활용한 문의 폼 구현. 서버리스 환경에서 안정적인 이메일 발송.',
  },
  {
    title: 'SEO 최적화',
    description: 'Next.js 메타데이터 API를 활용한 동적 SEO. sitemap.xml, robots.txt 자동 생성.',
  },
  {
    title: 'Vercel 배포',
    description: 'Vercel을 통한 자동 배포 및 CDN 최적화. 글로벌 엣지 네트워크로 빠른 로딩 속도 제공.',
  },
];

const techStack = [
  'Next.js 15',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
  'Resend',
  'Vercel',
  'i18n',
];

const sections = [
  'Home - 히어로 섹션 + 서비스 개요',
  'About Us - 회사 소개 및 연혁',
  'Markets - 에너지/물/농업/보건/환경 분야',
  'Services - 컨설팅/역량강화/혁신센터',
  'References - 포트폴리오 및 사례',
  'Newsroom - 뉴스 및 블로그',
  'Careers - 채용 정보',
  'Contact - 문의 폼 + 지도',
];

export default function IBCPage() {
  return (
    <section className="section">
      {/* Back Button */}
      <Link
        href="/project"
        className="inline-flex items-center gap-2 text-muted hover:text-light transition-colors mb-8"
      >
        <ArrowLeft size={16} />
        <span className="text-sm font-medium">프로젝트 목록</span>
      </Link>

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
        <div>
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            Corporate Website
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-light mb-3">
            IBC Group
          </h1>
          <p className="text-muted text-lg">
            아프리카 중심 글로벌 엔지니어링 및 컨설팅 기업 웹사이트
          </p>
        </div>
        <a
          href="https://ibcgroup-sz4v.vercel.app/en"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <span>사이트 방문</span>
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-10">
        {techStack.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>

      {/* Main Screenshot */}
      <div className="relative aspect-video rounded-2xl overflow-hidden border border-dark-200 mb-10">
        <Image
          src="/images/project/ibc.png"
          alt="IBC Group 웹사이트 메인 화면"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Project Info */}
      <div className="grid lg:grid-cols-2 gap-6 mb-16">
        <div className="card">
          <h2 className="text-lg font-semibold text-light mb-4">프로젝트 개요</h2>
          <div className="space-y-3 text-sm">
            {[
              { label: '참여 기간', value: '2025.09 - 2025.10' },
              { label: '참여 형태', value: '프리랜서 (단독 개발)' },
              { label: '담당 역할', value: '기획, 디자인, 프론트엔드 개발' },
              { label: '프로젝트 유형', value: '기업 소개 웹사이트' },
            ].map((item) => (
              <div key={item.label} className="flex gap-4">
                <span className="text-muted min-w-[100px]">{item.label}</span>
                <span className="font-medium text-light">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold text-light mb-4">페이지 구성</h2>
          <ul className="grid grid-cols-1 gap-2">
            {sections.map((section) => (
              <li key={section} className="flex items-start gap-2 text-sm text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>{section}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-light text-center mb-10">주요 기술 구현</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div key={feature.title} className="card group hover:border-accent/30">
              <h3 className="text-base font-semibold text-light mb-2 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
