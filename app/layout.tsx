import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Chatbot',
  description: 'Your Personal Chatbot Assistant',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="p-0 m-0" lang="en">
      <body className="">{children}</body>
    </html>
  );
}
