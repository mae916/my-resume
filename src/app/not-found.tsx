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
      <h1
        id="not-found-title"
        className="lg:text-4xl text-3xl font-bold mb-6 text-center text-primary"
      >
        404
      </h1>
      <p className="text-xl text-gray-600 mb-10 text-center">
        찾을 수 없는 페이지입니다.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white rounded-full hover:bg-accent transition-colors font-medium"
      >
        홈으로 돌아가기
      </Link>
    </section>
  );
}
