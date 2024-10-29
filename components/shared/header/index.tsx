import Image from 'next/image';

import { MenuLinks } from '@/components/shared/header/menu-links';
import { PiBurgerMenuThreeStroke } from '@/components/ui/icons/pi-burger-menu-three-stroke';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sidebar';

export function Header() {
  return (
    <header className="h-20 w-full bg-transparent backdrop-blur-sm">
      <div className="hidden items-center justify-between md:flex">
        <div className="py-2">
          <Image src="/logo.jfif" alt="logo" width={100} height={70} />
        </div>
        <div className="flex gap-4 text-primary">
          <MenuLinks />
        </div>
      </div>
      {/*Desktop menu */}

      {/* Mobile menu */}
      <div className="flex items-center justify-between md:hidden">
        <div className="py-2">
          <Image src="/logo.jfif" alt="logo" width={100} height={70} />
        </div>
        <Sheet>
          <SheetTrigger>
            <PiBurgerMenuThreeStroke className="size-10" />
          </SheetTrigger>
          <SheetContent>
            <SheetTitle />
            <div className="mt-10 flex w-full flex-col items-center gap-6">
              <MenuLinks />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
