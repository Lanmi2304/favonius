import type { Metadata } from 'next';
import { Merriweather } from 'next/font/google';

import './globals.css';

import { Toaster } from 'sonner';

import { Footer } from '@/components/shared/footer';
import { Header } from '@/components/shared/header';
import { TailwindIndicator } from '@/components/shared/tailwind-indicator';
import {
  APP_DEFAULT_TITLE,
  APP_DESCRIPTION,
  APP_NAME,
  APP_TITLE_TEMPLATE,
} from '@/lib/config/app.config';
import { getBaseUrl } from '@/lib/utils/get-base-url';

const merriweather = Merriweather({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-merriweather',
});

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  applicationName: APP_DEFAULT_TITLE,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  generator: APP_NAME,
  manifest: '/manifest.json',
  referrer: 'origin-when-cross-origin',
  authors: [
    {
      name: APP_NAME,
    },
  ],
  creator: APP_NAME,
  publisher: APP_NAME,
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: APP_DEFAULT_TITLE,
    startupImage: [
      '/ios/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png',
      {
        url: '/ios/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png',
        media: '(device-width: 390px) and (device-height: 844px)',
      },
      {
        url: '/ios/iPhone_14_Pro_portrait.png',
        media: '(device-width: 393px) and (device-height: 852px)',
      },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: ['hero1.jpg'],
    url: getBaseUrl(),
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: ['hero1.jpg'],
  },
};

export const dynamic = 'force-static';

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
