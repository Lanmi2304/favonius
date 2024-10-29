'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navLinks } from '@/lib/config/navigation';
import { cn } from '@/lib/utils/cn';

export function MenuLinks() {
  const pathname = usePathname();
  return (
    <>
      {navLinks.map((link) => (
        <Link
          key={crypto.randomUUID()}
          href={link.href}
          className={cn(
            'text-lg text-primary',
            link.href.pathname === pathname ? 'text-[#c7913a]' : null,
          )}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
