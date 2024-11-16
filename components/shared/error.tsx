'use client';

import Link from 'next/link';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';

interface ErrorProps {
  reset?: () => void;
  error?: Error;
}

export function SharedError({ reset, error }: ErrorProps) {
  useEffect(() => {
    if (!error) console.error(error);
  }, [error]);

  return (
    <div className="flex h-fit w-full flex-col items-center">
      <h1 className="whitespace-nowrap text-center text-4xl font-bold">
        INTERNAL ERROR
      </h1>
      <p className="mb-4 text-2xl font-medium">WE’RE UPSET TOO</p>
      {reset ? <Button onClick={reset}>Please Try Again</Button> : null}
      <div className="mt-2">
        or{' '}
        <Link href="/" prefetch className="text-primary">
          Go back to home
        </Link>
      </div>
    </div>
  );
}
