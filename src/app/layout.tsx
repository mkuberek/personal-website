import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Matteo Kuberek | Day Trader',
  description: 'Self-taught day trader making 4-5 figures daily through strategic prop firm trading. Sharing knowledge with the trading community.',
  keywords: ['day trading', 'prop firm trading', 'trading education', 'stock trading', 'forex trading'],
  authors: [{ name: 'Matteo Kuberek' }],
  openGraph: {
    title: 'Matteo Kuberek | Day Trader',
    description: 'Self-taught day trader sharing knowledge and insights with the trading community.',
    url: 'https://matteokuberek.com',
    siteName: 'Matteo Kuberek',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matteo Kuberek | Day Trader',
    description: 'Self-taught day trader sharing knowledge and insights with the trading community.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-15FEWR8N0C"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-15FEWR8N0C');
          `}
        </Script>
      </body>
    </html>
  );
}
