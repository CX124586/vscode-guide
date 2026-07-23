import { platforms } from './docs'
import fs from 'fs'
import path from 'path'

interface SiteStats {
  totalArticles: number
  totalWords: number
  lastUpdated: string
  platforms: {
    name: string
    articleCount: number
    wordCount: number
  }[]
}

export function getSiteStats(): SiteStats {
  const contentDir = path.join(process.cwd(), 'src/content')

  let totalWords = 0
  const platformStats: SiteStats['platforms'] = []

  for (const [key, config] of Object.entries(platforms)) {
    const platformDir = path.join(contentDir, key)
    let platformWords = 0

    for (const doc of config.categories.flatMap((c) => c.docs)) {
      try {
        const filePath = path.join(platformDir, `${doc.slug}.mdx`)
        const content = fs.readFileSync(filePath, 'utf-8')
        // Strip frontmatter and count Chinese + English words
        const body = content.replace(/---[\s\S]*?---\n/, '')
        // Count Chinese characters
        const chinese = (body.match(/[一-鿿]/g) || []).length
        // Count English words
        const english = (body.match(/[a-zA-Z_]+/g) || []).length
        platformWords += chinese + english
      } catch {
        // skip missing files
      }
    }

    platformStats.push({
      name: config.label,
      articleCount: config.categories.reduce((s, c) => s + c.docs.length, 0),
      wordCount: platformWords,
    })
    totalWords += platformWords
  }

  return {
    totalArticles: platformStats.reduce((s, p) => s + p.articleCount, 0),
    totalWords,
    lastUpdated: new Date().toISOString().split('T')[0],
    platforms: platformStats,
  }
}
