import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'GAC Lab',
  description: 'Learning with Game',
  icons: {
    icon: [
      '/favicon.ico?v=2'
    ],
    apple: [
      '/apple-touch-icon.png'
    ],
    shortcut: [
      'apple-touch-icon.png'
    ],
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
