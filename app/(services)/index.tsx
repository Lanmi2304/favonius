'use client';
import { Accommodation } from '@/app/(services)/accommodation';
import { Quad } from '@/app/(services)/quad';
import { Riding } from '@/app/(services)/riding';
import { RidingSchool } from '@/app/(services)/riding-school';
import { Container } from '@/components/shared/wrappers/container';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { SERVICES } from '@/lib/config/services';

export function Services() {
  const handleScrollToProduct = (id: string) => {
    const product = document.getElementById(id);
    if (product) product.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Container>
      <h1 className="mt-10 text-center text-5xl font-bold italic text-accent-foreground">
        Nase usluge
      </h1>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => (
          <Card
            key={crypto.randomUUID()}
            className="relative h-60 bg-accent/30 text-foreground shadow-card sm:h-80"
          >
            <CardHeader>
              <CardTitle className="text-center">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{service.description}</p>
            </CardContent>
            <CardFooter className="absolute bottom-0 flex w-full items-center justify-center">
              <Button
                className="w-full bg-accent-foreground/80 hover:bg-accent-foreground/70"
                onClick={() => handleScrollToProduct(service.id ?? '')}
              >
                Procitaj vise
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Riding />
      <Accommodation />
      <RidingSchool />
      <Quad />
    </Container>
  );
}
