'use client';

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

const inputBase =
  'w-full px-4 py-3 text-sm text-ink bg-paper rounded-xl border focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent focus:bg-white transition-all placeholder:text-muted';

export default function ContactForm() {
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
      const response = await fetch('/api/contact', {
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
    <div className="mac-window">
      {/* 새 메시지 작성 윈도우 */}
      <div className="mac-titlebar">
        <span className="mac-dot bg-ios-red" />
        <span className="mac-dot bg-ios-yellow" />
        <span className="mac-dot bg-ios-green" />
        <span className="mac-title">새 메시지 — 받는 사람: 김혜진</span>
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-7">
        <div className="grid gap-5 md:grid-cols-2">
          {/* 이름 */}
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-semibold text-ink">
              이름 <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`${inputBase} ${
                errors.name ? 'border-ios-red' : 'border-black/[0.08]'
              }`}
              placeholder="홍길동"
            />
            {errors.name && (
              <p className="mt-2 text-xs text-ios-red">{errors.name}</p>
            )}
          </div>

          {/* 이메일 */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-semibold text-ink">
              이메일 <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`${inputBase} ${
                errors.email ? 'border-ios-red' : 'border-black/[0.08]'
              }`}
              placeholder="email@example.com"
            />
            {errors.email && (
              <p className="mt-2 text-xs text-ios-red">{errors.email}</p>
            )}
          </div>

          {/* 회사/소속 */}
          <div>
            <label htmlFor="company" className="block mb-2 text-sm font-semibold text-ink">
              회사/소속
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={`${inputBase} border-black/[0.08]`}
              placeholder="회사명 또는 소속"
            />
          </div>

          {/* 연락처 */}
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-semibold text-ink">
              연락처
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`${inputBase} border-black/[0.08]`}
              placeholder="010-1234-5678"
            />
          </div>

          {/* 문의 내용 */}
          <div className="md:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-semibold text-ink">
              문의 내용 <span className="text-accent">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`${inputBase} resize-none ${
                errors.message ? 'border-ios-red' : 'border-black/[0.08]'
              }`}
              placeholder="문의하실 내용을 자유롭게 작성해주세요."
            />
            {errors.message && (
              <p className="mt-2 text-xs text-ios-red">{errors.message}</p>
            )}
          </div>
        </div>

        {/* 상태 메시지 */}
        {submitStatus === 'success' && (
          <div className="flex items-center gap-3 p-4 mt-6 text-sm font-medium text-green-700 rounded-xl bg-ios-mint border border-green-600/20">
            <CheckCircle size={18} />
            문의가 전송되었습니다! 빠른 시일 내에 답변 드리겠습니다.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="flex items-center gap-3 p-4 mt-6 text-sm font-medium text-ios-red rounded-xl bg-ios-red/10 border border-ios-red/20">
            <AlertCircle size={18} />
            전송에 실패했습니다. 이메일로 직접 문의해주세요.
          </div>
        )}

        {/* 제출 버튼 */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center justify-center w-full gap-2 px-6 py-3.5 mt-6 font-semibold text-white transition-all rounded-full bg-accent hover:bg-accent-hover hover:scale-[1.01] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              전송 중...
            </>
          ) : (
            <>
              <Send size={17} />
              문의 보내기
            </>
          )}
        </button>
      </form>
    </div>
  );
}
