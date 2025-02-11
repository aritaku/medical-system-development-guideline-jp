import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '医療情報システムガイドライン',
  description: '日本の医療機関におけるシステム開発ガイドラインです。このガイドラインに則ることによりセキュアで信頼性のあるクラウドシステムを構築することができ、医療情報の利活用も促進されます。',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
