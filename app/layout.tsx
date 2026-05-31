import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Founder Guide — Idea to MVP, One Memory',
  description: 'Stop stitching together five tools that forget each other. Go from raw idea to launched MVP inside one platform with continuous shared memory.',
  openGraph: {
    title: 'Founder Guide — Idea to MVP, One Memory',
    description: 'Brutally honest validation, customer conversation tracking, and AI-assisted build specs — all in one product that remembers everything.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="font-body bg-background text-ink antialiased">{children}</body>
    </html>
  )
}
