import { type Metadata } from 'next';

import { MasonryLayout } from '@/app/gallery/_components';
import { seoGalleryPage } from '@/lib/config/seo';

export const metadata: Metadata = {
  title: seoGalleryPage.title,
  description: seoGalleryPage.description,

  openGraph: {
    title: seoGalleryPage.title,
    description: seoGalleryPage.description,
    images: ['hero1.jpg'],
  },

  twitter: {
    title: seoGalleryPage.title,
    description: seoGalleryPage.description,
    images: ['hero1.jpg'],
  },
};
export default function Page() {
  return <MasonryLayout />;
}
