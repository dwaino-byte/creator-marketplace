import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Creator Marketplace - Connect Creators with Businesses',
  description: 'The premier platform connecting African creators with businesses for amazing projects.',
  keywords: 'creators, jobs, freelance, marketplace, Africa, South Africa',
  authors: [{ name: 'Creator Marketplace' }],
  creator: 'Creator Marketplace',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#667eea" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
