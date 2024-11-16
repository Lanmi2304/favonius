import { type Metadata } from 'next';

import { Contact } from '@/app/contact/_components';
import { seoContactPage } from '@/lib/config/seo';

export const metadata: Metadata = {
  title: seoContactPage.title,
  description: seoContactPage.description,

  openGraph: {
    title: seoContactPage.title,
    description: seoContactPage.description,
    images: ['hero1.jpg'],
  },

  twitter: {
    title: seoContactPage.title,
    description: seoContactPage.description,
    images: ['hero1.jpg'],
  },
};
export default function Page() {
  return <Contact />;
}
