import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/app/_base/Header'
import StyledJsxRegistry from './registry'
import { AOSInit } from './aos'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '편범준',
  description: '편범준 개인 사이트 입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={inter.className}>
        <Header/>
        <StyledJsxRegistry>{children}</StyledJsxRegistry> 
      </body>
    </html>
  )
}
