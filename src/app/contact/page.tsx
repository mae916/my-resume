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
    <section className="section" aria-labelledby="contact-title">
      {/* Header */}
      <div className="mb-16">
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
          Get in Touch
        </p>
        <h1 id="contact-title" className="text-4xl lg:text-5xl font-bold text-light mb-4">
          Contact
        </h1>
        <p className="text-muted text-lg max-w-xl">
          채용 문의, 협업 제안, 프로젝트 의뢰 등 편하게 연락주세요.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* 연락처 정보 */}
        <div className="space-y-6">
          {/* Contact Info Card */}
          <div className="card">
            <h2 className="text-lg font-semibold text-light mb-6">연락처</h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:ruchia916@naver.com"
                  className="flex items-center gap-4 text-muted hover:text-light transition-colors group"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-dark-200 group-hover:bg-accent/20 transition-colors">
                    <Mail size={18} className="text-accent" />
                  </span>
                  <span className="text-sm">ruchia916@naver.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mae916"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted hover:text-light transition-colors group"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-dark-200 group-hover:bg-accent/20 transition-colors">
                    <Github size={18} className="text-accent" />
                  </span>
                  <span className="text-sm">github.com/mae916</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Response Info Card */}
          <div className="card">
            <h2 className="text-lg font-semibold text-light mb-6">응답 안내</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted">보통 1-2일 내로 회신드립니다</span>
              </li>
              <li className="flex items-start gap-3">
                <Users size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted">채용/협업 문의 환영합니다</span>
              </li>
              <li className="flex items-start gap-3">
                <Briefcase size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted">프로젝트 의뢰도 가능합니다</span>
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
