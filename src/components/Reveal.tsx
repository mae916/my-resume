'use client';

import { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  /** 순차 등장을 위한 지연(ms) */
  delay?: number;
  /** fade: 페이드업 / pop: 스프링 팝 */
  variant?: 'fade' | 'pop';
  className?: string;
}

/** 뷰포트 진입 시 나타나는 래퍼 */
export default function Reveal({
  children,
  delay = 0,
  variant = 'fade',
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 감속 모션 선호 시 즉시 표시
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hidden =
    variant === 'pop' ? 'scale(0.88) translateY(14px)' : 'translateY(24px)';
  const easing =
    variant === 'pop'
      ? 'cubic-bezier(0.34, 1.56, 0.64, 1)' // 스프링 오버슈트
      : 'cubic-bezier(0.4, 0, 0.2, 1)';

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : hidden,
        transition: `opacity 0.5s ease ${delay}ms, transform 0.55s ${easing} ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
