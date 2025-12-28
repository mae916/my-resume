import type { SkillItem } from '@/types';

export const skills: SkillItem[] = [
  {
    name: 'React',
    icon: '/icons/react.svg',
    description:
      'JSX를 활용한 UI 구성 및 Virtual DOM을 통한 성능 최적화를 이해하고 있습니다. 상태 관리 라이브러리(예: Recoil)와 함께 컴포넌트 간 데이터 흐름을 관리하는 방법을 익혔습니다.',
  },
  {
    name: 'Next.js',
    icon: '/icons/nextjs.svg',
    description:
      'App Router 기반의 서버 컴포넌트와 클라이언트 컴포넌트를 구분하여 활용하며, SSR/SSG를 통한 SEO 최적화와 성능 개선 경험이 있습니다.',
  },
  {
    name: 'Vue.js',
    icon: '/icons/vue.svg',
    description:
      '반응형 데이터 바인딩과 컴포넌트 기반 아키텍처를 통해 효율적인 UI를 구성하는 방법을 이해하고 있습니다. Vue의 생명주기 훅을 활용하여 컴포넌트의 상태와 동작을 관리할 수 있습니다.',
  },
  {
    name: 'TypeScript',
    icon: '/icons/typescript.svg',
    description:
      '정적 타입 시스템을 통해 코드의 안정성과 가독성을 높일 수 있다는 점에서 선호하며, 타입 추론과 제너릭을 활용해 유연한 코드 작성 경험이 있습니다.',
  },
  {
    name: 'Tailwind CSS',
    icon: '/icons/tailwindcss.svg',
    description:
      '유틸리티 퍼스트 방식으로 빠르고 일관된 UI 개발이 가능하며, 반응형 디자인과 다크모드 구현 경험이 있습니다. 커스텀 테마 설정을 통해 디자인 시스템을 구축할 수 있습니다.',
  },
  {
    name: 'NestJS',
    icon: '/icons/nestjs.svg',
    description:
      '모듈 기반 아키텍처와 의존성 주입을 활용한 확장 가능한 백엔드 구축 경험이 있습니다. Prisma ORM과 함께 RESTful API를 설계하고 JWT 인증을 구현했습니다.',
  },
  {
    name: 'PostgreSQL',
    icon: '/icons/postgresql.svg',
    description:
      'Prisma ORM과 함께 관계형 데이터베이스를 설계하고 마이그레이션을 관리한 경험이 있습니다. 복잡한 관계 설정과 효율적인 쿼리 작성이 가능합니다.',
  },
  {
    name: 'AWS',
    icon: '/icons/aws.svg',
    description:
      'EC2 인스턴스에 Docker 기반 서비스를 배포하고, S3를 통한 이미지 업로드, SES를 활용한 이메일 발송, Route53과 ACM을 이용한 도메인 및 SSL 인증서 관리 경험이 있습니다.',
  },
  {
    name: 'Docker',
    icon: '/icons/docker.svg',
    description:
      'Dockerfile, docker-compose를 작성해 프론트엔드와 백엔드, 데이터베이스를 각각 컨테이너로 분리하고, 효율적인 로컬 개발 환경을 구성한 경험이 있습니다.',
  },
];
