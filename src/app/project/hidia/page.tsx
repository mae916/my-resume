import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: '하이다이아 - 예물 예약 관리 플랫폼',
  description:
    '결혼반지·예물 매장과 고객을 연결하는 상용 예약 플랫폼의 풀스택 고도화. QR·GPS 포인트 시스템, 온라인 예약, FCM 푸시 알림을 구축했습니다.',
  openGraph: {
    title: '하이다이아 - 예물 예약 관리 플랫폼 | 김혜진 포트폴리오',
    description:
      '결혼반지·예물 매장과 고객을 연결하는 상용 예약 플랫폼의 풀스택 고도화. QR·GPS 포인트 시스템, 온라인 예약, FCM 푸시 알림을 구축했습니다.',
    images: [
      {
        url: '/images/project/hidia.png',
        width: 1200,
        height: 630,
        alt: '하이다이아 메인 화면',
      },
    ],
  },
};

const features = [
  {
    title: 'QR·GPS 포인트 시스템 (0→1 구축)',
    description:
      '매장 방문을 유도하는 QR 기반 포인트 적립·사용 시스템을 신규 설계·구축했습니다. QR 캡처·공유만으로는 방문 증명이 안 되므로 Haversine 공식으로 매장 좌표와 고객 GPS의 실거리를 계산해 반경 내에서만 적립되도록 부정 적립을 방지했습니다.',
  },
  {
    title: '포인트 사용 상태 머신 + 동시성 안전',
    description:
      '즉시 차감이 아닌 "선 요청 → 파트너 승인 시 차감" 2단계 상태 머신으로 오프라인 매장 시나리오를 반영했습니다. 잔액 차감은 MongoDB 원자 연산($inc)으로 처리해 동시 요청에도 이중 차감이 없고, 거래별 처리자·잔액을 기록해 감사 추적이 가능합니다.',
  },
  {
    title: '포인트 자동 만료 배치',
    description:
      '매일 새벽 실행되는 배치가 만료 도래 적립분을 사용자별 합산하고, 잔액 초과 차감 방지와 멱등 설계(재실행돼도 이중 차감 없음)를 적용했습니다. 적립 금액·만료 기간은 key-value 설정으로 관리해 코드 배포 없이 정책을 변경할 수 있습니다.',
  },
  {
    title: '온라인 예약 시스템',
    description:
      '업체별 영업시간·예약 단위·동시 수용량 설정을 기반으로 서버가 시간 슬롯을 동적 계산(Aggregation 집계)합니다. 신청→확정→방문/취소/노쇼의 5-상태 예약 상태 머신과 상태 전이별 자동 알림, 프론트/서버 3중 검증을 구현했습니다.',
  },
  {
    title: 'FCM 푸시 알림 파이프라인 (풀스택)',
    description:
      'Firebase Admin SDK(서버), Kotlin/Swift 네이티브 토큰 브릿지(앱), 딥링크 라우팅까지 양 플랫폼을 직접 구현했습니다. 인앱 알림 DB 저장과 푸시 발송을 단일 진입점으로 통합해 발송 시점 추가 시 한 곳만 수정하면 됩니다.',
  },
  {
    title: '파트너 관리 페이지 (신규 SPA)',
    description:
      '업체가 직접 운영하는 독립 Vue SPA를 구축했습니다. 예약 캘린더, 영업시간·휴무일 설정, 리세팅 견적 회신, 리뷰 답변, 포인트 승인/거절, QR 코드 생성까지 13개 뷰로 구성했습니다.',
  },
  {
    title: '리세팅 견적 플로우',
    description:
      '고객이 7단계 폼(카테고리→소재→다이아 크기→디자인·원석 사진→취향)으로 견적을 신청하면 세공·감정 전문가가 금액·기간·사진과 함께 회신하고, 고객은 회신 기반으로 바로 예약 전환할 수 있습니다.',
  },
  {
    title: '하이브리드 앱 (WebView + Native Bridge)',
    description:
      'Android(Kotlin/Compose)·iOS(Swift/SwiftUI) 앱이 웹을 WebView로 띄우고 FCM 토큰, GPS, QR 카메라만 네이티브가 담당합니다. 웹 배포 한 번으로 앱까지 동시 반영되며, 구형 WebView 호환(vh 폴리필, flex-gap 폴백 등)도 직접 대응했습니다.',
  },
  {
    title: '인증 시스템',
    description:
      'JWT + httpOnly 쿠키 + Silent Refresh 구조에 구글·애플·네이버·카카오 소셜 로그인 4종을 연동했습니다. 리다이렉트 기반 소셜 로그인의 크로스 도메인 쿠키 문제는 일회용 authCode 교환 방식으로 해결했습니다.',
  },
];

