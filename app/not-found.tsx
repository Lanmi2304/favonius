import Link from 'next/link';

import { Container } from '@/components/shared/wrappers/container';
import { Button } from '@/components/ui/button';
import { APP_DEFAULT_TITLE } from '@/lib/config/app.config';

export const runtime = 'edge';

export default function Custom404() {
  return (
    <Container className="h-screen items-center justify-center">
      <div className="mx-auto mt-44 flex h-fit w-full flex-col items-center justify-center lg:mt-64">
        <Link href="/" prefetch>
          <h1 className="text-center text-4xl text-accent-foreground">
            {APP_DEFAULT_TITLE}
          </h1>
        </Link>

        <h2 className="my-2 text-center text-2xl font-bold leading-none text-accent lg:text-5xl">
          PAGE NOT FOUND
        </h2>

        <Button asChild className="bg-accent-foreground/80">
          <Link href="/" prefetch>
            Take me back
          </Link>
        </Button>
      </div>
    </Container>
  );
}
