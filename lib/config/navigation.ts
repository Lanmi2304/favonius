import { type UrlObject } from 'node:url';

export interface NavLink {
  label: string;
  href: UrlObject;
}
export const navLinks: NavLink[] = [
  { label: 'Home', href: { pathname: '/' } },
  { label: 'Contact', href: { pathname: '/contact' } },
  { label: 'Gallery', href: { pathname: '/gallery' } },
];
