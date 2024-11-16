'use client';

import type Error from 'next/error';
import { useEffect } from 'react';

import { SharedError } from '@/components/shared/error';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(String(error));
  }, [error]);

  return (
    <html lang="en">
      <body>
        <SharedError reset={reset} />
      </body>
    </html>
  );
}
