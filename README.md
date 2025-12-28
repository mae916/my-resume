# Portfolio Website

프론트엔드 개발자 김혜진의 포트폴리오 웹사이트입니다.

**Live Site:** [portfolio.jinproject.xyz](https://portfolio.jinproject.xyz)

![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?logo=tailwindcss)

---

## Preview

| Home | Skills |
|:----:|:------:|
| ![Home](/public/images/project/profile.png) | 기술 스택 소개 |

---

## Features

- **반응형 디자인** - 모바일/태블릿/데스크톱 최적화
- **SEO 최적화** - OpenGraph, Twitter Cards, Sitemap 자동 생성
- **빠른 로딩** - Next.js Image 최적화 (AVIF/WebP)
- **접근성** - 시맨틱 HTML, ARIA 라벨
- **Docker 배포** - 멀티스테이지 빌드로 경량화

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| Styling | TailwindCSS 3.4 |
| Icons | Lucide React |
| Deployment | Docker, AWS EC2, Nginx |

---

## Project Structure

```
src/
├── app/                    # Pages (App Router)
│   ├── page.tsx            # Home
│   ├── career/             # 경력
│   ├── project/            # 프로젝트
│   ├── skills/             # 기술 스택
│   ├── qna/                # Q&A
│   └── contact/            # 연락처
│
├── components/             # UI 컴포넌트
│   ├── Navigation.tsx      # 네비게이션
│   └── FloatingBtn.tsx     # 모바일 플로팅 버튼
│
├── data/                   # 정적 데이터
│   ├── career.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── qna.ts
│
├── lib/                    # 유틸리티
├── types/                  # TypeScript 타입
└── styles/                 # 글로벌 스타일
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone
git clone https://github.com/mae916/my-resume.git
cd my-resume

# Install dependencies
npm install

# Run development server
npm run dev
```

http://localhost:3000 에서 확인

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm start` | 프로덕션 서버 (포트 9000) |
| `npm run lint` | ESLint 검사 |
| `npm run typecheck` | TypeScript 타입 검사 |

---

## Deployment

### Docker

```bash
# Build
docker build -t my-resume .

# Run
docker run -p 9000:9000 my-resume
```

### Docker Compose

```bash
docker-compose up -d
```

---

## Configuration

### 환경 변수

프로덕션 배포 시 필요한 설정:

| Variable | Description |
|----------|-------------|
| `NODE_ENV` | `production` |
| `PORT` | 서버 포트 (기본: 9000) |

### Tailwind 커스텀 컬러

```javascript
colors: {
  primary: '#1d3557',    // 네이비
  accent: '#fca311',     // 오렌지 (강조)
  secondary: '#f1f5f9',  // 밝은 배경
  muted: '#64748b'       // 서브텍스트
}
```

---

## Performance

- **Lighthouse Score:** 90+ (Performance, Accessibility, SEO)
- **이미지 최적화:** AVIF/WebP 자동 변환
- **코드 스플리팅:** 페이지별 자동 분리
- **캐싱:** 정적 에셋 1년 캐시

---

## License

MIT License

---

## Author

**김혜진 (HyeJin Kim)**

- GitHub: [@mae916](https://github.com/mae916)
- Email: ruchia916@gmail.com
