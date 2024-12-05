// src/lib/fonts.ts
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

export const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

export const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plusJakarta'
});