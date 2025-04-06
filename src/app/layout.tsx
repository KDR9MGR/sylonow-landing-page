import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Sylonow',
    default: 'Sylonow - Revolutionizing Celebrations with AI',
  },
  description: 'Transform your celebrations with Sylonow. AI-powered celebration planning, personalized experiences, and innovative solutions for modern events.',
  keywords: ['celebrations', 'AI', 'event planning', 'personalized events', 'Sylonow', 'talent program', 'innovative celebrations'],
  authors: [{ name: 'Sylonow Team' }],
  creator: 'Sylonow',
  publisher: 'Sylonow',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sylonow.com',
    siteName: 'Sylonow',
    title: 'Sylonow - Revolutionizing Celebrations with AI',
    description: 'Transform your celebrations with Sylonow. AI-powered celebration planning, personalized experiences, and innovative solutions for modern events.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sylonow - AI-Powered Celebrations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sylonow - Revolutionizing Celebrations with AI',
    description: 'Transform your celebrations with Sylonow. AI-powered celebration planning, personalized experiences, and innovative solutions for modern events.',
    images: ['/twitter-image.jpg'],
    creator: '@sylonow',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://sylonow.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 