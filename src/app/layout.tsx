import Navigation from '@/components/Navigation';
import '../styles/globals.css';
import FloatingBtn from '@/components/FloatingBtn';

export const metadata = {
  title: 'My App',
  description: 'Next + Tailwind + ReactQuery project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div className="lg:w-[60%] w-[95%] mx-auto">
          <Navigation />
          {children}
          <FloatingBtn />
          <footer></footer>
        </div>
      </body>
    </html>
  );
}
