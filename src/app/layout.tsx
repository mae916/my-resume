import Navigation from '@/components/Navigation';
import '../styles/globals.css';
import FloatingBtn from '@/components/FloatingBtn';

export const metadata = {
  title: "Hyejin's resume",
  description: '프론트엔드 개발자 김혜진의 포트폴리오 사이트 입니다.',
  icons: {
    icon: '/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div className="lg:w-[60%] w-[95%] mx-auto mb-5 lg:mb-0">
          <Navigation />
          {children}
          <FloatingBtn />
          <footer></footer>
        </div>
      </body>
    </html>
  );
}
