import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: {
    template: '%s | Family Life On Tour',
    default: 'Family Life On Tour | Smart Family Travel for Modern Parents',
  },
  description: 'Smart family travel, digital nomad families, remote work parents, homeschooling while traveling, and travel budgeting.',
  openGraph: {
    title: 'Family Life On Tour',
    description: 'Smart family travel, digital nomad families, remote work parents, homeschooling while traveling, and travel budgeting.',
    url: 'https://familylifeontour.com',
    siteName: 'Family Life On Tour',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Family Life On Tour',
    description: 'Smart family travel, digital nomad families, remote work parents, homeschooling while traveling, and travel budgeting.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
