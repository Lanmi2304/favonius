'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MobileMenu } from '@/components/shared/header/mobile-menu';
import { Container } from '@/components/shared/wrappers/container';
import { navLinks } from '@/lib/config/navigation';
import { cn } from '@/lib/utils/cn';

export function Header() {
  const pathname = usePathname();
  return (
    <>
      <header className="fixed top-0 z-20 hidden h-auto w-full md:flex">
        <Container className="mb-0 flex items-center justify-between rounded-b-md bg-background/50 py-2 backdrop-blur-sm">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={60} height={60} />
          </Link>
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={crypto.randomUUID()}
                href={link.href}
                className={cn(
                  'hover:underline',
                  pathname === link.href.pathname ? 'text-accent' : null,
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </header>

      {/* Mobile menu */}
      <div className="flex w-full items-start justify-center md:hidden">
        <header className="fixed top-0 z-20 w-[90%]">
          <Container className="mb-0 flex items-center justify-between rounded-b-md bg-muted py-2">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={60} height={60} />
            </Link>
            <MobileMenu />
          </Container>
        </header>
      </div>
    </>
  );
}
