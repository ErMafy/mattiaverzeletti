import React from 'react';
import type { Metadata } from 'next';
import '../globals.css';
import CustomCursor from '@/components/ui/CustomCursor';

export const metadata: Metadata = {
  title: 'Mattia Verzeletti - Personal Trainer Online',
  description: 'Allenamenti personalizzati online con coaching privato. Programmi su misura, monitoraggio costante e supporto continuo.',
  icons: {
    icon: [
      { url: '/assets/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/favicon.png', sizes: '192x192', type: 'image/png' },
      { url: '/assets/favicon.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/assets/favicon.png',
    apple: [
      { url: '/assets/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Mattia Verzeletti - Personal Trainer Online',
    description: 'Allenamenti personalizzati online con coaching privato',
    type: 'website',
    locale: 'it_IT',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Mattia PT" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className="bg-white text-black antialiased overflow-x-hidden md:cursor-none">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
