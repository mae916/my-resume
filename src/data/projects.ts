import type { ProjectItem } from '@/types';

export const projectList: ProjectItem[] = [
  {
    title: 'ESGable - 탄소 배출량 관리 플랫폼',
    image: '/images/project/esgable.png',
    tags: ['Vue.js 3', 'TypeScript', 'Pinia', 'Tailwind CSS', 'i18n'],
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
    tags: ['React', 'CSR', 'Responsive', 'QRCode', 'Docker'],
    link: 'https://github.com/mae916/Insurance-agent-profile',
    description:
      '실제 운영을 위해 제작된 보험 설계사용 PC/모바일 소개페이지이며, 상담 연결 기능이 있습니다.',
  },
];
