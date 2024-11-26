import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeProvider from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
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
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Wrapped with main-content CSS. Check it in global.css */}
          <div className="body-content">{children}</div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
