import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Quai - AI 기반 견적 플랫폼',
  description:
    'AI로 견적서를 생성하고 검증하는 양면 플랫폼. 공급자는 3분 만에 견적서를, 소비자는 3초 만에 견적 분석을 받습니다.',
  openGraph: {
    title: 'Quai - AI 기반 견적 플랫폼 | 김혜진 포트폴리오',
    description: 'AI로 견적서를 생성하고 검증하는 양면 플랫폼. 공급자는 3분 만에 견적서를, 소비자는 3초 만에 견적 분석을 받습니다.',
    images: [{ url: '/images/project/quai.png', width: 1200, height: 630, alt: 'Quai 메인 화면' }],
  },
};

const features = [
  {
    title: 'AI 견적서 자동 생성',
    description:
      'OpenAI GPT-4o-mini를 활용하여 업종과 설명만 입력하면 항목별 단가, 수량, 금액이 포함된 견적서를 자동 생성합니다. Perplexity API를 통해 실시간 시세 데이터를 반영합니다.',
  },
  {
    title: 'AI 견적 분석 (소비자)',
    description:
      '받은 견적서를 입력하면 항목별로 시장 가격 대비 적정성을 신호등 시스템(적정/주의/과다)으로 분석합니다. 시장 가격 범위와 항목별 코멘트를 제공합니다.',
  },
  {
    title: '3단계 견적서 작성 위자드',
    description:
      '업종 선택, 항목 입력, 고객 정보 3단계로 구성된 직관적인 폼 위자드. 자동 합계 계산, 템플릿 저장/불러오기, 미리보기 모달을 지원합니다.',
  },
  {
    title: '가격 컨텍스트 시스템',
    description:
      '경력 수준, 지역, 시즌, 긴급도, 규모 5가지 요소별 가중치를 적용하여 AI 가격 산출의 정확도를 높입니다. 업종별로 중요 요소가 자동 추천됩니다.',
  },
  {
    title: '공유 링크 및 조회 추적',
    description:
      '고유 코드 기반 공유 링크(/v/[code])를 통해 고객에게 견적서를 전달합니다. 조회 수, 열람 여부를 실시간 추적하고 이메일/인앱 알림을 발송합니다.',
  },
  {
    title: '토스페이먼츠 결제 연동',
    description:
      'Toss Payments API를 연동한 구독 결제 시스템. Free/Starter/Pro/Premium 4단계 요금제와 프로모션 코드, 추천인 시스템을 지원합니다.',
  },
  {
    title: 'PDF 견적서 내보내기',
    description:
      'jsPDF + jspdf-autotable을 활용하여 견적서를 PDF로 변환합니다. 업체 정보, 항목 테이블, 합계, 유효기간이 포함된 정형화된 문서를 생성합니다.',
  },
  {
    title: '관리자 대시보드',
    description:
      '사용자 관리, 견적서 모더레이션, 구독 현황, 알림 시스템, 통계 분석을 포함한 종합 어드민 패널. 역할 기반 접근 제어(RBAC)를 적용했습니다.',
  },
  {
    title: '고객 관리 (CRM)',
    description:
      '공급자가 고객 정보를 등록하고 견적 이력을 추적할 수 있는 간이 CRM. 고객별 견적 발송 내역, 상태, 연락처를 관리합니다.',
  },
];

const techStack = [
  'Next.js 14',
  'TypeScript',
  'Tailwind CSS',
  'Supabase',
  'OpenAI API',
  'Perplexity API',
  'Toss Payments',
  'AWS SES',
  'Sentry',
  'Docker',
  'GitHub Actions',
  'Zod',
];

