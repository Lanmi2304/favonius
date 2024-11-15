import { useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

import { Button } from '@/components/ui/button';

export function RidingSchool() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      ref={ref}
      id="skola_jahanja"
      className="flex w-full flex-col items-center justify-center gap-8 overflow-hidden py-16 md:flex-row md:gap-0"
    >
      <div
        className="flex w-full flex-col gap-6 px-4 md:w-2/3 md:pr-4"
        style={{
          transform: isInView ? 'translateX(0)' : 'translateX(-100%)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.27s',
        }}
      >
        <h2 className="text-4xl font-semibold italic text-accent-foreground">
          Skola jahanja
        </h2>

        <p>
          Uzivajte u jedinstvenom dozirvljaju terenskog jahanja kroz prelepie
          predele. Prepustite se uzbudljivom jahanju na otvorenom.
        </p>
        <p>
          Nasi obuceni instruktori ce vas voditi kroz idiličnu prirodu,
          dozvoljavajući vam da istražite i uživate u lepoti okoline. Ovo je
          savršena aktivnost za one koji žele da pobegnu od užurbanog gradskog
          života i iskuse mir i opuštenost otvorenih prostora.
        </p>
        <div className="flex w-full flex-col gap-4">
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
      <div
        className="relative flex h-[400px] w-full items-center justify-end overflow-hidden rounded-lg md:w-1/3"
        style={{
          transform: isInView ? 'translateX(0)' : 'translateX(100%)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.27s',
        }}
      >
        <Image
          src="/services/image3.jpg"
          alt="Riding"
          fill
          className="absolute inset-0 rounded-lg object-cover"
        />
      </div>
    </section>
  );
}
