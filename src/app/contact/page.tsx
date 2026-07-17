import type { Metadata } from 'next';
import { Mail, Github, Clock, Users, Briefcase } from 'lucide-react';
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
    <section className="section !pt-10 lg:!pt-14" aria-labelledby="contact-title">
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
        {/* 연락처 정보 */}
        <div className="space-y-6">
          {/* Contact Info Card */}
          <div className="card">
            <h2 className="text-base font-bold text-ink mb-5">연락처</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:ruchia916@naver.com"
                  className="flex items-center gap-3.5 text-ink-soft hover:text-accent transition-colors group"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-[12px] bg-ios-sky border border-black/[0.05] group-hover:scale-105 transition-transform">
                    <Mail size={17} className="text-accent" />
                  </span>
                  <span className="text-sm font-medium">ruchia916@naver.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mae916"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 text-ink-soft hover:text-accent transition-colors group"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-[12px] bg-paper-100 border border-black/[0.05] group-hover:scale-105 transition-transform">
                    <Github size={17} className="text-ink" />
                  </span>
                  <span className="text-sm font-medium">github.com/mae916</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Response Info Card */}
          <div className="card">
            <h2 className="text-base font-bold text-ink mb-5">응답 안내</h2>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-ink-soft">보통 1-2일 내로 회신드립니다</span>
              </li>
              <li className="flex items-start gap-3">
                <Users size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-ink-soft">채용/협업 문의 환영합니다</span>
              </li>
              <li className="flex items-start gap-3">
                <Briefcase size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-ink-soft">프로젝트 의뢰도 가능합니다</span>
              </li>
            </ul>
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
