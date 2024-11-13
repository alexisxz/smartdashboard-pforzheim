import '@/styles/globals.css'
import { Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Cookies from './Cookies'
import Matomo from './Matomo'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Klimadashboard Münster',
  description: 'Das Klimadashboard der Stadt Münster',
  icons: '/favicon.ico',
  metadataBase: new URL('https://klimadashboard.ms'),
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={inter.className} lang="de">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {children}
        <Cookies />
      </body>
      <Matomo />
      <Script
        async
        src="https://www.stadt-muenster.de/ms/js/iframeResizer.contentWindow.min.js"
        type="text/javascript"
      />
    </html>
  )
}
