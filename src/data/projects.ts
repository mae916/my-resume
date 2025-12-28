import type { ProjectItem } from '@/types';

export const projectList: ProjectItem[] = [
  {
    title: '채팅 웹앱 Kotalk',
    image: '/images/project/kotalk.png',
    tags: ['React', 'Socket.io', 'JWT', 'Express', 'Docker'],
    link: 'https://github.com/mae916/kotalk',
    description: '실시간 채팅, JWT 인증, 무한스크롤을 구현한 채팅 웹앱입니다.',
  },
  {
    title: '보험 설계사 소개 웹사이트',
    image: '/images/project/jagang.png',
    tags: ['React', 'CSR', 'Responsive', 'QRCode', 'Docker'],
    link: 'https://github.com/mae916/Insurance-agent-profile',
    description:
      '실제 운영을 위해 제작된 보험 설계사용 PC/모바일 소개페이지이며, 상담 연결 기능이 있습니다.',
  },
  {
    title: '개인 포트폴리오 웹사이트',
    image: '/images/project/profile.png',
    tags: ['Next', 'Responsive', 'Docker'],
    link: 'https://github.com/mae916/my-resume',
    description:
      '실제 운영을 위해 제작된 저의 프론트엔드 개발자 포트폴리오 PC/모바일 사이트 입니다.',
  },
];
