import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'YDLF – Youth Development Leadership Foundation',
  description: 'Empowering Young Leaders. Transforming Communities. YDLF is committed to raising a new generation of transformational leaders through training, mentorship, and community impact.',
  keywords: 'leadership, youth development, training, Nigeria, community impact, YDLF',
  openGraph: {
    title: 'YDLF – Youth Development Leadership Foundation',
    description: 'Empowering Young Leaders. Transforming Communities.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
