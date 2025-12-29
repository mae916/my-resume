import type { Metadata } from 'next';
import { qnaList } from '@/data/qna';
import { MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Q & A',
  description:
    '프론트엔드 개발자 김혜진에 대해 자주 묻는 질문들입니다. 실무 경험, 협업 방식, 개발 철학 등을 확인해보세요.',
};

export default function QNA() {
  return (
    <section className="section" aria-labelledby="qna-title">
      {/* Header */}
      <div className="mb-16">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
          Interview
        </p>
        <h1 id="qna-title" className="text-4xl lg:text-5xl font-bold text-light mb-4">
          Q & A
        </h1>
        <p className="text-muted text-lg max-w-xl">
          자주 묻는 질문과 답변을 통해 저를 더 알아가세요.
        </p>
      </div>

      {/* Q&A List */}
      <dl className="space-y-6 max-w-3xl mx-auto">
        {qnaList.map((q, idx) => (
          <div
            key={idx}
            className="card group hover:border-accent/30 animate-fade-up"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* Question */}
            <dt className="flex items-start gap-3 mb-4">
              <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 text-accent font-bold text-sm">
                Q
              </span>
              <span className="text-lg font-semibold text-light pt-1">
                {q.question}
              </span>
            </dt>

            {/* Answer */}
            <dd className="pl-11">
              <p className="text-accent font-medium mb-3">
                "{q.highlight}"
              </p>
              <p className="text-muted leading-relaxed">
                {q.answer}
              </p>
            </dd>
          </div>
        ))}
      </dl>

      {/* Contact CTA */}
      <div className="mt-16 text-center">
        <p className="text-muted mb-4">더 궁금한 점이 있으신가요?</p>
        <a href="/contact" className="btn btn-primary">
          <MessageCircle size={18} />
          <span>문의하기</span>
        </a>
      </div>
    </section>
  );
}