const techStack = [
  'Nuxt.js 2 (SSR)',
  'Vue.js',
  'Express',
  'MongoDB Atlas',
  'Kotlin / Jetpack Compose',
  'Swift / SwiftUI',
  'Firebase (FCM)',
  'AWS EC2 / S3',
  'Nginx',
  'PM2',
  'GitHub Actions',
];

export default function HidiaPage() {
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
            Reservation Platform
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-ink mb-3">
            하이다이아
          </h1>
          <p className="text-muted text-lg">
            결혼반지·예물 예약 관리 플랫폼 - 상용 서비스의 풀스택 고도화
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="https://hidia.kr"
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
          src="/images/project/hidia.png"
          alt="하이다이아 메인 화면"
          fill
          className="object-contain bg-paper-100"
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
              { label: '참여 기간', value: '2026.01 - 2026.07 (약 6개월)' },
              { label: '참여 인원', value: '1명 (풀스택 전담, 운영 이관 인수)' },
              {
                label: '담당 역할',
                value: '백엔드, 웹/앱 프론트, 인프라, CI/CD, 운영',
              },
              {
                label: '프로젝트 유형',
                value: '상용 예약 플랫폼 고도화 (웹 + 하이브리드 앱)',
              },
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
              '실사용자 225명+, 등록 업체 269개+의 상용 서비스 운영',
              '6개월간 403 커밋 단독 기여 (프로젝트 전체 커밋의 41%)',
              '총 166개 화면 (메인 웹 107 + 관리자 46 + 파트너 13)',
              '포인트 시스템 0→1 구축 - API 14개+, 화면 8개 신규 개발',
              '통합 시나리오 테스트 125개+ (예약·포인트·리뷰·견적·알림)',
              'GitHub Actions CI/CD 구축 - 배포 소요 2~3분',
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
            하이다이아는 결혼반지·예물을 판매하는 매장과 세공·감정 전문가를
            고객과 연결하는
            <span className="text-ink"> 예약 관리 플랫폼</span>입니다. 고객은
            웹/앱에서 매장을 탐색하고 온라인으로 예약하며, 매장 방문 시 QR로
            포인트를 적립합니다.
          </p>
          <p>
            이전 개발사가 구축해 운영 중이던 서비스를
            <span className="text-ink"> 2026년 1월에 이관받아</span> 코드
            감사·보수와 함께 신규 시스템을 얹은
            <span className="text-ink"> 브라운필드(brownfield) 고도화
            프로젝트</span>입니다. 기존 데이터와 사용자 흐름을 깨지 않으면서
            무중단으로 기능을 추가해야 하는 난이도가 있었고, 백엔드 API부터 웹
            프론트, 관리자/파트너 SPA, Android/iOS 네이티브 브릿지, AWS 인프라,
            CI/CD, 운영까지
            <span className="text-ink"> 전 영역을 1인 풀스택으로 수행</span>
            했습니다.
          </p>
          <p>
            운영 중 발견한 개선 기회를 기능 제안서로 작성해
            <span className="text-ink"> 추가 계약 2건을 수주</span>하는 등
            개발을 넘어 서비스 성장에도 기여했습니다.
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
              Nuxt SSR + Express 단일 프로세스
            </h3>
            <div className="space-y-1 text-muted">
              <p>1. Nuxt serverMiddleware로 Express 통합</p>
              <p>2. 포트 하나로 SSR 렌더링 + REST API 처리</p>
              <p>3. MongoDB Atlas - 로컬/개발/운영 3-DB 분리</p>
              <p>4. node-schedule 배치 (예약 리마인더, 포인트 만료)</p>
              <p>5. 관리자·파트너는 독립 Vue SPA로 분리 서빙</p>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-ink mb-2">
              하이브리드 앱 구조
            </h3>
            <div className="space-y-1 text-muted">
              <p>1. Android/iOS가 웹을 WebView로 렌더링</p>
              <p>2. 네이티브: FCM 토큰·GPS·QR 카메라 담당</p>
              <p>3. JS Bridge로 웹 ↔ 네이티브 통신</p>
              <p>4. 푸시 탭 시 딥링크로 해당 페이지 이동</p>
              <p>5. 웹 배포 한 번으로 앱까지 동시 반영</p>
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
              title: 'SSR 배포 파이프라인 안정화',
              description:
                '운영 이관 시점에 배포 체계를 감사해 SSR 배포의 안티패턴(빌드 후 재시작 누락, 가변 IP 의존)을 정리했습니다. "SSR에서 빌드와 프로세스 재시작은 한 세트"라는 원칙과 chunk 해시 정합성 진단 커맨드를 체크리스트로 문서화해, 누가 배포해도 같은 결과가 나오는 절차를 만들었습니다.',
            },
            {
              title: '저사양 인프라의 빌드 안정화',
              description:
                '메모리가 제한된 운영 서버에서 무거운 SSR 빌드를 안정적으로 수행하도록 swap 확보와 메모리 상한 빌드(--max-old-space-size)를 적용하고, 디스크 자동 관리 절차를 운영 문서화했습니다. 근본 대책으로 "빌드는 CI에서, 서버는 실행만" 구조 전환을 제안했습니다.',
            },
            {
              title: '인증 토큰과 상태 플래그의 분리 설계',
              description:
                '보안 속성(httpOnly 쿠키는 JS에서 읽을 수 없음)과 클라이언트 요구(JS에서 로그인 상태 판별)의 충돌을, 인증 토큰(httpOnly)과 상태 플래그(일반 쿠키)를 분리하는 패턴으로 해결했습니다. 가설 검증에는 로그 히트 수 같은 정량 증거를 사용해 원인 후보를 체계적으로 좁혔습니다.',
            },
            {
              title: '미디어 저장 구조 개선',
              description:
                '레거시의 base64 DB 저장 방식을 S3 URL + 병렬 업로드(Promise.all) 구조로 전환하고, 정렬 쿼리에 복합 인덱스를 추가해 리뷰 시스템의 응답성을 확보했습니다. 기존 데이터는 dry-run 안전장치와 멱등 설계를 갖춘 마이그레이션 스크립트로 무중단 이전했습니다.',
            },
            {
              title: '레거시 코드 감사와 무중단 현대화',
              description:
                '이관 인수 시점에 기존 코드베이스를 전수 감사해 인증 체계를 현대화했습니다. 비밀번호 해싱을 bcrypt로 전환하되 로그인 성공 시 자동 재해싱되는 점진 마이그레이션으로 설계해 강제 초기화 없이 이행했고, 쿠키 보안 정책·접근 제어·Rate Limiter를 일괄 정비했습니다.',
            },
            {
              title: 'CI/CD 구축과 운영 문서화',
              description:
                'GitHub Actions로 develop→개발서버, main→운영서버 자동 배포를 구축해 배포 소요를 2~3분으로 만들었습니다. 배포 절차·진단 커맨드·복구 절차를 담은 운영 인수인계서, 푸시 알림 구축 가이드, 비개발자용 매뉴얼까지 작성해 조직에 이전 가능한 지식으로 남겼습니다.',
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
