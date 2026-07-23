---
name: vscode-guide-deployment
description: VS Code 使用指南 — 项目完整状态
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

## 设计资源
- SVG 图示：interface-layout, debugger-panel, git-panel, multicursor,
            windows-installer, windows-terminal, wsl-architecture
- 截图脚本：`bash scripts/screenshots.sh` 创建截图用临时项目
- 视频占位：VideoEmbed 组件嵌入 5 个关键页面

## 功能清单
- [x] 29 篇教程覆盖 macOS + Windows
- [x] 双平台路由 + 侧边栏切换
- [x] 文章搜索 + TOC 浮动目录
- [x] SVG 图示 + 视频占位
- [x] 首页统计 + 暗色模式 + 中文排版
- [x] PWA（离线缓存 + 可安装 + Service Worker）
- [x] 反馈入口（GitHub 编辑 + 提 Issue）
- [x] 截图辅助脚本
- [x] 自动部署（Git push → Vercel）
- [x] 静态导出 3.6MB
