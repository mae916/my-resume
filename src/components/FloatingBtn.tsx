import Link from 'next/link';

export default function FloatingBtn() {
  return (
    <Link
      href="/contact"
      className="fixed flex items-center justify-center w-20 h-20 font-semibold text-center rounded-full shadow-lg lg:hidden bottom-3 right-3 bg-accent text-primary transition-transform hover:scale-110"
      aria-label="문의하기"
    >
      Contact
      <br />
      Me
    </Link>
  );
}
