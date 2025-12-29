# my-resume 배포 가이드

## 개요

이 프로젝트는 GitHub Actions를 통해 EC2 서버에 자동으로 배포됩니다.

## 자동 배포 설정

### 1. GitHub Secrets 설정

GitHub 저장소 → Settings → Secrets and variables → Actions에서 다음 시크릿을 설정하세요:

| Secret 이름 | 설명 | 예시 |
|------------|------|------|
| `EC2_HOST` | EC2 퍼블릭 IP | `15.164.220.66` |
| `EC2_USER` | SSH 사용자명 | `ec2-user` |
| `EC2_SSH_KEY` | SSH 프라이빗 키 전체 내용 | `-----BEGIN RSA PRIVATE KEY-----...` |

### 2. SSH 키 등록 방법

```bash
# 로컬에서 SSH 키 내용 복사
cat ~/Documents/secure/my-aws-server-key.pem
```

복사한 내용을 `EC2_SSH_KEY` 시크릿에 붙여넣으세요.

### 3. 배포 트리거

- **자동 배포**: `main` 브랜치에 push될 때 자동으로 실행됩니다.
- **수동 배포**: GitHub Actions 탭에서 "Run workflow" 버튼을 클릭하세요.

## 배포 워크플로우

```
1. Lint & Type Check
   ↓
2. Build Test
   ↓
3. Deploy to EC2
   ↓
4. Health Check
```

## 수동 배포 (EC2 직접 접속)

```bash
# 1. SSH 접속
ssh -i ~/Documents/secure/my-aws-server-key.pem ec2-user@15.164.220.66

# 2. 프로젝트 디렉토리 이동
cd /home/ec2-user/myProject

# 3. 최신 코드 가져오기
git pull origin main

# 4. my-resume만 재빌드
docker-compose stop my-resume
docker-compose rm -f my-resume
docker-compose build --no-cache my-resume
docker-compose up -d my-resume

# 5. 상태 확인
docker ps | grep my-resume
docker-compose logs -f my-resume
```

## 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드 테스트
npm run build

# 프로덕션 실행
npm start
```

## 포트 정보

| 환경 | 포트 | URL |
|-----|------|-----|
| 로컬 개발 | 3000 | http://localhost:3000 |
| 프로덕션 | 9000 (내부) → 8004 (외부) | https://profile.jinproject.xyz |

## 트러블슈팅

### 빌드 실패 시

```bash
# 캐시 삭제 후 재빌드
rm -rf .next node_modules
npm install
npm run build
```

### Docker 이미지 정리

```bash
# 사용하지 않는 이미지 삭제
docker image prune -f

# 모든 미사용 리소스 정리
docker system prune -f
```

### 로그 확인

```bash
# 컨테이너 로그
docker-compose logs -f my-resume

# 최근 100줄만
docker-compose logs --tail=100 my-resume
```

## 개선된 기능 목록 (v0.2.0)

- 타입 정의 및 데이터 파일 분리 (`src/types/`, `src/data/`)
- Next.js standalone 출력으로 Docker 이미지 최적화
- SEO 메타데이터 개선 (Open Graph, Twitter Cards, robots.txt, sitemap)
- 접근성(a11y) 개선 (aria-label, semantic HTML)
- 보안 헤더 추가 (X-Content-Type-Options, X-Frame-Options)
- GitHub Actions CI/CD 파이프라인
