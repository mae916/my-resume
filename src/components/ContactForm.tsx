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
  );
}
