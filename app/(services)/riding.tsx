import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';

export function Riding() {
  return (
    <section className="mt-10 flex w-full flex-col items-center justify-center gap-8 py-16 md:flex-row md:gap-0">
      <div className="flex w-full flex-col gap-6 px-4 md:w-2/3">
        <h2 className="text-4xl font-semibold italic text-accent-foreground">
          Terensko Jahanje
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
      <div className="relative flex w-full items-center justify-end md:w-1/3">
        <Image
          src="/services/image1.jpg"
          alt="Riding"
          width={420}
          height={350}
          className="rounded-lg"
        />
      </div>
    </section>
  );
}
