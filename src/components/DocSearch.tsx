'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import type { DocCategory, Platform } from '@/lib/docs'

interface Props {
  categories: DocCategory[]
  platform: Platform
  activeSlug?: string
}

export default function DocSearch({ categories, platform, activeSlug }: Props) {
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)

  const flatDocs = useMemo(() => {
    return categories.flatMap((cat) =>
      cat.docs.map((doc) => ({ ...doc, categoryTitle: cat.title })),
    )
  }, [categories])

  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return flatDocs.filter(
      (doc) =>
        doc.title.toLowerCase().includes(q) ||
        doc.description.toLowerCase().includes(q) ||
        doc.tags?.some((t) => t.toLowerCase().includes(q)),
    )
  }, [query, flatDocs])

  return (
    <div className="relative px-4 pt-3 pb-2 border-b border-zinc-200 dark:border-zinc-800">
      <div className="relative">
        <svg
          className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="search"
          placeholder="搜索文章..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 200)}
          className="w-full pl-8 pr-3 py-1.5 text-sm rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#007acc]/40 focus:border-[#007acc] transition-colors"
        />
      </div>

      {/* Search Results Dropdown */}
      {focused && query.trim() && results.length > 0 && (
        <div className="absolute left-3 right-3 top-full mt-1 z-50 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-lg max-h-64 overflow-y-auto">
          {results.map((doc) => (
            <Link
              key={doc.slug}
              href={`/docs/${platform}/${doc.slug}`}
              className="block px-3 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
            >
              <div className="font-medium text-zinc-900 dark:text-zinc-100 truncate">
                {doc.title}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
                {doc.categoryTitle} · {doc.description}
              </div>
            </Link>
          ))}
        </div>
      )}

      {query.trim() && results.length === 0 && focused && (
        <div className="absolute left-3 right-3 top-full mt-1 z-50 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-lg p-3 text-sm text-zinc-500 text-center">
          未找到 &ldquo;{query}&rdquo; 相关文章
        </div>
      )}
    </div>
  )
}
