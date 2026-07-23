import Link from 'next/link'
import { platforms, type Platform } from '@/lib/docs'
import { getSiteStats } from '@/lib/stats'

export default function Home() {
  const stats = getSiteStats()

  return (
    <div className="flex flex-col flex-1 min-h-screen">
      {/* Hero */}
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <svg className="w-10 h-10 text-[#007acc]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.15 2.587L18.21.21a1.49 1.49 0 0 0-1.705.29L8.43 8.152L3.627 4.477a.998.998 0 0 0-1.264.01L.984 5.797a1 1 0 0 0-.084 1.505l4.109 3.703l-4.11 3.704a1 1 0 0 0 .084 1.505l1.379 1.31a.997.997 0 0 0 1.264.01L8.43 13.85l8.075 7.652a1.49 1.49 0 0 0 1.705.29l4.942-2.377A1.5 1.5 0 0 0 25 18.026V5.974a1.5 1.5 0 0 0-.85-1.387z" />
            </svg>
            <h1 className="text-4xl font-bold tracking-tight">
              VS Code <span className="text-[#007acc]">使用指南</span>
            </h1>
          </div>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mb-8">
            从安装到精通，覆盖 macOS 和 Windows 的完整使用说明。
            <br />
            特别收录 Superpowers AI 工作流指南，让 AI 助你高效编码。
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{stats.totalArticles}</div>
              <div className="text-zinc-500 dark:text-zinc-400">篇文章</div>
            </div>
            <div className="w-px h-10 bg-zinc-200 dark:bg-zinc-700" />
            <div className="text-center">
              <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{(stats.totalWords / 1000).toFixed(1)}K</div>
              <div className="text-zinc-500 dark:text-zinc-400">总字数</div>
            </div>
            <div className="w-px h-10 bg-zinc-200 dark:bg-zinc-700" />
            <div className="text-center">
              <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">2</div>
              <div className="text-zinc-500 dark:text-zinc-400">支持平台</div>
            </div>
            <div className="w-px h-10 bg-zinc-200 dark:bg-zinc-700" />
            <div className="text-center">
              <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 text-sm">{stats.lastUpdated}</div>
              <div className="text-zinc-500 dark:text-zinc-400">最近更新</div>
            </div>
          </div>
        </div>
      </header>

      {/* Platform Selection */}
      <div className="max-w-4xl mx-auto w-full px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {(Object.entries(platforms) as [Platform, typeof platforms.macos][]).map(
            ([key, config]) => {
              const totalDocs = config.categories.reduce(
                (sum, cat) => sum + cat.docs.length,
                0,
              )
              const firstDoc = config.categories[0]?.docs[0]

              return (
                <Link
                  key={key}
                  href={`/docs/${key}/${firstDoc?.slug ?? ''}`}
                  className="group p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-[#007acc]/50 dark:hover:border-[#007acc]/50 hover:shadow-lg transition-all"
                >
                  <div className="text-4xl mb-4">{config.icon}</div>
                  <h2 className="text-2xl font-bold mb-2 group-hover:text-[#007acc] transition-colors">
                    {config.label}
                  </h2>
                  <p className="text-zinc-500 dark:text-zinc-400 mb-4">
                    {totalDocs} 篇文章
                  </p>
                  <div className="space-y-2">
                    {config.categories.map((cat) => (
                      <div key={cat.title}>
                        <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                          {cat.title}
                        </div>
                        <div className="text-sm text-zinc-600 dark:text-zinc-400">
                          {cat.docs.map((d) => d.title).join(' · ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </Link>
              )
            },
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 text-center text-sm text-zinc-500">
        <p>VS Code 使用指南 · 持续更新中</p>
      </footer>
    </div>
  )
}
