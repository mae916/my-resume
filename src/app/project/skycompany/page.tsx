import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: '하늘위컴퍼니 - 디지털 추모관 플랫폼',
  description:
    '고인과 반려동물을 위한 온라인 추모관 SaaS. 기획부터 실서비스 배포·운영까지 1인 풀스택으로 개발한 프로젝트입니다.',
  openGraph: {
    title: '하늘위컴퍼니 - 디지털 추모관 플랫폼 | 김혜진 포트폴리오',
    description:
      '고인과 반려동물을 위한 온라인 추모관 SaaS. 기획부터 실서비스 배포·운영까지 1인 풀스택으로 개발한 프로젝트입니다.',
    images: [
      {
        url: '/images/project/skycompany.png',
        width: 1200,
        height: 630,
        alt: '하늘위컴퍼니 메인 화면',
      },
    ],
  },
};

const features = [
  {
    title: '드래그앤드롭 추모관 꾸미기',
    description:
      '꽃·편지·스티커를 자유롭게 배치하는 인터랙티브 캔버스. 룸/제사상 2종의 캔버스를 제네릭 베이스 컴포넌트 하나로 통합하고, 좌표·폰트를 vmin 단위로 저장해 PC와 모바일에서 동일한 상대 위치에 렌더링되도록 설계했습니다.',
  },
  {
    title: '종교별 전통 제사상',
    description:
      '전통 제사·기독교·천주교·일본식 등 종교별 추모 상차림을 지원합니다. 지방(紙榜) 텍스트 편집, 아이템 타입별 제약(회전 가능/불가, 텍스트 편집), z-index 관리 등 도메인 특화 UX를 구현했습니다.',
  },
  {
    title: '요금제·구독 시스템',
    description:
      '4단계 요금제와 다단계 업그레이드(증분 요금 합산), 기능 플래그 기반 요금제별 제한을 구현했습니다. 만료 30일 전 안내 발송과 자동 만료 처리를 cron 스케줄러로 자동화했습니다.',
  },
  {
    title: '환불 계산 엔진',
    description:
      '결제별 breakdown 방식으로 최초 결제와 업그레이드 결제를 분리 산출하고, 이벤트(무료) 가입자의 업그레이드분 부분환불까지 지원합니다. 계산 중간값 전체를 DB에 저장해 감사 추적이 가능한 정산 체계를 구축했습니다.',
  },
  {
    title: '알림 인프라 (알림톡 → SMS 폴백)',
    description:
      '카카오 알림톡 실패 시 SMS로 자동 폴백하고 최대 3회 재시도하는 발송 체인. 발송 이력을 전건 DB에 기록해 실패 원인을 추적할 수 있으며, 알림 실패가 본 트랜잭션을 실패시키지 않도록 비동기로 분리했습니다.',
  },
  {
    title: '대용량 미디어 파이프라인',
    description:
      '100MB 영상은 S3 Multipart Upload로 3파트 병렬 전송하며 진행률을 추적합니다. 이미지는 서버에서 sharp로 압축(투명도 보존, 최대 1200px)해 저장 비용을 절감했습니다.',
  },
  {
    title: 'AI 추모 챗봇 "메모리톡"',
    description:
      '반려동물의 성격·추억 데이터를 기반으로 Google Gemini가 대화하는 AI 챗봇. AI 추모 영상 기능과 함께 요금제별 기능 플래그로 제공됩니다.',
  },
  {
    title: '공개 추모관 공유 페이지',
    description:
      '비로그인 방문자용 공개 추모관 — 방명록, 방문자 꾸미기, QR 공유를 지원합니다. 게스트 유입 시 소유자 세션과 분리되도록 탭 단위 게스트 플래그를 설계해 세션 경계를 명확히 했습니다.',
  },
  {
    title: '사람/펫 병렬 어드민',
    description:
      '회원·결제·환불·탈퇴를 관리하는 어드민을 config 주입형 베이스 컴포넌트로 구성 — 사람용/펫용 어드민이 같은 컴포넌트를 공유하되 메뉴·번역·테마 설정만 교체해 화면당 구현 1벌을 유지합니다.',
  },
];

