import type { EducationItem, WorkItem } from '@/types';

export const educationData: EducationItem[] = [
  {
    period: '2025.03 – 2025.04',
    school: '인프런',
    major: '한 입 크기로 잘라먹는 Next.js(v15)',
  },
  {
    period: '2025.01 – 2025.01',
    school: '인프런',
    major:
      '풀스택을 위한 도커와 최신 서버 기술(리눅스, nginx, AWS, HTTPS, 배포까지)',
  },
  {
    period: '2024.02 – 2024.02',
    school: '노마드코더',
    major: 'React JS 마스터클래스',
  },
  {
    period: '2023.08 – 2023.09',
    school: '인프런',
    major: '비전공자의 전공자 따라잡기 - 자료구조(with JavaScript)',
  },
  {
    period: '2023.07 – 2023.08',
    school: '인프런',
    major: 'Vue.js 완벽 가이드 - 실습과 리팩토링으로 배우는 실전 개념 수료',
  },
  {
    period: '2023.07 – 2023.07',
    school: '인프런',
    major: 'Vue.js 중급 강좌 - 웹앱 제작으로 배우는 Vue.js, ES6, Vuex 수료',
  },
  {
    period: '2021.07 – 2021.12',
    school: '연희직업전문학교',
    major: '프론트엔드&백엔드 디지털커머스융합 웹앱개발자과정',
  },
  {
    period: '2021.07 – 2021.09',
    school: '노마드코더',
    major: '[풀스택] 유튜브 클론코딩 - NodeJS, MongoDB, ES6, Express',
  },
  {
    period: '2021.05 – 2021.06',
    school: '노마드코더',
    major: '코코아톡 클론코딩 - CSS',
  },
];

export const workData: WorkItem[] = [
  {
    period: '2026.04 – 현재',
    company: '다온더케어',
    desc: '방문 재활운동 매칭 플랫폼을 1인 풀스택으로 개발·운영하고 있습니다. React Native 앱(122개 화면), NestJS 백엔드(REST API 548개), Next.js 어드민·웹포털 4개 제품과 AWS 인프라를 전담해 10주 만에 정식 런칭했고, 예약·결제·정산·본인인증·실시간 채팅 등 핵심 도메인을 직접 설계했습니다. 배포 자동화와 백업·무중단 DB 전환 체계를 구축하는 등 1인 운영을 뒷받침하는 안전망을 만들어가고 있습니다.',
    tags: ['React Native', 'NestJS', 'PostgreSQL', 'Next.js', 'AWS'],
  },
  {
    period: '2025.01 – 현재',
    company: '프리랜서',
    desc: '크몽, 위시켓, 숨고 등 플랫폼을 통해 웹 퍼블리싱 및 프론트엔드 개발 프로젝트를 수행하고 있습니다. 클라이언트 요구사항 분석부터 견적, 일정 관리, 커뮤니케이션까지 전 과정을 독립적으로 진행하며 문제 해결력과 비즈니스 감각을 키우고 있습니다.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    period: '2023.02 – 2024.07',
    company: '주식회사 올수',
    desc: 'Vue.js 기반 물류 하이브리드 앱과 PHP 기반 어드민 시스템을 개발했습니다. Chart.js를 활용한 B2B 대시보드 리뉴얼을 제안·구현하여 영업팀 미팅 활용도와 고객 만족도를 높였고, 파트너사 전용 시스템에서는 빠른 배포와 피드백 반영으로 사용성을 개선했습니다.',
    tags: ['Vue.js', 'PHP', 'Chart.js', 'MySQL', 'Git'],
  },
  {
    period: '2022.04 – 2022.09',
    company: '컨택트',
    desc: 'PHP와 JavaScript 기반 커뮤니티 사이트의 유지보수 및 UI 리뉴얼을 담당했습니다. 기존 코드를 분석하고 레거시 시스템을 점진적으로 개선하면서 실무 대응력과 코드 리딩 역량을 쌓았습니다.',
    tags: ['PHP', 'JavaScript', 'jQuery', 'MySQL'],
  },
];
