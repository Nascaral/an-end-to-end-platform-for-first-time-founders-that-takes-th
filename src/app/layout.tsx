import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Founder AI Guide — Idea to MVP, No Tool Hopping',
  description: 'The one platform that carries continuous memory from raw idea through customer validation to your first shipped product. Built for first-time founders who refuse to cheerlead their way to failure.',
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
