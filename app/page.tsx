import { Services } from '@/app/(services)';
import { AboutSection } from '@/app/_components/about';
import { Hero } from '@/app/_components/hero';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Services />
    </>
  );
}
