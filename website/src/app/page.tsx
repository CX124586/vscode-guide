import Link from 'next/link'
import { docCategories } from '@/lib/docs'

export default function Home() {
  const totalDocs = docCategories.reduce((sum, cat) => sum + cat.docs.length, 0)

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
            从安装到精通，覆盖 macOS 平台的完整使用说明。
            <br />
            特别收录 Superpowers AI 工作流指南，让 AI 助你高效编码。
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/docs/01-installation"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#007acc] text-white font-medium hover:bg-[#0069a8] transition-colors"
            >
              开始学习
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <span className="text-sm text-zinc-400">
              共 {totalDocs} 篇文章 · 持续更新
            </span>
          </div>
        </div>
      </header>

      {/* Content Overview */}
      <div className="flex-1 max-w-4xl mx-auto w-full px-6 py-12">
        {docCategories.map((category) => (
          <section key={category.title} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {category.docs.map((doc) => (
                <Link
                  key={doc.slug}
                  href={`/docs/${doc.slug}`}
                  className="group p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-[#007acc]/50 dark:hover:border-[#007acc]/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold group-hover:text-[#007acc] transition-colors">
                      {doc.title}
                    </h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                      {doc.tags?.[0] || '通用'}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {doc.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 text-center text-sm text-zinc-500">
        <p>VS Code 使用指南 · macOS 优先 · Windows 版本即将到来</p>
      </footer>
    </div>
  )
}
