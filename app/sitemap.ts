// app/sitemap.ts

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // ウェブサイトのベースURL
    const baseUrl = 'https://your-domain.com' // ここにあなたのドメイン名を入れてください

    return [
        {
        url: baseUrl,
        lastModified: new Date(), // ページの最終更新日
        changeFrequency: 'yearly', // 更新頻度（例: 'always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'）
        priority: 1, // サイト内でのページの優先度 (1.0が最も高い)
        },
    ]
}