export default function QuaiPage() {
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
            AI SaaS Platform
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-light mb-3">
            Quai
          </h1>
          <p className="text-muted text-lg">
            AI 기반 양면 견적 플랫폼 - 복잡한 견적, 쿼이가 해결!
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="https://quai.co.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <span>사이트 방문</span>
            <ExternalLink size={14} />
          </a>
        </div>
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
          src="/images/project/quai.png"
          alt="Quai 메인 화면 - 복잡한 견적, 쿼이가 해결!"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Project Info */}
      <div className="grid lg:grid-cols-2 gap-6 mb-16">
        <div className="card">
          <h2 className="text-lg font-semibold text-light mb-4">
            프로젝트 개요
          </h2>
          <div className="space-y-3 text-sm">
            {[
              { label: '참여 기간', value: '2025.01 - 현재' },
              { label: '참여 인원', value: '1명 (기획/디자인/풀스택 전담)' },
              {
                label: '담당 역할',
                value: '기획, UI/UX, 프론트엔드, 백엔드, 인프라, 운영',
              },
              { label: '프로젝트 유형', value: 'B2B/B2C SaaS 플랫폼' },
            ].map((item) => (
              <div key={item.label} className="flex gap-4">
                <span className="text-muted min-w-[100px]">{item.label}</span>
                <span className="font-medium text-light">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold text-light mb-4">핵심 지표</h2>
          <ul className="space-y-2">
            {[
              '공급자: AI로 3분 만에 견적서 생성 및 공유 링크 발송',
              '소비자: 견적서 입력 후 3초 만에 적정가 분석 결과 제공',
              '10개 업종 카테고리별 맞춤 템플릿 및 AI 프롬프트',
              '5가지 가격 컨텍스트 요소로 정확한 시세 반영',
              '견적 상태 추적: 초안 - 발송 - 열람 - 수락/거절',
              '4단계 구독 요금제 + 토스페이먼츠 결제',
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-muted"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Background */}
      <div className="card mb-16">
        <h2 className="text-lg font-semibold text-light mb-4">
          프로젝트 배경
        </h2>
        <div className="space-y-3 text-sm text-muted leading-relaxed">
          <p>
            인테리어, 청소, IT 개발 등 다양한 서비스 분야에서
            <span className="text-light">
              {' '}
              견적서 작성은 시간이 오래 걸리고, 받는 입장에서는 적정 가격인지
              판단하기 어려운 문제
            </span>
            가 있었습니다.
          </p>
          <p>
            Quai는 이 양쪽의 문제를 동시에 해결합니다.
            <span className="text-light">
              {' '}
              공급자에게는 AI가 업종과 조건에 맞는 견적서를 자동 생성
            </span>
            해주고,
            <span className="text-light">
              {' '}
              소비자에게는 받은 견적서의 항목별 적정가를 AI가 분석
            </span>
            해줍니다. Perplexity API를 통한 실시간 시세 조회와 공공 데이터
            기반의 가격 신뢰도 시스템으로 정확한 정보를 제공합니다.
          </p>
          <p>
            기획부터 디자인, 풀스택 개발, 인프라, 운영까지
            <span className="text-light"> 1인 전담으로 진행한 SaaS 프로젝트</span>
            로, Supabase를 활용한 인증/DB/실시간 구독부터 토스페이먼츠 결제
            연동, AWS SES 이메일 발송, Sentry 모니터링까지 프로덕션 레벨의
            서비스를 구축했습니다.
          </p>
        </div>
      </div>

      {/* Architecture */}
      <div className="card mb-16">
        <h2 className="text-lg font-semibold text-light mb-4">
          시스템 아키텍처
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-medium text-light mb-2">공급자 플로우</h3>
            <div className="space-y-1 text-muted">
              <p>1. 카카오/구글 소셜 로그인</p>
              <p>2. 업종 선택 (10개 카테고리)</p>
              <p>3. AI 자동 생성 또는 수동 입력</p>
              <p>4. 가격 컨텍스트 조정 (경력/지역/긴급도 등)</p>
              <p>5. 고객 정보 입력 및 유효기간 설정</p>
              <p>6. 공유 링크 발송 및 조회 추적</p>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-light mb-2">소비자 플로우</h3>
            <div className="space-y-1 text-muted">
              <p>1. 견적 코드 입력 또는 견적 내용 직접 입력</p>
              <p>2. AI가 항목별 시장 가격 비교 분석</p>
              <p>3. 신호등 시스템으로 적정가 표시</p>
              <p>4. 시장 가격 범위 및 항목별 코멘트 제공</p>
              <p>5. 분석 결과 저장 및 이력 관리</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-light text-center mb-10">
          주요 기능 및 기술
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card group hover:border-accent/30"
            >
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

      {/* Tech Highlights */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-light text-center mb-10">
          기술적 하이라이트
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: 'AI 파이프라인',
              description:
                'OpenAI GPT-4o-mini로 견적 생성/분석, Perplexity API로 실시간 시세 조회, 공공 가격 DB fallback. 업종별 맞춤 프롬프트 엔지니어링과 신뢰도 점수 시스템 구현.',
            },
            {
              title: 'Supabase 풀스택',
              description:
                'PostgreSQL DB, Row Level Security(RLS), 소셜 인증(카카오/구글), 실시간 구독 추적. 서버/클라이언트/어드민 3개의 Supabase 클라이언트를 용도별로 분리.',
            },
            {
              title: '결제 및 구독 시스템',
              description:
                '토스페이먼츠 API 연동으로 4단계 구독 결제 처리. 프로모션 코드, 추천인 시스템, 사용량 기반 요금제 게이팅, 업그레이드 유도 모달 구현.',
            },
            {
              title: 'CI/CD 및 모니터링',
              description:
                'GitHub Actions로 main 브랜치 푸시 시 자동 빌드/배포. Docker 컨테이너로 EC2 배포, Sentry 에러 모니터링, GA4 이벤트 추적 통합.',
            },
          ].map((item) => (
            <div key={item.title} className="card">
              <h3 className="text-base font-semibold text-light mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
