import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Founder AI Guide',
  description: 'Validate your startup idea with honest, sourced feedback.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-100 min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
