<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md · VS Code 使用指南

本仓库是「VS Code 使用指南」文档站源码：Next.js 静态导出的 Markdown/MDX 文档站。

## 技术栈

- Next.js 16（App Router）+ MDX + Tailwind CSS v4
- `next.config.ts` 设置 `output: 'export'`，构建输出为纯静态文件
- 部署：Vercel

## 常用命令

```bash
npm install
npm run dev     # 本地开发
npm run build   # 静态导出到 out/
npm run lint
```

## 目录

- `src/app/` — 路由与页面
- `src/content/` — MDX 文档内容
- `src/components/` — 组件
- `src/lib/` — 工具函数
- `public/` — 静态资源

## 写作约定

- 正文用 MDX，代码块标注语言。
- 面向零基础读者：先给结论，再展开步骤。
- 改动文档时保持现有导航结构，不随意增删路由。
- 新增页面时同步更新目录与相邻页面链接。

## Agent 工作规则

- 动手前先读 `README.md`。
- 提交前跑 `npm run build`，确认静态导出通过。
- 不提交 `node_modules/`、`.next/`、`out/`、`.vercel/`。
- 不提交任何密钥、令牌或本机绝对路径。
- 提交信息写清「改了什么、为什么」。

## 跨 Agent 交接

阶段完成或切换 agent 前更新交接信息（若不存在则创建）：目标、已完成、当前状态、下一步、关键文件。
