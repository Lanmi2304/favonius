'use client';

import {
  type AnimationSequence,
  LazyMotion,
  domAnimation,
  useAnimate,
} from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { MenuToggle } from '@/components/shared/header/menu-toggle';
import { Button } from '@/components/ui/button';
import { navLinks } from '@/lib/config/navigation';
import { cn } from '@/lib/utils/cn';

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            'nav',
            { transform: 'translateX(0%)' },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.3 },
          ],
        ]
      : [['nav', { transform: 'translateX(100%)' }, { at: '-0.1' }]];

    void animate([
      [
        'path.top',
        { d: isOpen ? 'M 3 16.5 L 17 2.5' : 'M 2 2.5 L 20 2.5' },
        { at: '<' },
      ],
      ['path.middle', { opacity: isOpen ? 0 : 1 }, { at: '<' }],
      [
        'path.bottom',
        { d: isOpen ? 'M 3 2.5 L 17 16.346' : 'M 2 16.346 L 20 16.346' },
        { at: '<' },
      ],
      ...(menuAnimations as AnimationSequence),
    ]);
  }, [isOpen]);
  return scope;
}

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const closeOnESC = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnESC);

    return () => window.removeEventListener('keydown', closeOnESC);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <div className="overflow-hidden" ref={scope}>
        <div
          className={cn(
            'fixed inset-0 bg-black/70 opacity-0 backdrop-blur-sm transition-opacity',
            isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none',
          )}
          onClick={() => setIsOpen(false)}
          aria-hidden
        />

        <nav className="fixed inset-y-0 right-0 w-80 translate-x-full rounded-tl-lg bg-muted backdrop-blur-sm will-change-transform">
          <ul className="mt-10 flex h-full flex-col gap-4">
            {navLinks.map((link) => (
              <li
                key={crypto.randomUUID()}
                className="px-6 will-change-transform"
              >
                <Link href={link.href} prefetch>
                  <Button
                    onClick={() => setTimeout(() => setIsOpen(!isOpen), 100)}
                    variant="link"
                    className={cn(
                      'p-0 text-xl font-medium',
                      pathname === link.href.pathname
                        ? 'text-accent'
                        : 'text-foreground',
                    )}
                  >
                    {link.label}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MenuToggle open={isOpen} toggle={() => setIsOpen(!isOpen)} />
      </div>
    </LazyMotion>
  );
}
