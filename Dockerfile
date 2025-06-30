# 1단계: 의존성 설치 + 빌드
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm cache clean --force && npm install --verbose

COPY . .

# 빌드 (lint, typescript 검사 제외)

RUN npm run build --no-lint --no-typescript

# 2단계: 실행 환경
FROM node:18-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app ./

ENV NODE_ENV=production

EXPOSE 9000

CMD ["npm", "start"]
