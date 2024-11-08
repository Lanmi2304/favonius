import Image from 'next/image';
import {
  type Dispatch,
  type SetStateAction,
  useCallback,
  useEffect,
} from 'react';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PiMultipleCrossCancelDefaultStroke } from '@/components/ui/icons/pi-cross-stroke';

export function GalleryCarousel({
  setFullScreen,
  images,
  activeImageIndex,
}: {
  setFullScreen: Dispatch<SetStateAction<boolean>>;
  images: { src: string; alt: string }[];
  activeImageIndex: number;
}) {
  const handleClose = useCallback(() => {
    setFullScreen(false);
  }, [setFullScreen]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const stopPropagation = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-20 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleClose}
    >
      <Button
        variant="ghost"
        className="absolute right-2 top-2 z-50 text-white hover:bg-transparent"
      >
        <PiMultipleCrossCancelDefaultStroke className="size-10" />
      </Button>
      <div className="relative mx-4 flex h-auto max-w-2xl items-center justify-center md:max-w-3xl">
        <Carousel
          className="w-full"
          opts={{
            startIndex: activeImageIndex,
            loop: true,
          }}
          onClick={stopPropagation}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem
                className="flex h-[90vh] items-center justify-center"
                key={crypto.randomUUID()}
              >
                <Image
                  className="rounded-lg"
                  src={image.src}
                  alt={image.alt}
                  width={880}
                  height={570}
                  priority={index === activeImageIndex}
                  sizes="(max-width: 768px) 100vw, 880px"
                  quality={85}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="absolute -left-12 focus:ring-2 focus:ring-white"
            aria-label="Previous image"
          />
          <CarouselNext
            className="absolute -right-12 focus:ring-2 focus:ring-white"
            aria-label="Next image"
          />
        </Carousel>
      </div>
    </div>
  );
}
