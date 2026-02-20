import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ESGable - ESG 탄소 배출량 관리 플랫폼',
  description: '기업의 ESG 경영을 위한 탄소 배출량 관리 및 공급망 조사 플랫폼',
  openGraph: {
    title: 'ESGable - ESG 탄소 배출량 관리 플랫폼 | 김혜진 포트폴리오',
    description: '기업의 ESG 경영을 위한 탄소 배출량 관리 및 공급망 조사 플랫폼',
    images: [{ url: '/images/project/esgable.png', width: 1200, height: 630, alt: 'ESGable 플랫폼 메인 화면' }],
  },
};

const features = [
  {
    title: '탄소 라이브러리 대시보드',
    description: '총 배출계수, 가이드라인, 배출원, GWP 세트 현황을 한눈에 파악하고 SCOPE별 배출원 분포와 온실가스 구성(CO2, CH4, N2O)을 시각화합니다.',
    image: '/images/project/esgable/dashboard.png',
  },
  {
    title: '조직 및 구성원 관리',
    description: '트리 구조로 본사/지사/사업장을 계층적으로 관리하고, 구성원별 역할(관리자/사용자)을 할당합니다. 온실가스 배출 그룹과 공급망 조사 그룹을 분리하여 효율적으로 운영합니다.',
    image: '/images/project/esgable/org.png',
  },
  {
    title: '공급망 ESG 조사',
    description: '협력사/공급망 대상 ESG 평가 조사를 생성하고 배포합니다. 조사 상태(게시중/마감됨/게시중단), 제출률, 마감일을 실시간으로 추적하며 조직별로 조사를 할당할 수 있습니다.',
    image: '/images/project/esgable/survey.png',
  },
  {
    title: '탄소 배출계수 라이브러리',
    description: '국가별/산업별 표준 배출계수 데이터베이스를 관리합니다. 가이드라인, 배출원, GWP 값을 체계적으로 분류하고 검색할 수 있습니다.',
    image: '/images/project/esgable/library.png',
  },
  {
    title: '시설 관리',
    description: '사업장별 시설 정보를 등록하고 관리합니다. 시설 유형, 위치, 배출원 매핑 등을 통해 정확한 탄소 배출량 산정의 기반을 마련합니다.',
    image: '/images/project/esgable/facility.png',
  },
];

const techStack = [
  'Vue.js 3',
  'Pinia',
  'Tailwind CSS',
  'Vite',
  'i18n',
  'Axios',
  'ApexCharts',
];

export default function ESGablePage() {
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
          B2B SaaS Platform
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold text-light mb-3">
          ESGable
        </h1>
        <p className="text-muted text-lg">
          기업의 ESG 경영을 위한 탄소 배출량 관리 및 공급망 조사 플랫폼
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
              { label: '참여 기간', value: '2025.07 - 2025.12' },
              { label: '참여 인원', value: '프론트엔드 1명, 백엔드 1명' },
              { label: '담당 역할', value: '기획, 디자인, 퍼블리싱, 프론트엔드' },
              { label: '개발 유형', value: 'B2B SaaS 플랫폼' },
            ].map((item) => (
              <div key={item.label} className="flex gap-4">
                <span className="text-muted min-w-[100px]">{item.label}</span>
                <span className="font-medium text-light">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold text-light mb-4">주요 담당 업무</h2>
          <ul className="space-y-2">
            {[
              'Vue.js 3 기반 프론트엔드 아키텍처 설계 및 개발',
              '조직/구성원 관리 모듈 - 트리 구조 조직도, CRUD, 권한 관리',
              '공급망 조사 모듈 - 설문 생성/배포/응답 수집/결과 분석',
              '탄소 라이브러리 모듈 - 배출계수/가이드라인/GWP 데이터 관리',
              '대시보드 차트 시각화 (ApexCharts)',
              '다국어 지원 (i18n) - 한국어/영어',
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
    </section>
  );
}
