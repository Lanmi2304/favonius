import Link from 'next/link';

import { PiFacebookStroke } from '@/components/ui/icons/pi-facebook-stroke';
import { PiInstagramStroke } from '@/components/ui/icons/pi-instagram-stroke';
import { PiPhoneDefaultStroke } from '@/components/ui/icons/pi-phone-stroke';

export function Socials() {
  return (
    <div className="mb-10 flex w-full flex-col justify-center rounded-lg">
      <div className="mb-10 flex w-full flex-col items-center justify-center gap-4 text-accent-foreground">
        <h4 className="mt-0 text-center text-3xl font-bold italic text-accent-foreground">
          Kontakt telefon
        </h4>
        <div className="flex gap-2 hover:underline">
          <PiPhoneDefaultStroke />
          <a href="tel:+38163105283">+38163105283</a>
        </div>
      </div>
      <h2 className="mb-10 mt-0 text-center text-3xl font-bold italic text-accent-foreground">
        Drustvene mreze
      </h2>
      <div className="flex justify-center gap-10">
        <Link
          href="https://www.instagram.com/ranc.favonius/"
          rel="noopener noreferrer"
          target="_blank"
          className="flex items-center text-accent-foreground hover:underline"
        >
          <PiInstagramStroke className="size-10" />
          Instagram
        </Link>
        <Link
          href="https://www.facebook.com/share/19fhuAA1i7/?mibextid=LQQJ4d"
          rel="noopener noreferrer"
          target="_blank"
          className="flex items-center text-accent-foreground hover:underline"
        >
          <PiFacebookStroke className="size-10" />
          Facebook
        </Link>
      </div>
    </div>
  );
}
