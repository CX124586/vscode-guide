'use client'

import { useEffect, useState, useCallback } from 'react'

interface TocItem {
  id: string
  text: string
  level: number
}

export default function TableOfContents() {
  const [items, setItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  // Scan DOM for headings
  useEffect(() => {
    const article = document.querySelector('article')
    if (!article) return

    const headings = article.querySelectorAll('h2, h3')
    const tocItems: TocItem[] = []

    headings.forEach((h) => {
      const id = h.getAttribute('id')
      if (!id) return
      tocItems.push({
        id,
        text: h.textContent || '',
        level: h.tagName === 'H2' ? 2 : 3,
      })
    })

    setItems(tocItems)
  }, [])

  // Track scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px' },
    )

    items.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  const handleClick = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.pushState(null, '', `#${id}`)
    }
  }, [])

  if (items.length < 2) return null

  return (
    <nav className="hidden xl:block w-56 shrink-0">
      <div className="sticky top-24 pl-6 border-l border-zinc-200 dark:border-zinc-800">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
          目录
        </h3>
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`block text-left text-sm py-0.5 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100 ${
                  item.level === 3 ? 'pl-4' : ''
                } ${
                  activeId === item.id
                    ? 'text-[#007acc] font-medium'
                    : 'text-zinc-500 dark:text-zinc-400'
                }`}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
