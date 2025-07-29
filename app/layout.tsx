import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  // 既存の情報を維持
  title: "合同会社A.K.NET - 入札を活用した売上アップ支援",
  description:
    "AKNETWORKを通じて中小企業の皆様の成長に貢献します。経営コンサルティングと入札活用による売上アップ支援を提供。",

  // ▼▼▼ ここから追加 ▼▼▼
  keywords: "経営コンサルティング, 入札活用, 売上アップ支援, 中小企業支援, AKNETWORK", // SEO対策としてキーワードを設定
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // // 要変更: Google Search Consoleの認証コードを設定
  },
  icons: {
    icon: '/aknet_logo_512.png', // ファビコンのパスを指定
  },
  openGraph: {
    title: "合同会社A.K.NET - 入札を活用した売上アップ支援",
    description:
      "AKNETWORKを通じて中小企業の皆様の成長に貢献します。経営コンサルティングと入札活用による売上アップ支援を提供。",
    url: "　　　", // // 要変更: ご自身のウェブサイトのURLを設定
    siteName: "合同会社A.K.NET",
    images: [
      {
        url: '　　　', // // 要変更: OGP画像のURLを指定
        width: 1200,
        height: 630,
        alt: '合同会社A.K.NETのサービス紹介',
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "合同会社A.K.NET - 入札を活用した売上アップ支援",
    description: "AKNETWORKを通じて中小企業の皆様の成長に貢献します。経営コンサルティングと入札活用による売上アップ支援を提供。",
    images: ['　　　'], // // 要変更: OGP画像と同じURLで良い
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  // ▲▲▲ ここまで追加 ▲▲▲
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        {/* Noto Sans JPの読み込み。Next/Fontを利用する方法も推奨されます */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
