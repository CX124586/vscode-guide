---
name: vscode-guide-deployment
description: VS Code 使用指南网站部署信息（完整版）
metadata:
  type: project
---

**网站域名：** https://website-tc23.vercel.app
**GitHub 仓库：** CX124586/vscode-guide
**技术栈：** Next.js 16 (App Router, static export) + Tailwind CSS v4 + MDX
**部署方式：** `git push` 自动触发 Vercel 部署

## 内容
- macOS：13 篇（入门→高阶，含 Superpowers AI 工作流）
- Windows：12 篇（关键差异 + 引用 macOS 详文）

## 已实现功能
- ✅ 29 篇教程覆盖 macOS + Windows
- ✅ 双平台路由 /docs/macos/* /docs/windows/*
- ✅ 侧边栏平台切换 + 文章搜索
- ✅ TOC 浮动目录（滚动高亮）
- ✅ SVG 图示（界面布局/调试器/Git面板/多光标）
- ✅ 首页数据统计（文章数/字数/更新日期）
- ✅ 暗色模式（滚动条/SVG/blockquote/h2边框适配）
- ✅ 中文排版优化（justify对齐/行高/分割线）
- ✅ PWA（离线缓存 + 可安装 + manifest + Service Worker）
- ✅ 反馈入口（GitHub 编辑 + 提 Issue）
- ✅ 自动部署（Git push → Vercel）

## 静态导出
`npm run build` → `out/`（3.6MB，可直接上传 OSS/CDN）
