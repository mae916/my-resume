/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // iOS core 팔레트 - Apple 시스템 톤
        paper: {
          DEFAULT: '#F5F5F7', // Apple silver 배경
          100: '#E8E8ED',     // 보조 배경 (인풋/호버)
          200: '#D2D2D7',     // 더 깊은 톤
        },
        ink: {
          DEFAULT: '#1D1D1F', // Apple 본문 블랙
          soft: '#494949',
        },
        line: '#D2D2D7',      // 헤어라인
        accent: {
          DEFAULT: '#007AFF', // iOS 시스템 블루
          hover: '#0062CC',
        },
        muted: '#86868B',     // Apple 세컨더리 그레이
        // 시스템 컬러 (장식용)
        ios: {
          red: '#FF3B30',
          yellow: '#FFCC00',
          green: '#34C759',
          mint: '#D8F1E4',
          lavender: '#E5E1FA',
          sky: '#DCEDFF',
        },
        dark: {
          DEFAULT: '#1D1D1F',
          100: '#2C2C2E',
          200: '#3A3A3C',
          300: '#48484A',
        },
        light: {
          DEFAULT: '#F5F5F7',
          100: '#E8E8ED',
          200: '#D2D2D7',
        },
      },
      fontFamily: {
        // SF Pro 우선 + Pretendard (SF와 짝 맞는 한글 서체)
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Pretendard Variable',
          'Pretendard',
          'system-ui',
          'sans-serif',
        ],
        display: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Pretendard Variable',
          'Pretendard',
          'system-ui',
          'sans-serif',
        ],
        mono: ['SF Mono', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'heading-1': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '700' }],
        'heading-2': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        'heading-3': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'small': ['0.875rem', { lineHeight: '1.6' }],
        'tiny': ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      boxShadow: {
        // Apple 스타일 소프트 섀도
        'window': '0 20px 40px -12px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04)',
        'widget': '0 1px 2px rgba(0, 0, 0, 0.04), 0 8px 24px -8px rgba(0, 0, 0, 0.08)',
        'chip': '0 1px 2px rgba(0, 0, 0, 0.06)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'line-grow': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'slide-in': 'slide-in 0.5s ease-out forwards',
        'scale-in': 'scale-in 0.4s ease-out forwards',
        'line-grow': 'line-grow 0.8s ease-out forwards',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
