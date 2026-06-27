import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Generative AI Healthcare Use-Case Atlas',
  description: 'Interactive generative AI healthcare use-case guide for university faculty and staff.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
