import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/shared/wrappers/container';
import { navLinks } from '@/lib/config/navigation';

export function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="w-full bg-white">
      <Container className="mb-0">
        <div className="w-full p-4 md:py-8">
          <div className="flex-col items-center justify-center sm:flex sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/"
              className="sm: mb-4 flex items-center justify-center space-x-3 sm:mb-0 sm:justify-start"
            >
              <Image
                src="/logo.png"
                width={70}
                height={70}
                alt="Favonius Logo"
              />
            </Link>
            <ul className="mb-6 flex flex-wrap items-center justify-center text-sm font-medium text-accent sm:mb-0">
              {navLinks.map((link) => (
                <li key={crypto.randomUUID()}>
                  <Link
                    href={link.href}
                    className="me-4 hover:underline md:me-6"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <hr className="my-6 border-accent sm:mx-auto lg:my-8" />
          <span className="block text-center text-sm text-accent-foreground">
            © {year}{' '}
            <Link href="/" className="hover:underline">
              Favonius
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </Container>
    </footer>
  );
}
