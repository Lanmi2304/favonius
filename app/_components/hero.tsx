import Image from 'next/image';

import { Container } from '@/components/shared/wrappers/container';

export function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center">
      <Image
        src="/hero1.jpg"
        alt="Hero"
        fill
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute mx-auto max-w-5xl">
        <Container>
          <h1 className="text-center text-6xl font-semibold text-background [text-shadow:_0_4px_0_rgb(0_0_0_/_50%)]">
            Dobrodosli na <br />
            <span className="text-7xl italic text-accent-foreground">
              Favonius
            </span>{' '}
            ranc
          </h1>
        </Container>
      </div>
    </section>
  );
}
