import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

export const metadata: Metadata = {
  title: 'Beam Chain Roadmap',
  description: 'Track research progress across all Beam Chain workstreams',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-blue-50 min-h-screen">
        <AnimatedBackground />
        {children}
        <Script defer data-domain="beamroadmap.org" src="https://plausible.io/js/script.js" />
      </body>
    </html>
  )
}
