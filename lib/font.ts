import { Poppins } from 'next/font/google';

export const poppins = Poppins({
  weight: ['100', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'], 
  variable: '--font-poppins', 
  display: 'swap', 
  subsets: ['latin', 'latin-ext'], 
});