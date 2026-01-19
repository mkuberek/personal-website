import './globals.css';
import { Inter, Orbitron, Rajdhani } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });
const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700', '800', '900']
});
const rajdhani = Rajdhani({ 
  subsets: ['latin'],
  variable: '--font-rajdhani',
  weight: ['300', '400', '500', '600', '700']
});

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
    <html lang="en" className={`${inter.className} ${orbitron.variable} ${rajdhani.variable}`}>
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
            gtag('config', 'G-15FEWR8N0C', {
              page_path: window.location.pathname,
              send_page_view: true
            });
            
            // Track external link clicks
            document.addEventListener('click', function(e) {
              const target = e.target.closest('a');
              if (target && target.href && target.href.startsWith('http')) {
                const isExternal = !target.href.includes(window.location.hostname);
                if (isExternal) {
                  gtag('event', 'click', {
                    event_category: 'outbound',
                    event_label: target.href,
                    link_text: target.textContent || target.innerText,
                    link_url: target.href
                  });
                }
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}
