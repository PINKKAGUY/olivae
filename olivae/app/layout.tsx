import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
});
const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
});

export const metadata: Metadata = {
  title: 'Olivae — Mediterranean fine dining in Dubai',
  description:
    'Olivae is a Mediterranean fine-dining restaurant in Dubai. Sun-soaked flavors, a curated menu, and a view over the skyline.',
  openGraph: {
    title: 'Olivae — Mediterranean fine dining in Dubai',
    description: 'Sun-soaked Mediterranean flavors above the Dubai skyline.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
