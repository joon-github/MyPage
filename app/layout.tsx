
import './globals.scss'
import 'react-quill/dist/quill.snow.css'
import type { Metadata } from 'next'
import Header from '@/app/_base/Header'
import StyledJsxRegistry from './registry'
import RecoilRootProvider from './recoilRootProvider'
import { AOSInit } from './aos'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: '편범준',
  description: '편범준 개인 사이트 입니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pw = process.env.AUTHENTICATION_PASSWORD;
  return (
    <html lang="en">
      <AOSInit />
      <RecoilRootProvider>
        <StyledJsxRegistry>
          <body>
            <Header pw={pw} />
            <Suspense fallback={<p>Loading...</p>}>
              {children}
            </Suspense>
          </body>
        </StyledJsxRegistry>
      </RecoilRootProvider>
    </html>
  )
}
