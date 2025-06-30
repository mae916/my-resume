import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="lg:text-4xl text-3xl font-bold mb-20 text-center">
        찾을 수 없는 페이지입니다.
      </h1>
      <Link
        href="/"
        className="px-4 py-2 bg-primary text-white rounded hover:bg-accent"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
