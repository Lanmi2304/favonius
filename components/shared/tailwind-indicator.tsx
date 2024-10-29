import { env } from '@/env';

export function TailwindIndicator() {
  if (env.NODE_ENV === 'production') return null;

  return (
    <div className="pointer-events-none fixed bottom-2 left-2 z-50 flex size-6 cursor-default items-center justify-center rounded-full border bg-primary p-4 text-xs leading-none text-white drop-shadow-md">
      <div className="block sm:hidden">XS</div>
      <div className="hidden sm:block md:hidden">SM</div>
      <div className="hidden md:block lg:hidden">MD</div>
      <div className="hidden lg:block xl:hidden">LG</div>
      <div className="hidden xl:block 2xl:hidden">XL</div>
      <div className="hidden 2xl:block">2XL</div>
    </div>
  );
}
