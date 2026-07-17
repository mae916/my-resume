import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '페이지를 찾을 수 없습니다',
  description: '요청하신 페이지를 찾을 수 없습니다.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-[60vh]"
      aria-labelledby="not-found-title"
    >
      {/* 시스템 다이얼로그 스타일 */}
      <div className="mac-window w-full max-w-sm">
        <div className="mac-titlebar">
          <span className="mac-dot bg-ios-red" />
          <span className="mac-dot bg-ios-yellow" />
          <span className="mac-dot bg-ios-green" />
          <span className="mac-title">오류</span>
        </div>
        <div className="p-8 text-center">
          <p className="text-5xl mb-4" aria-hidden="true">
            🗂
          </p>
          <h1 id="not-found-title" className="text-3xl font-extrabold mb-2">
            404
          </h1>
          <p className="text-sm text-ink-soft mb-7">
            찾을 수 없는 페이지입니다.
            <br />
            이동했거나 삭제되었을 수 있어요.
          </p>
          <Link href="/" className="btn btn-primary w-full">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </section>
  );
}
