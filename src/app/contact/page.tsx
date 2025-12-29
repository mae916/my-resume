'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Mail, Github, Clock, Users, Briefcase } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요';
    }

    if (!formData.email.trim()) {
      newErrors.email = '이메일을 입력해주세요';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다';
    }

    if (!formData.message.trim()) {
      newErrors.message = '문의 내용을 입력해주세요';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://pium.jinproject.xyz/api/email/portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', phone: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

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
          <form onSubmit={handleSubmit} className="card">
            <h2 className="text-lg font-semibold text-light mb-6">문의하기</h2>

            <div className="grid gap-5 md:grid-cols-2">
              {/* 이름 */}
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-light">
                  이름 <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 text-sm text-light bg-dark-200 border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all placeholder:text-muted ${
                    errors.name ? 'border-red-500' : 'border-dark-300'
                  }`}
                  placeholder="홍길동"
                />
                {errors.name && (
                  <p className="mt-2 text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              {/* 이메일 */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-light">
                  이메일 <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 text-sm text-light bg-dark-200 border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all placeholder:text-muted ${
                    errors.email ? 'border-red-500' : 'border-dark-300'
                  }`}
                  placeholder="email@example.com"
                />
                {errors.email && (
                  <p className="mt-2 text-xs text-red-400">{errors.email}</p>
                )}
              </div>

              {/* 회사/소속 */}
              <div>
                <label htmlFor="company" className="block mb-2 text-sm font-medium text-light">
                  회사/소속
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm text-light bg-dark-200 border border-dark-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all placeholder:text-muted"
                  placeholder="회사명 또는 소속"
                />
              </div>

              {/* 연락처 */}
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-light">
                  연락처
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm text-light bg-dark-200 border border-dark-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all placeholder:text-muted"
                  placeholder="010-1234-5678"
                />
              </div>

              {/* 문의 내용 */}
              <div className="md:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-light">
                  문의 내용 <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 text-sm text-light bg-dark-200 border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none placeholder:text-muted ${
                    errors.message ? 'border-red-500' : 'border-dark-300'
                  }`}
                  placeholder="문의하실 내용을 자유롭게 작성해주세요."
                />
                {errors.message && (
                  <p className="mt-2 text-xs text-red-400">{errors.message}</p>
                )}
              </div>
            </div>

            {/* 상태 메시지 */}
            {submitStatus === 'success' && (
              <div className="flex items-center gap-3 p-4 mt-6 text-sm text-green-400 rounded-xl bg-green-500/10 border border-green-500/20">
                <CheckCircle size={18} />
                문의가 전송되었습니다! 빠른 시일 내에 답변 드리겠습니다.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="flex items-center gap-3 p-4 mt-6 text-sm text-red-400 rounded-xl bg-red-500/10 border border-red-500/20">
                <AlertCircle size={18} />
                전송에 실패했습니다. 이메일로 직접 문의해주세요.
              </div>
            )}

            {/* 제출 버튼 */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center w-full gap-2 px-6 py-4 mt-6 font-medium text-white transition-all rounded-xl bg-accent hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  전송 중...
                </>
              ) : (
                <>
                  <Send size={18} />
                  문의 보내기
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
