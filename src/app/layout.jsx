'use client';

import { useEffect } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import dynamic from 'next/dynamic';
const NavBar = dynamic(() => import('./sections/NavBar'), {
  ssr: false,
});

const Footer = dynamic(() => import('./sections/Footer'), {
  ssr: false,
});

const ShowButtonUp = dynamic(() => import('@/components/ShowButtonUp'), {
  ssr: false,
});

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  useEffect(() => {
    document.body.setAttribute('cz-shortcut-listen', 'true');
    return () => document.body.removeAttribute('cz-shortcut-listen');
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ShowButtonUp />
        </div>
      </body>
    </html>
  );
}
