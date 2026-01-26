import type { Metadata } from 'next';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/content';

export const metadata: Metadata = {
  title: `${SITE.name} | Portfolio`,
  description: 'Role-focused portfolio for Software Engineering and AI/ML roles.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: `${SITE.name} | Portfolio`,
    description: 'Role-focused portfolio for Software Engineering and AI/ML roles.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
