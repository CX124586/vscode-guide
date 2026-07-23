import React from 'react'
import type { DocMeta, Platform } from '@/lib/docs'
import Sidebar from '@/components/Sidebar'
import { notFound } from 'next/navigation'

interface Props {
  platform: Platform
  slug: string
  meta: DocMeta
}

const docRegistry: Record<string, Record<string, () => Promise<{ default: React.ComponentType }>>> = {
  macos: {
    '01-installation': () => import('@/content/macos/01-installation.mdx'),
    '02-interface-basics': () => import('@/content/macos/02-interface-basics.mdx'),
    '03-keyboard-shortcuts': () => import('@/content/macos/03-keyboard-shortcuts.mdx'),
    '04-editing-superpowers': () => import('@/content/macos/04-editing-superpowers.mdx'),
    '05-integrated-terminal': () => import('@/content/macos/05-integrated-terminal.mdx'),
    '06-git-integration': () => import('@/content/macos/06-git-integration.mdx'),
    '07-debugging': () => import('@/content/macos/07-debugging.mdx'),
    '08-settings-customization': () => import('@/content/macos/08-settings-customization.mdx'),
    '09-extensions': () => import('@/content/macos/09-extensions.mdx'),
    '10-tasks-automation': () => import('@/content/macos/10-tasks-automation.mdx'),
    '11-remote-development': () => import('@/content/macos/11-remote-development.mdx'),
    '12-performance-tuning': () => import('@/content/macos/12-performance-tuning.mdx'),
    '13-superpowers': () => import('@/content/macos/13-superpowers.mdx'),
  },
  windows: {
    'w01-installation': () => import('@/content/windows/w01-installation.mdx'),
    'w02-keyboard-shortcuts': () => import('@/content/windows/w02-keyboard-shortcuts.mdx'),
    'w03-wsl': () => import('@/content/windows/w03-wsl.mdx'),
  },
}

export default async function DocLayout({ platform, slug, meta }: Props) {
  const platformRegistry = docRegistry[platform]
  if (!platformRegistry) notFound()

  const loader = platformRegistry[slug]
  if (!loader) notFound()

  const { default: Content } = await loader()

  return (
    <div className="flex flex-1 h-screen">
      <Sidebar platform={platform} activeSlug={slug} />
      <main className="flex-1 overflow-y-auto">
        <article className="max-w-3xl mx-auto px-8 py-10 prose prose-zinc dark:prose-invert prose-headings:scroll-mt-20">
          <h1>{meta.title}</h1>
          {meta.description && (
            <p className="text-lg text-zinc-600 dark:text-zinc-400 -mt-4">
              {meta.description}
            </p>
          )}
          <Content />
        </article>
      </main>
    </div>
  )
}
