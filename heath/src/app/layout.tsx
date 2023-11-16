import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import { Providers } from './providers'
import { Header } from '@/components'

export const metadata: Metadata = {
  title: 'HEATH',
  description: '나만의 특별할 운동 인증!',
}

const mainFont = localFont({
  src: './fonts/Helvetica Neue 67 Medium Condensed.otf',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={mainFont.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
