import type { Metadata } from 'next';
import { Merriweather } from 'next/font/google';

import './globals.css';

import { Toaster } from 'sonner';

import { Footer } from '@/components/shared/footer';
import { Header } from '@/components/shared/header';
import { TailwindIndicator } from '@/components/shared/tailwind-indicator';

const merriweather = Merriweather({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-merriweather',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} antialiased`}>
        <TailwindIndicator />
        <Toaster position="top-center" />
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
