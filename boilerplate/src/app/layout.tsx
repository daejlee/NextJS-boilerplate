import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Boilerplate',
  description: 'Boilerplate for Next.js with Tailwind CSS and TypeScript',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* Wrapped with main-content CSS. Check it in global.css */}
        <div className='main-content'>{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
