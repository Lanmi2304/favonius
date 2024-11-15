'use client';

import { useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import CountUp from 'react-countup';

import { Container } from '@/components/shared/wrappers/container';
import { cn } from '@/lib/utils/cn';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <section className="relative z-0 flex h-96 items-center justify-center">
        <div
          className="absolute left-0 top-0 z-0 size-full bg-cover bg-fixed bg-center bg-no-repeat opacity-80"
          style={{
            backgroundImage: 'url(/hero5.jpg)',
          }}
        />
        <h1 className="z-10 text-center text-6xl font-bold italic text-accent-foreground">
          O nama
        </h1>
      </section>

      <div
        ref={ref}
        style={{
          transform: isInView ? 'none' : 'translateY(70px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        <Container className="my-10 flex flex-col md:h-fit md:flex-row">
          <div className="flex w-full items-center justify-center overflow-hidden rounded-lg md:w-1/2">
            <div className="relative size-[350px] lg:size-[500px]">
              <Image
                src="/hero1.jpg"
                alt="About"
                fill
                className="absolute inset-0 rounded-full object-cover"
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-4 px-10 md:mt-10 md:w-1/2">
            <h1 className="mt-10 text-center text-5xl font-bold italic text-accent-foreground">
              Nase prace raja
            </h1>
            <p className="text-pretty">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              laboriosam adipisci aliquam, dicta praesentium quos. Iure, unde
              aliquid! Repudiandae quidem totam placeat ipsam, ea itaque velit
              deserunt maiores dolore beatae. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Nobis laboriosam adipisci aliquam,
              dicta praesentium quos. Iure, unde aliquid! Repudiandae quidem
              totam placeat ipsam, ea itaque velit deserunt maiores dolore
              beatae.
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              laboriosam adipisci aliquam, dicta praesentium quos. Iure, unde
              aliquid! Repudiandae quidem totam placeat ipsam, ea itaque velit
              deserunt maiores dolore beatae. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Nobis laboriosam adipisci aliquam,
              dicta praesentium quos. Iure, unde aliquid! Repudiandae quidem
              totam placeat ipsam, ea itaque velit deserunt maiores dolore
              beatae.
            </p>

            <h3 className={cn('text-xl md:text-2xl')}>
              Nasa ergela broji{' '}
              <span className="text-3xl text-accent md:text-4xl">
                <CountUp
                  end={100}
                  enableScrollSpy
                  scrollSpyDelay={300}
                  scrollSpyOnce
                />
              </span>{' '}
              grla
            </h3>
          </div>
        </Container>
      </div>
    </>
  );
}
