export interface DocMeta {
  title: string
  description: string
  order: number
  tags?: string[]
  slug: string
}

export interface DocCategory {
  title: string
  docs: DocMeta[]
}

export type Platform = 'macos' | 'windows'

interface PlatformConfig {
  label: string
  icon: string
  categories: DocCategory[]
}

export const platforms: Record<Platform, PlatformConfig> = {
  macos: {
    label: 'macOS',
    icon: '🍎',
    categories: [
      {
        title: '快速上手',
        docs: [
          { title: '安装与配置', description: '在 macOS 上安装 VS Code 并进行基础配置', order: 1, tags: ['入门'], slug: '01-installation' },
          { title: '界面布局与基础操作', description: '熟悉 VS Code 的界面组成和核心交互方式', order: 2, tags: ['入门'], slug: '02-interface-basics' },
        ],
      },
      {
        title: '核心能力',
        docs: [
          { title: '快捷键大全', description: 'macOS 上 VS Code 最全快捷键速查表', order: 3, tags: ['基础'], slug: '03-keyboard-shortcuts' },
          { title: '编辑超能力', description: '多光标、智能提示、Snippet、Emmet 等编辑技巧', order: 4, tags: ['基础'], slug: '04-editing-superpowers' },
          { title: '集成终端', description: 'VS Code 内置终端的使用与配置', order: 5, tags: ['基础'], slug: '05-integrated-terminal' },
          { title: 'Git 集成', description: '在 VS Code 中完成 Git 版本控制操作', order: 6, tags: ['基础'], slug: '06-git-integration' },
          { title: '调试技巧', description: '使用 VS Code 调试器高效排查代码问题', order: 7, tags: ['基础'], slug: '07-debugging' },
        ],
      },
      {
        title: '效率飞升',
        docs: [
          { title: '设置深度定制', description: 'settings.json、快捷键绑定、工作区配置', order: 8, tags: ['进阶'], slug: '08-settings-customization' },
          { title: '扩展生态', description: '精选扩展推荐与配置最佳实践', order: 9, tags: ['进阶'], slug: '09-extensions' },
          { title: 'Tasks 自动化', description: '用 Tasks 运行脚本、编译、Lint 自动化', order: 10, tags: ['进阶'], slug: '10-tasks-automation' },
        ],
      },
      {
        title: '高阶战场',
        docs: [
          { title: '远程开发', description: 'SSH Remote、Dev Containers、Codespaces', order: 11, tags: ['高阶'], slug: '11-remote-development' },
          { title: '性能调优', description: '让 VS Code 在大项目中保持流畅', order: 12, tags: ['高阶'], slug: '12-performance-tuning' },
          { title: 'Superpowers AI 工作流', description: '用 Superpowers 框架释放 AI 编程的全部潜力', order: 13, tags: ['高阶'], slug: '13-superpowers' },
        ],
      },
    ],
  },
  windows: {
    label: 'Windows',
    icon: '🪟',
    categories: [
      {
        title: '快速上手',
        docs: [
          { title: '安装与配置', description: '在 Windows 上安装 VS Code 并进行基础配置', order: 1, tags: ['入门'], slug: 'w01-installation' },
        ],
      },
      {
        title: '核心能力',
        docs: [
          { title: '快捷键大全', description: 'Windows 上 VS Code 完整快捷键速查表', order: 2, tags: ['基础'], slug: 'w02-keyboard-shortcuts' },
          { title: 'WSL 与远程开发', description: '在 Windows 上通过 WSL 获得 Linux 开发体验', order: 3, tags: ['高阶'], slug: 'w03-wsl' },
        ],
      },
    ],
  },
}

export function getPlatformDocs(platform: Platform): DocCategory[] {
  return platforms[platform]?.categories ?? []
}

export function getDocBySlug(platform: Platform, slug: string): { meta: DocMeta; category: DocCategory } | null {
  const categories = platforms[platform]?.categories
  if (!categories) return null
  for (const category of categories) {
    const doc = category.docs.find((d) => d.slug === slug)
    if (doc) return { meta: doc, category }
  }
  return null
}

export function isValidPlatform(p: string): p is Platform {
  return p === 'macos' || p === 'windows'
}
