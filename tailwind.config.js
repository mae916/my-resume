/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1d3557', // 메인 네이비
        secondary: '#f1f5f9', // 연한 배경용
        accent: '#fca311', // 강조 옐로우 오렌지
        muted: '#64748b', // 서브 텍스트 그레이
        mutedDark: '#222222', // 주 텍스트용 딥 그레이
        white: '#fff',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'zoom-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in-down': 'fade-in-down 0.6s ease-out forwards',
        'zoom-in': 'zoom-in 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
