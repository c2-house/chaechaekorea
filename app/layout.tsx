import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import clsx from 'clsx';
import './globals.css';

import { title, description, openGraph } from '@/app/shared-metadata';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://chaechaekorea.com'),
  title: {
    default: title,
    template: `%s | ${title}`,
    absolute: `${title} - Discover the Authentic Korea`,
  },
  description,
  openGraph: {
    ...openGraph,
    title,
    description,
    url: '/',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
  alternates: {
    types: {
      'application/rss+xml': [
        {
          title: `${title} - Feed`,
          url: '/rss',
        },
      ],
    },
  },
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
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={clsx('text-gray-900', inter.className)}>
      <Header />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
