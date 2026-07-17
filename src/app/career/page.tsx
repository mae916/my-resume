import type { Metadata } from 'next';
import type { WorkItem, EducationItem } from '@/types';
import { workData, educationData } from '@/data/career';
import { getYearsOfExperienceLabel } from '@/lib/career';

export const metadata: Metadata = {
  title: '경력사항',
  description:
    '개발자 김혜진의 경력사항입니다. 다온더케어, 프리랜서, 올수, 컨택트에서의 풀스택·프론트엔드 실무 경험과 프로젝트 이력을 확인해보세요.',
  openGraph: {
    title: '경력사항 | 프론트엔드 개발자 김혜진',
    description: '프론트엔드 개발자 김혜진의 경력과 프로젝트 실무 경험',
  },
};

const tints = ['bg-paper-100', 'bg-paper-100', 'bg-paper-100', 'bg-paper-100'];

export default function Career() {
  return (
    <section className="section !pt-10 lg:!pt-14" aria-labelledby="career-title">
      {/* Header */}
      <header className="mb-12">
        <p className="eyebrow mb-3">Experience</p>
        <h1
          id="career-title"
          className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
        >
          Career<span className="text-accent">.</span>
        </h1>
        <p className="text-ink-soft text-lg max-w-xl">
          개발자로서의 경력과 성장 과정입니다.
        </p>
      </header>

      {/* Work - 알림 스택 스타일 */}
      <div className="space-y-5 max-w-3xl">
        {workData.map((item: WorkItem, idx: number) => (
          <article
            key={idx}
            className="card !p-6 md:!p-7 animate-fade-up"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="flex items-start gap-4">
              {/* 앱 아이콘 */}
              <span
                className={`shrink-0 flex items-center justify-center w-12 h-12 rounded-[14px] ${tints[idx % tints.length]} border border-black/[0.05] text-lg font-bold`}
                aria-hidden="true"
              >
                {item.company.slice(0, 1)}
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                  <h2 className="text-lg md:text-xl font-bold text-ink">
                    {item.company}
                  </h2>
                  <span className="flex items-center gap-2.5">
                    <span className="text-tiny font-medium text-muted bg-paper rounded-full px-2.5 py-1 border border-black/[0.05]">
                      {item.period}
                    </span>
                    {/* iOS 토글 - 재직 여부 */}
                    <span
                      className={`ios-toggle ${item.period.includes('현재') ? 'on' : 'off'}`}
                      role="img"
                      aria-label={item.period.includes('현재') ? '재직 중' : '퇴사'}
                      title={item.period.includes('현재') ? '재직 중' : '근무 종료'}
                    />
                  </span>
                </div>
                <p className="mt-3 text-sm md:text-[15px] text-ink-soft leading-[1.8]">
                  {item.desc}
                </p>
                {item.tags && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {item.tags.map((tag: string) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Summary Stats - 위젯 */}
      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { value: getYearsOfExperienceLabel(), label: '년 경력' },
          { value: '10+', label: '프로젝트' },
          { value: '5+', label: '협업 기업' },
          { value: '4', label: '운영 중 서비스' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-2xl border border-black/[0.06] shadow-widget p-6 min-h-[110px] flex flex-col justify-between"
          >
            <p className="text-3xl font-extrabold tracking-tight">{stat.value}</p>
            <p className="text-sm text-ink-soft font-medium mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Education - 리스트 윈도우 */}
      <div className="mt-16 max-w-3xl">
        <div className="mb-6">
          <p className="eyebrow mb-2">Education</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">교육 이수</h2>
        </div>
        <div className="mac-window">
          <div className="mac-titlebar">
            <span className="mac-dot bg-ios-red" />
            <span className="mac-dot bg-ios-yellow" />
            <span className="mac-dot bg-ios-green" />
            <span className="mac-title">education.list</span>
          </div>
          <ul className="divide-y divide-black/[0.05]">
            {educationData.map((item: EducationItem, idx: number) => (
              <li
                key={idx}
                className="px-5 md:px-6 py-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-5 hover:bg-paper/60 transition-colors"
              >
                <span className="shrink-0 text-tiny font-medium text-muted w-[130px]">
                  {item.period}
                </span>
                <span className="text-sm font-semibold text-ink whitespace-nowrap">
                  {item.school}
                </span>
                <span className="text-sm text-ink-soft">{item.major}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
