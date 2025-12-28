# ========================================
# 1단계: 의존성 설치
# ========================================
FROM node:18-alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

# package.json과 lock 파일만 먼저 복사하여 캐시 활용
COPY package.json package-lock.json ./

RUN npm ci --only=production=false

# ========================================
# 2단계: 빌드
# ========================================
FROM node:18-alpine AS builder

WORKDIR /app

# 의존성 복사
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 환경변수 설정
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# 빌드 실행
RUN npm run build

# ========================================
# 3단계: 프로덕션 실행
# ========================================
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# 보안을 위해 non-root 사용자 생성
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# public 폴더 복사
COPY --from=builder /app/public ./public

# standalone 출력물 복사 (권한 설정 포함)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# non-root 사용자로 전환
USER nextjs

EXPOSE 9000

ENV PORT=9000
ENV HOSTNAME="0.0.0.0"

# Next.js standalone 서버 실행
CMD ["node", "server.js"]
