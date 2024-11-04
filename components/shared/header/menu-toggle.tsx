/* eslint-disable tailwindcss/no-custom-classname -- Temp check */

import { Button } from '@/components/ui/button';

function Path(props: {
  d: string;
  className: string;
  variants?: {
    closed: {
      d: string;
    };
    open: {
      d: string;
    };
  };
  opacity?: string;
  open?: boolean;
}) {
  return (
    <path
      fill="#333d25"
      strokeWidth="3"
      stroke="#333d25"
      strokeLinecap="round"
      {...props}
    />
  );
}

export function MenuToggle({
  toggle,
  open,
}: {
  toggle: () => void;
  open: boolean;
}) {
  return (
    <Button
      onClick={toggle}
      variant="ghost"
      className="bg-transparent hover:bg-transparent"
      aria-label="toggle menu"
    >
      <svg width="23" height="18" viewBox="0 0 23 18">
        <Path
          d="M 2 2.5 L 20 2.5"
          className="top"
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
          open={open}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          opacity="1"
          className="middle"
          open={open}
        />
        <Path
          d="M 2 16.346 L 20 16.346"
          className="bottom"
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
          open={open}
        />
      </svg>
    </Button>
  );
}
