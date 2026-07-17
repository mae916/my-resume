import type { SkillItem } from '@/types';

export const skills: SkillItem[] = [
  {
    name: 'React / React Native',
    icon: '/icons/react.svg',
    description:
      'React로 웹을, React Native(Expo)로 모바일 앱을 개발합니다. 122개 화면 규모의 앱을 혼자 개발해 App Store·Play 스토어 심사 대응까지 완료했고, EAS 빌드와 OTA 업데이트로 배포를 운영합니다.',
  },
  {
    name: 'Next.js',
    icon: '/icons/nextjs.svg',
    description:
      'App Router 기반 서버/클라이언트 컴포넌트 설계, RSC + Server Actions로 어드민을 구축했습니다. SSR·SSG를 통한 SEO 최적화 경험이 있으며, 이 포트폴리오도 Next.js 15로 제작했습니다.',
  },
  {
    name: 'Vue.js / Nuxt',
    icon: '/icons/vue.svg',
    description:
      'Nuxt 2 SSR 기반 상용 예약 플랫폼을 운영·고도화하고, Vue SPA 관리자 페이지 2종을 개발했습니다. 실무에서 Vue 기반 하이브리드 앱을 개발한 경험도 있습니다.',
  },
  {
    name: 'TypeScript',
    icon: '/icons/typescript.svg',
    description:
      '모든 프로젝트의 기본 언어로 사용합니다. 제너릭과 유틸리티 타입으로 재사용 가능한 타입을 설계하고, 레거시의 타입 우회(as any)를 제거하는 과정에서 숨은 버그를 찾아낸 경험이 있습니다.',
  },
  {
    name: 'NestJS',
    icon: '/icons/nestjs.svg',
    description:
      '모듈 아키텍처와 DI 기반으로 REST API 548개 규모의 백엔드를 설계·운영합니다. 결제·환불·정산, 본인인증, 실시간 채팅 등 커머스 코어 도메인을 직접 구현했고, 자동 테스트를 배포 게이트로 운영합니다.',
  },
  {
    name: 'Express',
    icon: '/icons/express.svg',
    description:
      '모노레포 구조의 API 서버부터 Nuxt serverMiddleware 통합 서버까지 상용 서비스 백엔드를 운영했습니다. JWT 인증, 소셜 로그인 4종, 알림 인프라를 직접 구현했습니다.',
  },
  {
    name: 'PostgreSQL / MongoDB',
    icon: '/icons/postgresql.svg',
    description:
      '136개 테이블 규모의 스키마 설계, 월 단위 파티셔닝, 무중단 DB 구조 전환을 수행했습니다. MongoDB Atlas 운영 환경에서 인덱스 설계와 Aggregation 최적화 경험이 있습니다.',
  },
  {
    name: 'AWS',
    icon: '/icons/aws.svg',
    description:
      'EC2·ECS Fargate·RDS·S3·KMS·Amplify·Route53으로 서비스 인프라를 구축·운영합니다. IAM 권한 정리, 시크릿 관리, 백업 정책 수립 등 보안·운영 체계를 직접 설계했습니다.',
  },
  {
    name: 'Docker / CI-CD',
    icon: '/icons/docker.svg',
    description:
      'docker-compose 컨테이너 구성과 GitHub Actions 자동 배포 파이프라인을 구축했습니다. 이미지 SHA 고정 배포와 테스트·린트 품질 게이트로 "검증 안 된 코드는 배포 불가" 구조를 만들었습니다.',
  },
  {
    name: 'Tailwind CSS',
    icon: '/icons/tailwindcss.svg',
    description:
      '유틸리티 퍼스트 방식으로 빠르고 일관된 UI를 개발합니다. 커스텀 디자인 시스템 구축, 반응형 레이아웃, 다크모드 구현 경험이 있습니다.',
  },
];
