import type { Metadata } from 'next';
import { qnaList } from '@/data/qna';

export const metadata: Metadata = {
  title: 'Q & A',
  description:
    '프론트엔드 개발자 김혜진에 대해 자주 묻는 질문들입니다. 실무 경험, 협업 방식, 개발 철학 등을 확인해보세요.',
};

export default function QNA() {
  return (
    <section className="py-20 text-[var(--foreground)]" aria-labelledby="qna-title">
      <h2 id="qna-title" className="mb-10 text-2xl font-bold text-center">
        <span className="text-gray-800">Q & A</span>
      </h2>
      <dl className="mx-auto space-y-8">
        {qnaList.map((q, idx) => (
          <div key={idx} className="space-y-2">
            <dt className="px-1 py-3 text-lg underline rounded-xl underline-offset-4">
              <strong className="text-primary">Q. </strong>
              {q.question}
            </dt>
            <dd className="px-4 py-4 text-gray-800 bg-white shadow rounded-xl">
              <p className="mb-2 font-semibold text-accent">{q.highlight}</p>
              <p className="leading-relaxed">{q.answer}</p>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
