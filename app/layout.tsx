import type { Metadata } from 'next';
import './globals.css';
import { inter } from '@/fonts';

export const metadata: Metadata = {
  title: 'Mentorship Scheduler',
  description: 'Schedule your mentorship sessions with ease',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
