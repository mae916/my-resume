'use client';

import { GraduationCap, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const educationData = [
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
    major: 'Vue.js 중급 강좌 - 웹앱 제작으로 배워보는 Vue.js, ES6, Vuex 수료',
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

const workData = [
  {
    period: '2025.01 – 현재',
    company: '프리랜서 (크몽, 위시켓, 숨고 등)',
    desc: '웹 퍼블리싱 및 프론트엔드 개발 외주 수행',
  },
  {
    period: '2023.02 – 2024.07',
    company: '주식회사 올수',
    desc: '프론트엔드 개발 (Vue 기반 하이브리드 앱 + PHP 기반 어드민)',
  },
  {
    period: '2022.04 – 2022.09',
    company: '컨택트',
    desc: 'PHP, JS 기반 기존 커뮤니티 사이트 유지보수 및 리뉴얼',
  },
];

function CardContainer({
  icon,
  title,
  items,
  limit,
}: {
  icon: React.ReactNode;
  title: string;
  items: any[];
  limit?: number;
}) {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = limit && !showAll ? items.slice(0, limit) : items;

  return (
    <div className="bg-white rounded-xl shadow p-6 h-fit">
      <h3 className="text-lg font-semibold mb-7 flex items-center gap-3">
        {icon}
        {title}
      </h3>
      <ul className="space-y-4 border-l-2 text-[var(--pointcolor-navy)] border-[var(--pointcolor-yellow)] pl-4">
        {visibleItems.map((item, idx) => (
          <li key={idx}>
            <p className="text-gray-400">{item.period}</p>
            <p className="font-medium text-lg">{item.school || item.company}</p>
            <p className="text-sm text-gray-600">{item.major || item.desc}</p>
          </li>
        ))}
      </ul>

      {/* 더보기 버튼 */}
      {limit && items.length > limit && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center justify-center w-full mt-4 text-sm text-gray-600 hover:text-gray-800"
        >
          {showAll ? (
            <ChevronUp className="w-4 h-4 ml-1" />
          ) : (
            <ChevronDown className="w-4 h-4 ml-1" />
          )}
        </button>
      )}
    </div>
  );
}

export default function Career() {
  return (
    <main className="py-20 text-[var(--foreground)]" id="career">
      <h2 className="text-center mb-10 text-2xl font-bold">
        <span className="text-gray-800">Career</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <CardContainer
          icon={
            <GraduationCap className="w-10 h-10 p-2 text-[#272527] bg-[var(--pointcolor-yellow)] rounded-full" />
          }
          title="Education"
          items={educationData}
          limit={workData.length}
        />
        <CardContainer
          icon={
            <Briefcase className="w-10 h-10 p-2 text-[#272527] bg-[var(--pointcolor-yellow)] rounded-full" />
          }
          title="Work Experience"
          items={workData}
        />
      </div>
    </main>
  );
}
