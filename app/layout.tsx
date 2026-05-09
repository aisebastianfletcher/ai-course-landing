import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Mastery Course — Build Real AI Products',
  description: 'Learn to build, deploy and monetise AI applications in 8 weeks. Hands-on. No fluff.',
  openGraph: {
    title: 'AI Mastery Course — Build Real AI Products',
    description: 'Learn to build, deploy and monetise AI applications in 8 weeks.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
