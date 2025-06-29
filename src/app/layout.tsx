import Navigation from '@/components/Navigation';
import '../styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang="en">
      <body className={inter.className}>
        <header className="flex items-center justify-center w-full my-8">
          <Navigation />
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
