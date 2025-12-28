export default function FloatingBtn() {
  return (
    <a
      href="mailto:ruchia916@naver.com"
      className="fixed flex items-center justify-center w-20 h-20 font-semibold text-center rounded-full shadow-lg lg:hidden bottom-3 right-3 bg-accent text-primary transition-transform hover:scale-110"
      aria-label="이메일로 연락하기"
    >
      Contact
      <br />
      Me
    </a>
  );
}
