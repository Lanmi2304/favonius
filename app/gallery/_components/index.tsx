'use client';

import Image from 'next/image';
import { useState } from 'react';

import { GalleryCarousel } from '@/app/gallery/_components/gallery-carousel';
import { Container } from '@/components/shared/wrappers/container';

const images = [
  { src: '/images/img4.jpg', alt: 'Description of Image 4' },
  { src: '/images/img3.jpg', alt: 'Description of Image 3' },
  { src: '/images/img6.jpg', alt: 'Description of Image 2' },
  { src: '/images/img1.jpg', alt: 'Description of Image 3' },
  // { src: '/images/img2.jpg', alt: 'Description of Image 2' },
  // { src: '/images/img1.jpg', alt: 'Description of Image 1' },
  // { src: '/images/img3.jpg', alt: 'Description of Image 3' },
  // { src: '/images/img2.jpg', alt: 'Description of Image 2' },
  { src: '/images/img5.jpg', alt: 'Description of Image 1' },
  // { src: '/images/img5.jpg', alt: 'Description of Image 1' },
  { src: '/images/smestaj2.jpg', alt: 'Description of Image 4' },
  { src: '/services/image1.jpg', alt: 'Description of Image 1' },
  { src: '/images/smestaj1.jpg', alt: 'Description of Image 2' },
  // { src: '/images/img2.jpg', alt: 'Description of Image 2' },
  { src: '/services/image3.jpg', alt: 'Description of Image 3' },
  { src: '/images/smestaj3.jpg', alt: 'Description of Image 3' },
  // { src: '/images/img5.jpg', alt: 'Description of Image 1' },
  // { src: '/images/img6.jpg', alt: 'Description of Image 2' },
  // { src: '/images/img4.jpg', alt: 'Description of Image 4' },
  // { src: '/images/img1.jpg', alt: 'Description of Image 3' },
  { src: '/images/img2.jpg', alt: 'Description of Image 2' },
];

export function MasonryLayout() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <>
      <Container className="relative top-[100px] flex flex-col">
        <h1 className="my-10 text-center text-6xl italic text-accent-foreground">
          Upoznajte naš Raj na Zemlji
        </h1>
        <div className="columns-2 gap-4 sm:columns-3 md:columns-4 lg:columns-5">
          {images.map((image, index) => (
            <div
              aria-hidden
              key={crypto.randomUUID()}
              onClick={() => {
                setFullScreen(true);
                setActiveImageIndex(index);
              }}
              className="mb-4 overflow-hidden rounded-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
              />
            </div>
          ))}
        </div>
      </Container>
      {fullScreen ? (
        <GalleryCarousel
          setFullScreen={setFullScreen}
          images={images}
          activeImageIndex={activeImageIndex}
        />
      ) : null}
    </>
  );
}
