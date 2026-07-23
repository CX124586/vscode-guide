import Link from 'next/link'
import { platforms, type DocMeta, type Platform } from '@/lib/docs'

interface Props {
  platform: Platform
  activeSlug?: string
}

export default function Sidebar({ platform, activeSlug }: Props) {
  const config = platforms[platform]
  const categories = config.categories

  return (
    <nav className="w-64 shrink-0 border-r border-zinc-200 dark:border-zinc-800 overflow-y-auto bg-zinc-50 dark:bg-zinc-900/50 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.15 2.587L18.21.21a1.49 1.49 0 0 0-1.705.29L8.43 8.152L3.627 4.477a.998.998 0 0 0-1.264.01L.984 5.797a1 1 0 0 0-.084 1.505l4.109 3.703l-4.11 3.704a1 1 0 0 0 .084 1.505l1.379 1.31a.997.997 0 0 0 1.264.01L8.43 13.85l8.075 7.652a1.49 1.49 0 0 0 1.705.29l4.942-2.377A1.5 1.5 0 0 0 25 18.026V5.974a1.5 1.5 0 0 0-.85-1.387z" />
          </svg>
          VS Code 使用指南
        </Link>

        {/* Platform Switcher */}
        <div className="flex gap-1 rounded-lg bg-zinc-200 dark:bg-zinc-800 p-0.5">
          {(['macos', 'windows'] as Platform[]).map((p) => (
            <Link
              key={p}
              href={`/docs/${p}/${activeSlug || categories[0]?.docs[0]?.slug || ''}`}
              className={`flex-1 text-center text-xs py-1 rounded-md transition-colors ${
                platform === p
                  ? 'bg-white dark:bg-zinc-700 font-medium text-zinc-900 dark:text-zinc-100 shadow-sm'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'
              }`}
            >
              {p === 'macos' ? '🍎 macOS' : '🪟 Windows'}
            </Link>
          ))}
        </div>
      </div>

      {/* Doc List */}
      <div className="flex-1 overflow-y-auto p-4">
        {categories.map((category) => (
          <div key={category.title} className="mb-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 px-2">
              {category.title}
            </h3>
            <ul className="space-y-0.5">
              {category.docs.map((doc) => (
                <SidebarItem
                  key={doc.slug}
                  doc={doc}
                  platform={platform}
                  isActive={activeSlug === doc.slug}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  )
}

function SidebarItem({
  doc,
  platform,
  isActive,
}: {
  doc: DocMeta
  platform: Platform
  isActive: boolean
}) {
  return (
    <li>
      <Link
        href={`/docs/${platform}/${doc.slug}`}
        className={`flex items-center gap-2 px-2 py-1.5 text-sm rounded-md transition-colors ${
          isActive
            ? 'bg-[#007acc]/10 text-[#007acc] font-medium dark:bg-[#007acc]/20'
            : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800'
        }`}
      >
        <span className="truncate">{doc.title}</span>
        {doc.tags?.map((tag) => (
          <span
            key={tag}
            className="ml-auto text-[10px] px-1.5 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-500 dark:text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </Link>
    </li>
  )
}
