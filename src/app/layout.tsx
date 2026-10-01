import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { BRAND } from '@ems/config';
import './theme.generated.css';
import './globals.css';

export const metadata: Metadata = {
  title: `${BRAND.productName} Console`,
  description: `${BRAND.productName} internal configuration console (Phase 2 — deferred).`,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
