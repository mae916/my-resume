'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

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
    <section className="py-20 text-[var(--foreground)]" aria-labelledby="contact-title">
      <h2 id="contact-title" className="mb-4 text-2xl font-bold text-center">
        <span className="text-gray-800">Contact</span>
      </h2>
      <p className="mb-10 text-center text-muted">
        채용 문의, 협업 제안, 프로젝트 의뢰 등 편하게 연락주세요.
      </p>

      <div className="grid gap-8 mx-auto lg:grid-cols-3">
        {/* 연락처 정보 */}
        <div className="space-y-4">
          <div className="p-5 bg-white shadow rounded-xl">
            <h3 className="mb-4 text-lg font-semibold text-primary">연락처</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:ruchia916@naver.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  ruchia916@naver.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mae916"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </span>
                  github.com/mae916
                </a>
              </li>
            </ul>
          </div>

          <div className="p-5 bg-white shadow rounded-xl">
            <h3 className="mb-3 text-lg font-semibold text-primary">응답 안내</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                보통 1-2일 내로 회신드립니다
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                채용/협업 문의 환영합니다
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent">•</span>
                프로젝트 의뢰도 가능합니다
              </li>
            </ul>
          </div>
        </div>

        {/* 문의 폼 */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="p-5 bg-white shadow rounded-xl">
            <div className="grid gap-5 md:grid-cols-2">
              {/* 이름 */}
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                  이름 <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 text-sm border rounded-lg bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                    errors.name ? 'border-red-400' : 'border-transparent'
                  }`}
                  placeholder="홍길동"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              {/* 이메일 */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                  이메일 <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 text-sm border rounded-lg bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                    errors.email ? 'border-red-400' : 'border-transparent'
                  }`}
                  placeholder="email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              {/* 회사/소속 */}
              <div>
                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-700">
                  회사/소속
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm border border-transparent rounded-lg bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="회사명 또는 소속"
                />
              </div>

              {/* 연락처 */}
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                  연락처
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm border border-transparent rounded-lg bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="010-1234-5678"
                />
              </div>

              {/* 문의 내용 */}
              <div className="md:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                  문의 내용 <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 text-sm border rounded-lg bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none ${
                    errors.message ? 'border-red-400' : 'border-transparent'
                  }`}
                  placeholder="문의하실 내용을 자유롭게 작성해주세요."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>
            </div>

            {/* 상태 메시지 */}
            {submitStatus === 'success' && (
              <div className="flex items-center gap-2 p-3 mt-5 text-sm text-green-700 rounded-lg bg-green-50">
                <CheckCircle className="w-4 h-4" />
                문의가 전송되었습니다! 빠른 시일 내에 답변 드리겠습니다.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="flex items-center gap-2 p-3 mt-5 text-sm text-red-700 rounded-lg bg-red-50">
                <AlertCircle className="w-4 h-4" />
                전송에 실패했습니다. 이메일로 직접 문의해주세요.
              </div>
            )}

            {/* 제출 버튼 */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center w-full gap-2 px-6 py-3 mt-5 font-medium text-white transition-colors rounded-full bg-primary hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  전송 중...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
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
