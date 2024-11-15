'use client';

import { useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function Accommodation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      ref={ref}
      id="smestaj"
      className="flex w-full flex-col-reverse items-center justify-center gap-8 overflow-hidden py-10 md:flex-row md:gap-0"
      style={{
        transform: isInView ? 'none' : 'translateY(70px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      <div className="mt-10 flex size-full w-full flex-col items-center justify-center md:w-1/3">
        <Carousel opts={{ loop: true }} className="size-full pr-4">
          <CarouselContent className="h-[450px]">
            <CarouselItem className="relative flex size-full items-center justify-center">
              <Image src="/images/smestaj1.jpg" alt="smestaj" fill />
            </CarouselItem>
            <CarouselItem className="relative size-full">
              <Image src="/images/smestaj2.jpg" alt="smestaj" fill />
            </CarouselItem>
            <CarouselItem className="relative size-full">
              <Image src="/images/smestaj3.jpg" alt="smestaj" fill />
            </CarouselItem>
            <CarouselItem className="relative size-full">
              <Image src="/images/smestaj4.jpg" alt="smestaj" fill />
            </CarouselItem>
          </CarouselContent>
          <div className="relative mt-2 flex w-full flex-col items-center justify-center">
            <div className="flex w-fit items-center justify-center gap-4 rounded-full border bg-card/70 px-3 py-1.5 text-muted-foreground backdrop-blur-md">
              <CarouselPrevious className="relative left-0 top-4 border-none bg-transparent text-muted-foreground hover:bg-transparent hover:text-foreground" />
              <CarouselNext className="relative right-0 top-4 border-none bg-transparent text-muted-foreground hover:bg-transparent hover:text-foreground" />
            </div>
          </div>
        </Carousel>
      </div>
      <div className="flex w-full flex-col justify-start gap-6 px-4 md:w-2/3">
        <h2 className="text-4xl font-semibold italic text-accent-foreground">
          Smestaj
        </h2>
        <p>
          Prepustite se opuštanju u našem prekrasnom seoskom ambijentu, daleko
          od buke i užurbanosti svakodnevnog života. Naš rančerski smeštaj
          savršeno je utočište za one koji žele da se povuku u prirodu i uživaju
          u tišini i miru.
        </p>

        <p>
          Provedite vreme u miru i spokoju, uživajući u domaćoj, organskoj hrani
          sa našeg imanja. Opustite se u toplini naših soba, ukrašenih rustičnim
          detalјima koji odišu autentičnošću seoskog ambijenta.
        </p>

        <p>
          Rezervišite svoj boravak na našem ranču i priuštite sebi zasluženi
          odmor u zagrljaju prirode. Ovde ćete pronaći ravnotežu uma i tela,
          napuniti baterije i vratiti se osveženi i ispunjeni.
        </p>
        <div className="mt-10 flex w-full flex-col gap-4">
          <h5 className="text-xl font-semibold text-accent">
            Za vise informacija kontaktirajte nas putem
          </h5>
          <div className="flex w-full gap-4">
            <Button className="bg-accent-foreground/80 text-white hover:bg-accent-foreground/70">
              Putem E-mail adrese
            </Button>
            <Button className="bg-accent-foreground/80 text-white hover:bg-accent-foreground/70">
              Telefona
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
