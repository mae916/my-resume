import type { ProjectItem } from '@/types';

export const projectList: ProjectItem[] = [
  {
    title: 'S&HT - 스마트 엔지니어링 기업 웹사이트',
    image: '/images/project/snht.png',
    tags: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'GSAP', 'i18n'],
    link: '/project/snht',
    description:
      '산업 자동화 및 AI 관제 솔루션 전문 기업의 다국어 반응형 기업 소개 웹사이트입니다.',
  },
  {
    title: 'ESGable - 탄소 배출량 관리 플랫폼',
    image: '/images/project/esgable.png',
    tags: ['Vue.js 3', 'Pinia', 'Tailwind CSS', 'ApexCharts', 'i18n'],
    link: '/project/esgable',
    description:
      '기업의 ESG 경영을 위한 탄소 배출량 관리 및 공급망 조사 B2B SaaS 플랫폼입니다.',
  },
  {
    title: 'IBC Group - 글로벌 엔지니어링 기업',
    image: '/images/project/ibc.png',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'i18n'],
    link: '/project/ibc',
    description:
      '아프리카 중심 글로벌 엔지니어링 및 컨설팅 기업의 다국어 기업 소개 웹사이트입니다.',
  },
  {
    title: '보험 설계사 소개 웹사이트',
    image: '/images/project/jagang.png',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Docker', 'AWS'],
    link: '/project/jagang',
    description:
      '삼성화재 보험설계사를 위한 모바일 최적화 프로필 페이지. QR코드 스캔으로 접근하여 상담을 바로 연결합니다.',
  },
  {
    title: 'Quai - AI 견적 플랫폼',
    image: '/images/project/quai.png',
    tags: ['Next.js 14', 'TypeScript', 'Supabase', 'OpenAI', 'Toss Payments'],
    link: '/project/quai',
    description:
      'AI 기반 양면 견적 플랫폼. 공급자는 3분 만에 견적서를 생성하고, 소비자는 3초 만에 견적을 검증합니다.',
  },
];
