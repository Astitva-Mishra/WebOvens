import type { Metadata } from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'WebOvens — High-Ticket Creative Web Development Studio',
  description:
    'WebOvens is an elite digital product studio engineering iconic web applications, brands, and digital experiences for visionary founders and industry leaders worldwide.',
  keywords:
    'Creative Web Agency, Premium Web Development, Digital Product Studio, High-Ticket Web Design, WebOvens, Bespoke Web Applications, Brand Engineering, UI/UX Design Studio',
  authors: [{ name: 'WebOvens Studio' }],
  creator: 'WebOvens',
  publisher: 'WebOvens Studio',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'WebOvens — High-Ticket Creative Web Development Studio',
    description:
      'Engineering iconic web applications and extraordinary digital experiences for visionary brands.',
    url: 'https://webovens.agency',
    siteName: 'WebOvens',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'WebOvens Studio — We Build Digital Empires',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebOvens — High-Ticket Creative Web Development Studio',
    description:
      'Engineering iconic web applications and extraordinary digital experiences for visionary brands.',
    images: ['/logo.png'],
    creator: '@webovens',
  },
  metadataBase: new URL('https://webovens.agency'),
  alternates: {
    canonical: '/',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WebOvens',
  description:
    'Elite digital product studio engineering iconic web applications and digital experiences.',
  url: 'https://webovens.agency',
  logo: 'https://webovens.agency/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@webovens.com',
    contactType: 'customer service',
  },
  sameAs: [
    'https://twitter.com/webovens',
    'https://linkedin.com/company/webovens',
    'https://dribbble.com/webovens',
    'https://instagram.com/webovens',
  ],
};

import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import MobileBottomNav from '@/components/MobileBottomNav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="font-sans bg-wo-bg text-wo-text antialiased selection:bg-wo-amber selection:text-wo-bg custom-cursor-active pb-16 md:pb-0"
        suppressHydrationWarning
      >
        <CustomCursor />
        {/* Scanline overlay — very subtle CRT effect */}
        <div className="scanline-overlay" aria-hidden="true" />
        <SmoothScroll>{children}</SmoothScroll>
        <MobileBottomNav />
      </body>
    </html>
  );
}
