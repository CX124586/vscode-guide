---
name: vscode-guide-deployment
description: VS Code 使用指南网站部署信息
metadata:
  type: project
---

**网站域名：** https://website-tc23.vercel.app（Vercel，国外可访问）
**GitHub 仓库：** CX124586/vscode-guide
**技术栈：** Next.js 16 (App Router) + Tailwind CSS v4 + MDX
**内容数量：** 16 篇教程（macOS 13 + Windows 3）
**部署方式：** `git push` 自动触发 Vercel 部署

## 已实现功能
- ✅ 13 篇 macOS 完整教程（安装→Superpowers AI 工作流）
- ✅ 3 篇 Windows 教程（安装、快捷键、WSL）
- ✅ 双平台路由 /docs/macos/* 和 /docs/windows/*
- ✅ 侧边栏平台切换（macOS/Windows）
- ✅ 搜索框（侧边栏，搜索标题/描述/标签）
- ✅ TOC 浮动目录（右侧，滚动高亮）
- ✅ 反馈链接（GitHub 编辑 + 提 Issue）
- ✅ 自动部署（Git push → Vercel）
- ✅ 静态导出（npm run build → out/）

## Windows 待补充
扩展生态、编辑超能力、Git、调试、设置定制、Tasks、性能调优

## 国内访问
当前部署在 Vercel（.vercel.app），国内可能被屏蔽。
静态导出产物在 out/ 目录，可上传到阿里云 OSS + CDN 实现国内高速访问。
