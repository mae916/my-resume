'use client';

import { GraduationCap, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import type { EducationItem, WorkItem } from '@/types';
import { educationData, workData } from '@/data/career';

interface CardContainerProps<T extends { period: string }> {
  icon: React.ReactNode;
  title: string;
  items: T[];
  limit?: number;
}

function CardContainer<T extends { period: string }>({
  icon,
  title,
  items,
  limit,
}: CardContainerProps<T>) {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = limit && !showAll ? items.slice(0, limit) : items;
  const hasMore = limit && items.length > limit;

  return (
    <article className="bg-white rounded-xl shadow p-6 h-fit">
      <h3 className="text-lg font-semibold mb-7 flex items-center gap-3">
        {icon}
        {title}
      </h3>
      <ul className="space-y-4 border-l-2 text-primary border-accent pl-4">
        {visibleItems.map((item, idx) => (
          <li key={idx}>
            <time className="text-gray-400">{item.period}</time>
            <p className="font-medium text-lg">
              {'school' in item
                ? (item as EducationItem).school
                : 'company' in item
                  ? (item as WorkItem).company
                  : ''}
            </p>
            <p className="text-sm text-gray-600">
              {'major' in item
                ? (item as EducationItem).major
                : 'desc' in item
                  ? (item as WorkItem).desc
                  : ''}
            </p>
          </li>
        ))}
      </ul>
      {hasMore ? (
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center justify-center w-full mt-4 text-sm text-gray-600 hover:text-gray-800 cursor-pointer transition-colors"
          aria-expanded={showAll}
          aria-label={showAll ? '목록 접기' : '더 보기'}
        >
          {showAll ? (
            <ChevronUp className="w-4 h-4" aria-hidden="true" />
          ) : (
            <ChevronDown className="w-4 h-4" aria-hidden="true" />
          )}
        </button>
      ) : (
        <div className="h-12" aria-hidden="true" />
      )}
    </article>
  );
}

export default function Career() {
  return (
    <section className="py-20 text-[var(--foreground)]" aria-labelledby="career-title">
      <h2 id="career-title" className="text-center mb-10 text-2xl font-bold">
        <span className="text-gray-800">Career</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <CardContainer<EducationItem>
          icon={
            <GraduationCap
              className="w-10 h-10 p-2 text-[#272527] bg-accent rounded-full"
              aria-hidden="true"
            />
          }
          title="Education"
          items={educationData}
          limit={workData.length}
        />
        <CardContainer<WorkItem>
          icon={
            <Briefcase
              className="w-10 h-10 p-2 text-[#272527] bg-accent rounded-full"
              aria-hidden="true"
            />
          }
          title="Work Experience"
          items={workData}
        />
      </div>
    </section>
  );
}
