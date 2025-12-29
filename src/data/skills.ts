import type { SkillItem } from '@/types';

export const skills: SkillItem[] = [
  {
    name: 'React',
    icon: '/icons/react.svg',
    description:
      'Hooks와 Context API를 활용한 상태 관리, 컴포넌트 최적화(memo, useMemo, useCallback)를 통해 성능을 개선합니다. Recoil 등 상태 관리 라이브러리 활용 경험이 있습니다.',
  },
  {
    name: 'Next.js',
    icon: '/icons/nextjs.svg',
    description:
      'App Router 기반 서버/클라이언트 컴포넌트 구분, SSR·SSG를 통한 SEO 최적화 경험이 있습니다. 이 포트폴리오 사이트가 Next.js 15로 제작되었습니다.',
  },
  {
    name: 'Vue.js',
    icon: '/icons/vue.svg',
    description:
      '실무에서 약 1년 6개월간 Vue.js 기반 하이브리드 앱을 개발했습니다. Composition API, Vuex를 활용한 상태 관리와 컴포넌트 설계 경험이 있습니다.',
  },
  {
    name: 'TypeScript',
    icon: '/icons/typescript.svg',
    description:
      '정적 타입을 통해 런타임 에러를 사전에 방지하고, 제너릭과 유틸리티 타입을 활용해 재사용 가능한 타입을 설계합니다. 협업 시 코드 가독성과 유지보수성을 높입니다.',
  },
  {
    name: 'Tailwind CSS',
    icon: '/icons/tailwindcss.svg',
    description:
      '유틸리티 퍼스트 방식으로 빠르고 일관된 UI를 개발합니다. 커스텀 디자인 시스템 구축, 반응형 레이아웃, 다크모드 구현 경험이 있습니다.',
  },
  {
    name: 'NestJS',
    icon: '/icons/nestjs.svg',
    description:
      '모듈 기반 아키텍처와 DI를 활용한 백엔드 개발 경험이 있습니다. Prisma ORM으로 데이터베이스를 연동하고, JWT 인증 및 RESTful API를 구현했습니다.',
  },
  {
    name: 'PostgreSQL',
    icon: '/icons/postgresql.svg',
    description:
      'Prisma ORM과 함께 테이블 설계, 관계 설정, 마이그레이션을 관리합니다. 인덱싱과 쿼리 최적화를 고려한 데이터 모델링 경험이 있습니다.',
  },
  {
    name: 'AWS',
    icon: '/icons/aws.svg',
    description:
      'EC2에 Docker 기반 서비스를 배포하고, S3(이미지 업로드), SES(이메일), Route53·ACM(도메인·SSL) 등을 활용한 인프라 구축 경험이 있습니다.',
  },
  {
    name: 'Docker',
    icon: '/icons/docker.svg',
    description:
      'docker-compose로 프론트엔드, 백엔드, DB를 컨테이너화하여 일관된 개발·배포 환경을 구성합니다. 멀티 스테이지 빌드로 이미지 최적화 경험이 있습니다.',
  },
];
