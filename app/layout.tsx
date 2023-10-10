import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Chatbot',
  description: 'Your Personal Chatbot Assistant',
  viewport:
    'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densityDpi=device-dpi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
