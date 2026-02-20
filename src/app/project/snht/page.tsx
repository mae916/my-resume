import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'S&HT - 스마트 엔지니어링 기업 웹사이트',
  description: '산업 자동화 및 AI 관제 솔루션 전문 기업의 다국어 반응형 기업 소개 웹사이트',
  openGraph: {
    title: 'S&HT - 스마트 엔지니어링 기업 | 김혜진 포트폴리오',
    description: '산업 자동화 및 AI 관제 솔루션 전문 기업의 다국어 반응형 기업 소개 웹사이트',
    images: [{ url: '/images/project/snht.png', width: 1200, height: 630, alt: 'S&HT 웹사이트 메인 화면' }],
  },
};

const features = [
  {
    title: '회사 소개 섹션',
    description: '스마트 엔지니어링 기업으로서의 정체성을 보여주는 인트로 섹션입니다. 심볼 로고와 함께 기업 미션을 전달하고, 다양한 산업 분야에 최적화된 솔루션을 소개합니다.',
    image: '/images/project/snht/about.png',
  },
  {
    title: '산업 분야별 솔루션',
    description: 'Industry, Ship Building, Gas Turbine, Spare Part, R&D 등 5가지 핵심 사업 영역을 스크롤 애니메이션과 함께 시각적으로 보여줍니다. GSAP ScrollTrigger를 활용한 부드러운 전환 효과를 적용했습니다.',
    image: '/images/project/snht/industry.png',
  },
  {
    title: '제품 그리드',
    description: '가속도계, AI 통합 관제 솔루션, Electric Safety, 전계장품, 산업용 케이블, PLC 등 6가지 주요 제품군을 카드 형태로 구성했습니다. 호버 시 상세 정보를 확인할 수 있습니다.',
    image: '/images/project/snht/product.png',
  },
  {
    title: '연락처 및 푸터',
    description: '고객 문의를 위한 Contact 섹션과 회사 정보를 담은 푸터입니다. Resend API를 활용한 이메일 폼과 카카오맵 연동으로 접근성을 높였습니다.',
    image: '/images/project/snht/contact.png',
  },
];

const techStack = [
  'Next.js 16',
  'React 19',
  'TypeScript',
  'Tailwind CSS v4',
  'GSAP',
  'next-intl',
  'Resend',
  'Kakao Maps',
];

export default function SNHTPage() {
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
      <div className="mb-8">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
          Corporate Website
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold text-light mb-3">
          S&HT
        </h1>
        <p className="text-muted text-lg">
          산업 자동화 및 AI 관제 솔루션 전문 기업의 다국어 반응형 기업 소개 웹사이트
        </p>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-10">
        {techStack.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>

      {/* Project Info */}
      <div className="grid lg:grid-cols-2 gap-6 mb-16">
        <div className="card">
          <h2 className="text-lg font-semibold text-light mb-4">프로젝트 개요</h2>
          <div className="space-y-3 text-sm">
            {[
              { label: '참여 기간', value: '2025.12 - 2026.01' },
              { label: '참여 인원', value: '프론트엔드 1명' },
              { label: '담당 역할', value: '기획, 디자인, 퍼블리싱, 프론트엔드' },
              { label: '개발 유형', value: '기업 소개 웹사이트' },
              { label: '배포', value: 'Vercel' },
            ].map((item) => (
              <div key={item.label} className="flex gap-4">
                <span className="text-muted min-w-[100px]">{item.label}</span>
                <span className="font-medium text-light">{item.value}</span>
              </div>
            ))}
          </div>
          <a
            href="https://snht.co.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-accent hover:text-accent-hover transition-colors text-sm font-medium"
          >
            <span>사이트 방문하기</span>
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold text-light mb-4">주요 담당 업무</h2>
          <ul className="space-y-2">
            {[
              'Next.js 16 App Router 기반 프로젝트 아키텍처 설계',
              'GSAP ScrollTrigger 활용 스크롤 기반 애니메이션 구현',
              '다국어 지원 (한국어/영어) - next-intl 적용',
              '반응형 디자인 (PC/Tablet/Mobile) - 179개 이미지 최적화',
              'Resend API 연동 문의 폼 구현 (파일 첨부 지원)',
              'SEO 최적화 - JSON-LD, 메타데이터, 사이트맵',
              '카카오맵 API 연동 오시는 길 페이지',
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-light text-center mb-12">주요 기능</h2>
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } gap-10 items-center`}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-dark-200">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 space-y-4">
                <h3 className="text-xl font-bold text-light">
                  {feature.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Highlights */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-light text-center mb-12">기술적 특징</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'GSAP 애니메이션',
              description: 'ScrollTrigger를 활용한 스크롤 기반 애니메이션으로 몰입감 있는 사용자 경험을 제공합니다.',
            },
            {
              title: '다국어 지원',
              description: 'next-intl을 활용하여 한국어/영어 완벽 지원. 644줄의 번역 파일로 전체 콘텐츠를 커버합니다.',
            },
            {
              title: '반응형 이미지',
              description: 'PC/Tablet/Mobile 각 디바이스별 최적화된 179개 이미지로 빠른 로딩 속도를 보장합니다.',
            },
            {
              title: '이메일 폼',
              description: 'Resend API를 활용한 문의 폼. 파일 첨부(10MB), 유효성 검사, HTML 이메일을 지원합니다.',
            },
            {
              title: 'SEO 최적화',
              description: 'JSON-LD 구조화 데이터, OpenGraph, 동적 메타데이터, 사이트맵으로 검색 노출을 극대화합니다.',
            },
            {
              title: '모던 스택',
              description: 'Next.js 16, React 19, Tailwind CSS v4 등 최신 기술 스택으로 구축되었습니다.',
            },
          ].map((item) => (
            <div key={item.title} className="card">
              <h3 className="text-base font-semibold text-light mb-2">{item.title}</h3>
              <p className="text-sm text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
