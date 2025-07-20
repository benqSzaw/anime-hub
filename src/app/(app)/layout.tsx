import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Bungee, Poppins } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Anime hub',
};

const bungee = Bungee({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-heading',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-text',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bungee.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
