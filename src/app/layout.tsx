export const metadata = {
  metadataBase: new URL('https://www.sylonow.com'),
  title: 'Sylonow – Elevate Every Celebration with the Ultimate App',
  description: 'Experience unforgettable moments with Sylonow—the premier celebration app that brings your special occasions to life. Launching June 2025.',
  openGraph: {
    title: 'Sylonow – Elevate Every Celebration with the Ultimate App',
    description: 'Experience unforgettable moments with Sylonow—the premier celebration app that brings your special occasions to life. Launching June 2025.',
    url: 'https://www.sylonow.com',
    siteName: 'Sylonow',
    images: [
      {
        url: '/og-image.jpg', // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Sylonow - Celebration & Surprise Services'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sylonow – Elevate Every Celebration with the Ultimate App',
    description: 'Experience unforgettable moments with Sylonow—the premier celebration app that brings your special occasions to life. Launching June 2025.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Sylonow – Elevate Every Celebration with the Ultimate App" />
        <meta property="og:description" content="Experience unforgettable moments with Sylonow—the premier celebration app that brings your special occasions to life. Launching June 2025." />
        <meta property="og:image" content="https://www.sylonow.com/og-image.jpg" />
        <meta property="og:url" content="https://www.sylonow.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Sylonow" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
} 