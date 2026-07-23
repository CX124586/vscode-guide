import React from 'react'
import type { DocMeta, Platform } from '@/lib/docs'
import Sidebar from '@/components/Sidebar'
import TableOfContents from '@/components/TableOfContents'
import { notFound } from 'next/navigation'

interface Props {
  platform: Platform
  slug: string
  meta: DocMeta
}

const docRegistry: Record<string, Record<string, () => Promise<{ default: React.ComponentType }>>> = {
  macos: {
    'b01-beginner-setup': () => import('@/content/macos/b01-beginner-setup.mdx'),
    'b02-first-ai-chat': () => import('@/content/macos/b02-first-ai-chat.mdx'),
    'b03-office-cases': () => import('@/content/macos/b03-office-cases.mdx'),
    'b04-model-config': () => import('@/content/macos/b04-model-config.mdx'),
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
    'w04-editing-superpowers': () => import('@/content/windows/w04-editing-superpowers.mdx'),
    'w05-integrated-terminal': () => import('@/content/windows/w05-integrated-terminal.mdx'),
    'w06-git-integration': () => import('@/content/windows/w06-git-integration.mdx'),
    'w07-debugging': () => import('@/content/windows/w07-debugging.mdx'),
    'w08-settings-customization': () => import('@/content/windows/w08-settings-customization.mdx'),
    'w09-extensions': () => import('@/content/windows/w09-extensions.mdx'),
    'w10-tasks-automation': () => import('@/content/windows/w10-tasks-automation.mdx'),
    'w12-performance-tuning': () => import('@/content/windows/w12-performance-tuning.mdx'),
    'w13-superpowers': () => import('@/content/windows/w13-superpowers.mdx'),
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
        <div className="max-w-6xl mx-auto flex px-4">
          <article className="flex-1 min-w-0 px-4 py-10 prose prose-zinc dark:prose-invert prose-headings:scroll-mt-20">
            <h1>{meta.title}</h1>
            {meta.description && (
              <p className="text-lg text-zinc-600 dark:text-zinc-400 -mt-4">
                {meta.description}
              </p>
            )}
            <Content />

            {/* Feedback */}
            <div className="mt-12 pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
                <a
                  href={`https://github.com/CX124586/vscode-guide/blob/main/src/content/${platform}/${slug}.mdx`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#007acc] transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  在 GitHub 上编辑此页
                </a>
                <a
                  href={`https://github.com/CX124586/vscode-guide/issues/new?title=${encodeURIComponent(`反馈: ${meta.title}`)}&body=${encodeURIComponent(`## 页面\n\n${meta.title}\n\n## 反馈内容\n\n`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#007acc] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  反馈问题
                </a>
              </div>
            </div>
          </article>
          <TableOfContents />
        </div>
      </main>
    </div>
  )
}
