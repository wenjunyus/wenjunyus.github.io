import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Wenjun Yu (余文峻) | Quantum Computing, HKU', template: '%s | Wenjun Yu (余文峻)' },
  description: 'Wenjun Yu (余文峻) is a Ph.D. candidate at the University of Hong Kong, researching quantum algorithms, quantum simulation, and quantum information.',
  alternates: { canonical: 'https://wenjunyus.github.io/' },
  verification: { google: 'ORTlS6GJJvrNWPhSWFe-rsmteP5NsJT9sxLSWTV7Bcs' },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
