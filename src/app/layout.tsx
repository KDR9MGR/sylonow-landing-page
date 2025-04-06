export const metadata = {
  metadataBase: new URL('https://www.sylonow.com'),
  title: 'Sylonow - Make Every Moment Special',
  description: 'Transform your celebrations with personalized surprise services. Creating unforgettable moments through curated experiences.',
  openGraph: {
    title: 'Sylonow - Make Every Moment Special',
    description: 'Transform your celebrations with personalized surprise services. Creating unforgettable moments through curated experiences.',
    url: 'https://www.sylonow.com',
    siteName: 'Sylonow',
    images: [
      {
        url: '/og-image.png', // Make sure to add this image to your public folder
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
    title: 'Sylonow - Make Every Moment Special',
    description: 'Transform your celebrations with personalized surprise services. Creating unforgettable moments through curated experiences.',
    images: ['/og-image.png'],
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
        <meta property="og:title" content="Sylonow - Make Every Moment Special" />
        <meta property="og:description" content="Transform your celebrations with personalized surprise services. Creating unforgettable moments through curated experiences." />
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