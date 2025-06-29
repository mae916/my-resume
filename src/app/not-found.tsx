export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-20">찾을 수 없는 페이지입니다.</h1>
      <a
        href="/"
        className="px-4 py-2 bg-[var(--pointcolor-navy)] text-white rounded hover:bg-[var(--pointcolor-yellow)]"
      >
        홈으로 돌아가기
      </a>
    </div>
  );
}
