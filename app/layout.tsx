import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'iPhone Fanfic Simulator',
  description: 'Interactive iPhone fanfic simulator',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="./style.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body>{children}</body>
    </html>
  );
}
