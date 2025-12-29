import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function FloatingBtn() {
  return (
    <Link
      href="/contact"
      className="fixed flex items-center justify-center w-14 h-14 rounded-full shadow-lg lg:hidden bottom-6 right-6 bg-accent text-white hover:bg-accent-hover active:scale-95 transition-all z-50 glow"
      aria-label="문의하기"
    >
      <Mail size={22} />
    </Link>
  );
}
