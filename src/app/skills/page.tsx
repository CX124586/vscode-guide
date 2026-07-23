import Link from 'next/link'
import { extensionCategories, type Extension } from '@/lib/extensions'

export default function SkillsPage() {
  const totalExtensions = extensionCategories.reduce((s, cat) => s + cat.extensions.length, 0)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <header className="border-b border-zinc-200 dark:border-zinc-800 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-[#007acc] mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回首页
          </Link>

          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              🔥 VS Code <span className="text-[#007acc]">技能推荐榜</span>
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-6">
              精选 {totalExtensions} 个最热门、最有用的 VS Code 扩展，按类别整理。
              <br />
              点击即可跳转 VS Code 市场直接安装。
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-zinc-500">
              <span>⭐ 收录 {totalExtensions} 款扩展</span>
              <span className="w-px h-4 bg-zinc-300 dark:bg-zinc-600" />
              <span>📊 数据更新于 2026年7月</span>
            </div>
          </div>
        </div>
      </header>

      {/* Category Navigation */}
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 py-3 flex gap-3 overflow-x-auto scrollbar-none">
          {extensionCategories.map((cat) => (
            <a
              key={cat.title}
              href={`#${cat.title.split(' ')[1] || cat.title}`}
              className="shrink-0 text-xs px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-[#007acc]/10 hover:text-[#007acc] dark:hover:text-[#007acc] transition-colors font-medium"
            >
              {cat.title}
            </a>
          ))}
        </div>
      </div>

      {/* Extensions List */}
      <div className="flex-1 max-w-5xl mx-auto w-full px-6 py-10">
        {extensionCategories.map((category) => (
          <section
            key={category.title}
            id={category.title.split(' ')[1] || category.title}
            className="mb-16 scroll-mt-20"
          >
            <h2 className="text-2xl font-bold mb-1">{category.title}</h2>
            <p className="text-zinc-500 dark:text-zinc-400 mb-6">{category.description}</p>

            <div className="grid gap-4 sm:grid-cols-2">
              {category.extensions.map((ext) => (
                <ExtensionCard key={ext.id} ext={ext} />
              ))}
            </div>
          </section>
        ))}

        {/* How to Install Section */}
        <section className="mt-16 p-6 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-bold mb-3">📥 如何安装</h2>
          <div className="grid gap-4 sm:grid-cols-3 text-sm text-zinc-600 dark:text-zinc-400">
            <div className="p-3 rounded-lg bg-white dark:bg-zinc-800/50">
              <div className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">方法一：点击链接</div>
              <p>点击下方卡片上的「安装」按钮，浏览器会自动打开 VS Code 扩展页面，点击 Install 即可</p>
            </div>
            <div className="p-3 rounded-lg bg-white dark:bg-zinc-800/50">
              <div className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">方法二：搜索安装</div>
              <p>在 VS Code 中按 <code className="px-1 py-0.5 bg-zinc-200 dark:bg-zinc-700 rounded text-xs">Ctrl+Shift+X</code>，搜索扩展名称，点击安装</p>
            </div>
            <div className="p-3 rounded-lg bg-white dark:bg-zinc-800/50">
              <div className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">方法三：命令行</div>
              <p>在终端中输入 <code className="px-1 py-0.5 bg-zinc-200 dark:bg-zinc-700 rounded text-xs">code --install-extension 发布者.扩展名</code></p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 text-center text-sm text-zinc-500">
        <p>
          VS Code 技能推荐榜 · 数据来源 VS Code Marketplace ·{' '}
          <Link href="/" className="hover:text-[#007acc]">返回首页</Link>
        </p>
      </footer>
    </div>
  )
}

function ExtensionCard({ ext }: { ext: Extension }) {
  const marketplaceUrl = `https://marketplace.visualstudio.com/items?itemName=${ext.id}`

  return (
    <a
      href={marketplaceUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-[#007acc]/50 dark:hover:border-[#007acc]/50 hover:shadow-md transition-all bg-white dark:bg-zinc-900/50"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold group-hover:text-[#007acc] transition-colors truncate flex items-center gap-2">
            {ext.name}
            {ext.official && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#007acc]/10 text-[#007acc] font-medium shrink-0">
                官方
              </span>
            )}
          </h3>
        </div>
        {/* Rating */}
        <div className="flex items-center gap-1 shrink-0 ml-2">
          <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">{ext.rating}</span>
        </div>
      </div>

      <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 mb-3">
        {ext.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex gap-1.5 flex-wrap">
          {ext.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-1.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-zinc-400">{ext.installs}</span>
          <span className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[#007acc]/10 text-[#007acc] font-medium group-hover:bg-[#007acc] group-hover:text-white transition-colors">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.15 2.587L18.21.21a1.49 1.49 0 0 0-1.705.29L8.43 8.152L3.627 4.477a.998.998 0 0 0-1.264.01L.984 5.797a1 1 0 0 0-.084 1.505l4.109 3.703l-4.11 3.704a1 1 0 0 0 .084 1.505l1.379 1.31a.997.997 0 0 0 1.264.01L8.43 13.85l8.075 7.652a1.49 1.49 0 0 0 1.705.29l4.942-2.377A1.5 1.5 0 0 0 25 18.026V5.974a1.5 1.5 0 0 0-.85-1.387z" />
            </svg>
            安装
          </span>
        </div>
      </div>
    </a>
  )
}
