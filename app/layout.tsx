// import './globals.css'
import './globals.scss'
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
  //htpp로 시작하면 https로 리다이렉트
  if (typeof window !== 'undefined' && window.location.protocol === 'http:') {
    const httpsUrl = `https://${window.location.host}${window.location.pathname}${window.location.search}`;
    window.location.href = httpsUrl;
    return null; // Optional: Return null to prevent rendering anything before the redirection takes place
  }



  return (
    <html lang="en">
      <AOSInit />
      <body className={`${inter.className} global`}>
        <Header />
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  )
}
