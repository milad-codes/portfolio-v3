import type { Metadata, Viewport } from 'next';
import { STIX_Two_Text } from 'next/font/google';
import './globals.css';

const stix = STIX_Two_Text({ subsets: ['latin'], weight: ['400', '500'] });

export const metadata: Metadata = {
  title: 'Milad Akbari',
  description: 'Fullstack developer @Aampere',
};

export const viewport: Viewport = { themeColor: '#1a1a1a' };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${stix.className} antialiased`}>{children}</body>
    </html>
  );
}
