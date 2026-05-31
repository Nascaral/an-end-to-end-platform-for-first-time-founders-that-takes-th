import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Launchpath — Idea to MVP, Without the Fragmentation',
  description: 'The end-to-end platform for first-time founders. Validate honestly, build purposefully, launch with context. One product with continuous memory across your whole journey.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" />
      </head>
      <body className="font-body bg-background text-ink antialiased">
        {children}
      </body>
    </html>
  )
}
