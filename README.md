# VS Code 使用指南

从安装到精通，覆盖 macOS 和 Windows 的 VS Code 完整使用说明。包含 Superpowers AI 工作流指南和零基础 AI 编程入门模块。

## 技术栈

| 层 | 选择 | 说明 |
|---|------|------|
| 框架 | Next.js 16 (App Router) | 文档站首选 |
| 内容 | MDX | Markdown + React 组件 |
| 样式 | Tailwind CSS v4 + Typography | prose 排版 + 暗色模式 |
| 部署 | Vercel (静态导出) | 零配置自动部署 |
| 搜索 | 客户端 useMemo filter | 无需外部服务 |

## 项目结构

```
├── src/
│   ├── app/
│   │   ├── layout.tsx              # 根布局 + PWA 支持
│   │   ├── page.tsx                # 首页（平台选择）
│   │   ├── globals.css             # Tailwind + 中文排版覆写
│   │   ├── docs/[platform]/[[...slug]]/
│   │   │   ├── page.tsx            # 文档动态路由
│   │   │   └── DocLayout.tsx       # 文档布局壳（MDX 加载 + 侧边栏 + TOC）
│   │   └── skills/page.tsx         # 技能推荐榜
│   ├── components/
│   │   ├── Sidebar.tsx             # 左侧文档列表 + 平台切换
│   │   ├── TableOfContents.tsx     # 右侧浮动目录
│   │   ├── DocSearch.tsx           # 文档搜索
│   │   └── VideoEmbed.tsx          # 视频延迟加载组件
│   ├── content/
│   │   ├── macos/                  # macOS 平台 17 篇
│   │   └── windows/                # Windows 平台 12 篇
│   ├── lib/
│   │   ├── docs.ts                 # 数据模型 + 文档注册表
│   │   ├── extensions.ts           # 技能推荐榜数据
│   │   └── stats.ts                # 站点统计
│   └── mdx-components.tsx          # MDX 全局组件注册
├── public/
│   ├── images/                     # SVG 图示 + 截图
│   ├── icons/                      # PWA 图标
│   ├── manifest.json              # PWA manifest
│   └── sw.js                      # Service Worker
├── scripts/
│   └── screenshots.sh             # 截图辅助脚本
├── next.config.ts                  # MDX + 静态导出配置
├── tsconfig.json
├── package.json
└── CLAUDE.md / AGENTS.md          # AI Agent 指令
```

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建静态站点
npm run build
# 输出到 out/
```

## 添加新文档

1. 在 `src/content/<platform>/` 下创建 `.mdx` 文件：

```mdx
export const meta = {
  title: '文档标题',
  description: '简短描述',
  order: 5,
  tags: ['标签'],
}

## 第一节
正文内容...
```

2. 在 `src/lib/docs.ts` 中注册新文档

3. 在 `src/app/docs/[platform]/[[...slug]]/DocLayout.tsx` 中添加动态 import

## 分发说明

压缩包投喂给其他 AI Agent 时，建议使用：

```bash
# 方式一：Git 导出（推荐，自动排除构建产物）
git archive --format zip --output vscode-guide-source.zip HEAD

# 方式二：手动压缩时排除以下目录
# node_modules/ out/ .next/ .vercel/ .claude/
```

投喂时附上这句话：
> 这是一个 Next.js MDX 文档站。先读 README.md 和 参考说明-文档站搭建经验.md，然后 npm install && npm run dev 即可启动。

## 相关文档

- [参考说明-文档站搭建经验.md](./参考说明-文档站搭建经验.md) — 从本项目提炼的通用文档站搭建 SOP