const techStack = [
  'Next.js 16',
  'React 19',
  'TypeScript',
  'Tailwind CSS v4',
  'next-intl',
  'Express',
  'Prisma',
  'PostgreSQL',
  'AWS S3',
  'Google Gemini',
  'Playwright',
  'Sentry',
  'Docker',
  'pnpm Monorepo',
];

export default function SkyCompanyPage() {
  return (
    <section className="section">
      {/* Back Button */}
      <Link
        href="/project"
        className="inline-flex items-center gap-2 text-muted hover:text-ink transition-colors mb-8"
      >
        <ArrowLeft size={16} />
        <span className="text-sm font-medium">프로젝트 목록</span>
      </Link>

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
        <div>
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            Memorial Platform
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-ink mb-3">
            하늘위컴퍼니
          </h1>
          <p className="text-muted text-lg">
            고인과 반려동물을 위한 디지털 추모관 SaaS - 기획부터 운영까지 1인 풀스택
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="https://skyup2025.com"
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
      <div className="relative aspect-video rounded-2xl overflow-hidden border border-line mb-10">
        <Image
          src="/images/project/skycompany.png"
          alt="하늘위컴퍼니 디지털 추모관 메인 화면"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Project Info */}
      <div className="grid lg:grid-cols-2 gap-6 mb-16">
        <div className="card">
          <h2 className="text-lg font-semibold text-ink mb-4">
            프로젝트 개요
          </h2>
          <div className="space-y-3 text-sm">
            {[
              { label: '참여 기간', value: '2025.11 - 2026.06 (약 7개월)' },
              { label: '참여 인원', value: '1명 (풀스택 전담)' },
              {
                label: '담당 역할',
                value: '프론트엔드, 백엔드, 인프라, 운영',
              },
              { label: '프로젝트 유형', value: 'B2C SaaS (실서비스 운영 중)' },
            ].map((item) => (
              <div key={item.label} className="flex gap-4">
                <span className="text-muted min-w-[100px]">{item.label}</span>
                <span className="font-medium text-ink">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold text-ink mb-4">핵심 지표</h2>
          <ul className="space-y-2">
            {[
              'TypeScript 약 46,000줄 - 페이지 78개, 컴포넌트 89개, REST API 97개',
              '사용자·어드민·펫어드민 3개 서비스를 단일 코드베이스로 운영',
              'Playwright E2E 194건으로 인증·결제·환불 핵심 플로우 회귀 방지',
              '번역 키 1,560개 × 2개 언어(한국어/일본어) 완전 동기화',
              'Prisma 마이그레이션 23회 - 운영 중 무중단 스키마 진화',
              '7개월간 875 커밋, 실서비스 운영 중',
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
        <h2 className="text-lg font-semibold text-ink mb-4">프로젝트 배경</h2>
        <div className="space-y-3 text-sm text-muted leading-relaxed">
          <p>
            하늘위컴퍼니는 고인(사람)과 반려동물을 위한
            <span className="text-ink"> 온라인 납골당/추모관 서비스</span>
            입니다. 사용자는 멤버십에 가입해 추모관을 개설하고, 꽃·편지·스티커를
            배치하는 디지털 추모실, 종교별 전통 제사상, 앨범/영상, AI 추모
            챗봇까지 이용할 수 있습니다.
          </p>
          <p>
            Figma 디자인 전환부터 백엔드·결제·알림 인프라·배포 파이프라인까지
            <span className="text-ink"> 전 과정을 1인 풀스택으로 수행</span>
            했으며, 한국어/일본어 이중 언어와 장례식장 제휴 비즈니스 모델을
            지원합니다. 이후 펫 추모관을 런칭하면서 사람/펫 서비스를 re-export
            패턴과 basePath 추상화로 공유해
            <span className="text-ink"> 페이지 로직 중복 0줄</span>을
            달성했습니다.
          </p>
        </div>
      </div>

      {/* Architecture */}
      <div className="card mb-16">
        <h2 className="text-lg font-semibold text-ink mb-4">
          시스템 아키텍처
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className="font-medium text-ink mb-2">
              단일 코드베이스, 3개 서비스
            </h3>
            <div className="space-y-1 text-muted">
              <p>1. pnpm 모노레포 (web / server / shared)</p>
              <p>2. 미들웨어가 앱 모드·서브도메인 감지</p>
              <p>3. 사용자 앱 / 사람 어드민 / 펫 어드민 분기</p>
              <p>4. config 주입형 베이스 컴포넌트로 화면 공유</p>
              <p>5. 사용자·관리자 세션 쿠키 이원화</p>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-ink mb-2">운영 인프라</h3>
            <div className="space-y-1 text-muted">
              <p>1. EC2 + Docker Compose 3컨테이너 구성</p>
              <p>2. main 브랜치 push 시 자동 배포</p>
              <p>3. Graceful shutdown으로 무중단 배포</p>
              <p>4. Sentry 에러 추적 + 헬스체크</p>
              <p>5. S3 미디어 스토리지 + sharp 이미지 압축</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-ink text-center mb-10">
          주요 기능 및 기술
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div key={feature.title} className="card group hover:border-accent/30">
              <h3 className="text-base font-semibold text-ink mb-2 group-hover:text-accent transition-colors">
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
        <h2 className="text-2xl font-bold text-ink text-center mb-10">
          기술적 하이라이트
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: '동시성 안전 설계 - 원자적 조건부 업데이트',
              description:
                '입금 확인·업그레이드 승인·탈퇴 승인처럼 여러 관리자가 동시에 조작할 수 있는 상태 전이는 read-then-write 대신 조건부 updateMany를 원자적 락으로 사용하도록 설계 - 중복 알림 발송이나 금액 이중 적립이 구조적으로 발생하지 않으며, 어드민 mutation 전체에 표준 패턴으로 적용했습니다.',
            },
            {
              title: '감사 추적 가능한 정산 체계',
              description:
                '환불 계산은 최초 결제와 업그레이드 결제를 분리 산출하는 breakdown 방식으로 설계하고, 계산에 쓰인 모든 중간값(결제액, 사용 일수, 공제액 등)을 DB에 저장합니다. 이벤트 가입자의 부분환불, 재업그레이드 같은 엣지 케이스도 과거 데이터로 언제든 검증·역추적할 수 있습니다.',
            },
            {
              title: '환경 일관성 확보',
              description:
                'ESM 모듈 해석, 컨테이너 타임존(KST) 등 로컬과 프로덕션이 달라질 수 있는 지점을 Docker 레벨에서 표준화하고 팀 컨벤션으로 문서화했습니다. 헬스체크와 Sentry 에러 추적으로 환경 차이를 조기에 발견하는 체계도 갖췄습니다.',
            },
            {
              title: '무중단 배포 - Graceful Shutdown',
              description:
                'SIGTERM 수신 시 신규 요청 수신 중단 → 인플라이트 요청 완료 대기 → DB disconnect 순서로 종료하도록 설계해, 배포 중에도 처리 중인 요청이 유실되지 않고 커넥션 풀이 깨끗하게 정리됩니다. Docker 배포 주기에 맞춘 구성입니다.',
            },
            {
              title: '게스트/소유자 세션 분리 설계',
              description:
                '공유 링크는 비로그인 방문자가 유입되는 경로이므로 탭 단위 게스트 플래그로 소유자 세션과 경계를 명확히 하고, 공유 API 응답에는 소유자 식별 정보를 포함하지 않습니다. 로그 PII 마스킹, XSS sanitize, 엔드포인트별 rate limit 등 방어 계층도 함께 구축했습니다.',
            },
            {
              title: '데이터 보호 - 방어적 설계',
              description:
                '동시 편집 상황의 상태 변경에는 깊은 복사(structuredClone)를 적용하고, 파일 삭제는 새 파일 업로드가 확인된 경우에만 수행하는 선행 조건 검증을 두었습니다. 모든 S3 삭제에 감사 로그를 남겨 복구 불가능한 데이터 손실을 구조적으로 방지합니다.',
            },
          ].map((item) => (
            <div key={item.title} className="card">
              <h3 className="text-base font-semibold text-ink mb-2">
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
