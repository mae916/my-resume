import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { qnaList } from '@/data/qna';
import Reveal from '@/components/Reveal';
import profileImg from '@/../public/images/profile.jpg';
import { ArrowRight, Video, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Q&A 인터뷰',
  description:
    '풀스택 개발자 김혜진에 대해 자주 묻는 질문들입니다. 프론트엔드 개발자의 실무 경험, 협업 방식, 개발 철학을 확인해보세요.',
  openGraph: {
    title: 'Q&A 인터뷰 | 풀스택 개발자 김혜진',
    description: '풀스택 개발자 김혜진의 실무 경험, 협업 방식, 개발 철학 Q&A',
  },
};

export default function QNA() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qnaList.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };

  return (
    <section className="section !pt-10 lg:!pt-14 relative" aria-labelledby="qna-title">
      {/* 키노트풍 배경 블롭 */}
      <div
        className="blob -top-16 -left-36 w-[360px] h-[360px] bg-gradient-to-br from-[#FFE3EC] to-[#DDEBFF]"
        aria-hidden="true"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Header */}
      <header className="mb-12">
        <p className="eyebrow mb-3">Interview</p>
        <h1
          id="qna-title"
          className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
        >
          Q &amp; A<span className="text-accent">.</span>
        </h1>
        <p className="text-ink-soft text-lg max-w-xl">
          자주 묻는 질문과 답변을 통해 저를 더 알아가세요.
        </p>
      </header>

      {/* iMessage 대화 윈도우 */}
      <div className="mac-window max-w-3xl mx-auto">
        <div className="mac-titlebar">
          <span className="mac-dot bg-ios-red" />
          <span className="mac-dot bg-ios-yellow" />
          <span className="mac-dot bg-ios-green" />
          <span className="mac-title">메시지</span>
        </div>

        {/* iMessage 연락처 헤더 */}
        <div className="flex items-center justify-between px-5 md:px-6 py-3.5 border-b border-black/[0.06] bg-paper/50">
          <div className="flex items-center gap-3">
            <Image
              src={profileImg}
              alt=""
              aria-hidden="true"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover object-top border border-black/[0.06]"
            />
            <div>
              <p className="text-sm font-semibold leading-tight">김혜진</p>
              <p className="text-tiny text-muted">Full-stack Developer</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-accent" aria-hidden="true">
            <Video size={19} />
            <Phone size={17} />
          </div>
        </div>

        <dl className="p-5 md:p-8 space-y-9">
          {qnaList.map((q, idx) => (
            <Reveal key={idx} variant="pop">
            <div className="space-y-3">
              {/* 구분 라벨 */}
              <p className="text-center text-tiny font-medium text-muted">
                Q{idx + 1}
              </p>

              {/* Question - 수신 버블 (회색, 왼쪽) */}
              <dt className="flex justify-start">
                <span className="max-w-[85%] md:max-w-[75%] bg-paper-100 text-ink rounded-3xl rounded-bl-lg px-5 py-3 text-[15px] font-medium leading-relaxed">
                  {q.question}
                </span>
              </dt>

              {/* Answer - 발신 버블 (블루, 오른쪽) */}
              <dd className="flex flex-col items-end gap-2">
                <span className="max-w-[85%] md:max-w-[75%] bg-accent text-white rounded-3xl rounded-br-lg px-5 py-3 text-[15px] font-semibold leading-relaxed">
                  {q.highlight}
                </span>
                <span className="max-w-[85%] md:max-w-[75%] bg-accent/90 text-white rounded-3xl rounded-br-lg px-5 py-3.5 text-sm leading-[1.75]">
                  {q.answer}
                </span>
                <span className="text-tiny text-muted pr-1">읽음</span>
              </dd>
            </div>
            </Reveal>
          ))}

          {/* 타이핑 인디케이터 */}
          <div className="space-y-3">
            <p className="text-center text-tiny font-medium text-muted">
              다음 질문은?
            </p>
            <div className="flex justify-start">
              <span
                className="bg-paper-100 rounded-3xl rounded-bl-lg px-5 py-3.5 inline-flex items-center gap-1.5"
                aria-label="입력 중"
              >
                <span className="w-2 h-2 rounded-full bg-muted/60 animate-bounce [animation-delay:0ms]" />
                <span className="w-2 h-2 rounded-full bg-muted/60 animate-bounce [animation-delay:150ms]" />
                <span className="w-2 h-2 rounded-full bg-muted/60 animate-bounce [animation-delay:300ms]" />
              </span>
            </div>
          </div>
        </dl>

        {/* 메시지 입력바 (문의로 연결) */}
        <div className="border-t border-black/[0.06] p-4">
          <Link
            href="/contact"
            className="flex items-center gap-3 group"
            aria-label="문의 페이지로 이동"
          >
            <span className="flex-1 flex items-center px-4 py-2.5 rounded-full bg-paper border border-black/[0.06] text-sm text-muted group-hover:border-accent/40 transition-colors">
              궁금한 점을 직접 물어보세요...
            </span>
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-accent text-white group-hover:bg-accent-hover group-hover:scale-105 transition-all">
              <ArrowRight size={16} className="-rotate-90" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
