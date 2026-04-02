import React from 'react';
import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Mattia Verzeletti - Personal Trainer Online',
  description: 'Allenamenti personalizzati online con coaching privato. Programmi su misura, monitoraggio costante e supporto continuo.',
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
      </head>
      <body className="bg-white text-black antialiased">
        {children}
      </body>
    </html>
  );
}
