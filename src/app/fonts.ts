import { Poppins, Comfortaa } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const comfortaa = Comfortaa({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-comfortaa',
});
