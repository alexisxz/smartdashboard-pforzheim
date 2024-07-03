import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Cookies from './Cookies'
import Matomo from './Matomo'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Klimadashboard Münster',
  viewport: 'width=device-width, initial-scale=1',
  description: 'Das Klimadashboard der Stadt Münster',
  icons: '/favicon.ico',
  metadataBase: new URL('https://klimadashboard.ms'),
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
        src="https://cdn.jsdelivr.net/npm/@iframe-resizer/child"
        type="text/javascript"
      />
    </html>
  )
}
