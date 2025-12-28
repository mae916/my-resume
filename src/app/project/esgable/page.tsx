import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ESGable - ESG 탄소 배출량 관리 플랫폼',
  description: '기업의 ESG 경영을 위한 탄소 배출량 관리 및 공급망 조사 플랫폼',
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
  'TypeScript',
  'Pinia',
  'Tailwind CSS',
  'Vite',
  'i18n',
  'Axios',
  'Chart.js',
];

export default function ESGablePage() {
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

        <h1 className="text-4xl font-bold text-primary mb-4">ESGable</h1>
        <p className="text-xl text-muted mb-6">
          기업의 ESG 경영을 위한 탄소 배출량 관리 및 공급망 조사 플랫폼
        </p>

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

        {/* Project Info */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-lg font-semibold text-primary mb-4">프로젝트 개요</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted">참여 기간:</span>
              <span className="ml-2 text-mutedDark">2024.08 - 2024.12</span>
            </div>
            <div>
              <span className="text-muted">참여 인원:</span>
              <span className="ml-2 text-mutedDark">프론트엔드 2명, 백엔드 2명</span>
            </div>
            <div>
              <span className="text-muted">담당 역할:</span>
              <span className="ml-2 text-mutedDark">프론트엔드 개발</span>
            </div>
            <div>
              <span className="text-muted">개발 유형:</span>
              <span className="ml-2 text-mutedDark">B2B SaaS 플랫폼</span>
            </div>
          </div>
        </div>

        {/* Main Responsibilities */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-primary mb-4">주요 담당 업무</h2>
          <ul className="space-y-2 text-mutedDark">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>Vue.js 3 + TypeScript 기반 프론트엔드 아키텍처 설계 및 개발</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>조직/구성원 관리 모듈 - 트리 구조 조직도, CRUD, 권한 관리</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>공급망 조사 모듈 - 설문 생성/배포/응답 수집/결과 분석</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>탄소 라이브러리 모듈 - 배출계수/가이드라인/GWP 데이터 관리</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>대시보드 차트 시각화 (Chart.js)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>다국어 지원 (i18n) - 한국어/영어</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-16">
        <h2 className="text-2xl font-bold text-primary">주요 기능</h2>

        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`flex flex-col ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
            } gap-8 items-center`}
          >
            <div className="lg:w-1/2">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-xl font-semibold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-mutedDark leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
