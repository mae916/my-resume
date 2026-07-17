import type { Metadata } from 'next';
import {
  Mail,
  Github,
  Clock,
  Briefcase,
  ChevronRight,
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: '문의하기',
  description:
    '프론트엔드 개발자 김혜진에게 채용, 협업, 프로젝트 의뢰 문의를 보내보세요. 프론트엔드 개발자 채용 문의 환영합니다.',
  openGraph: {
    title: '문의하기 | 프론트엔드 개발자 김혜진',
    description: '프론트엔드 개발자 채용 문의, 협업 제안, 프로젝트 의뢰 등 편하게 연락주세요.',
  },
};

export default function ContactPage() {
  return (
    <section className="section !pt-10 lg:!pt-14 relative" aria-labelledby="contact-title">
      {/* 키노트풍 배경 블롭 */}
      <div
        className="blob -top-16 -left-36 w-[360px] h-[360px] bg-gradient-to-br from-[#DDEBFF] to-[#FFE3EC]"
        aria-hidden="true"
      />

      {/* Header */}
      <header className="mb-12">
        <p className="eyebrow mb-3">Get in Touch</p>
        <h1
          id="contact-title"
          className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
        >
          Contact<span className="text-accent">.</span>
        </h1>
        <p className="text-ink-soft text-lg max-w-xl">
          채용 문의, 협업 제안, 프로젝트 의뢰 등 편하게 연락주세요.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* 연락처 - iOS 설정 스타일 그룹 리스트 */}
        <div className="space-y-6">
          <div>
            <p className="text-tiny font-semibold text-muted uppercase tracking-[0.1em] px-4 mb-2">
              연락처
            </p>
            <div className="ios-list">
              <a href="mailto:ruchia916@naver.com" className="ios-list-row">
                <span className="ios-icon bg-accent">
                  <Mail size={16} />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-sm font-medium text-ink">이메일</span>
                  <span className="block text-tiny text-muted truncate">
                    ruchia916@naver.com
                  </span>
                </span>
                <ChevronRight size={15} className="text-paper-200 shrink-0" />
              </a>
              <a
                href="https://github.com/mae916"
                target="_blank"
                rel="noopener noreferrer"
                className="ios-list-row"
              >
                <span className="ios-icon bg-ink">
                  <Github size={16} />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-sm font-medium text-ink">GitHub</span>
                  <span className="block text-tiny text-muted truncate">
                    github.com/mae916
                  </span>
                </span>
                <ChevronRight size={15} className="text-paper-200 shrink-0" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-tiny font-semibold text-muted uppercase tracking-[0.1em] px-4 mb-2">
              응답 안내
            </p>
            <div className="ios-list">
              <div className="ios-list-row">
                <span className="ios-icon bg-ios-green">
                  <Clock size={16} />
                </span>
                <span className="text-sm text-ink">보통 1–2일 내로 회신드립니다</span>
              </div>
              <div className="ios-list-row">
                <span className="ios-icon bg-[#FF9500]">
                  <Briefcase size={16} />
                </span>
                <span className="text-sm text-ink">
                  채용 · 협업 · 프로젝트 의뢰 환영
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 문의 폼 */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
