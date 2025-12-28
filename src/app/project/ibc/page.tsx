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
    <section className="py-20">
      {/* Header */}
      <div className="mb-12">
        <Link
          href="/project"
          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-6"
        >
          <ArrowLeft size={20} />
          <span>프로젝트 목록</span>
        </Link>

        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-4">IBC Group</h1>
            <p className="text-xl text-muted mb-6">
              아프리카 중심 글로벌 엔지니어링 및 컨설팅 기업 웹사이트
            </p>
          </div>
          <a
            href="https://ibcgroup-sz4v.vercel.app/en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors"
          >
            <span>사이트 방문</span>
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Main Screenshot */}
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg mb-8">
          <Image
            src="/images/project/ibc.png"
            alt="IBC Group 웹사이트 메인 화면"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Project Info */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-lg font-semibold text-primary mb-4">프로젝트 개요</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted">참여 기간:</span>
              <span className="ml-2 text-mutedDark">2024.09 - 2024.10</span>
            </div>
            <div>
              <span className="text-muted">참여 형태:</span>
              <span className="ml-2 text-mutedDark">프리랜서 (단독 개발)</span>
            </div>
            <div>
              <span className="text-muted">담당 역할:</span>
              <span className="ml-2 text-mutedDark">기획, 디자인, 프론트엔드 개발</span>
            </div>
            <div>
              <span className="text-muted">프로젝트 유형:</span>
              <span className="ml-2 text-mutedDark">기업 소개 웹사이트</span>
            </div>
          </div>
        </div>

        {/* Page Sections */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-lg font-semibold text-primary mb-4">페이지 구성</h2>
          <ul className="grid md:grid-cols-2 gap-2 text-sm text-mutedDark">
            {sections.map((section) => (
              <li key={section} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">•</span>
                <span>{section}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-primary mb-8">주요 기술 구현</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-mutedDark leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
