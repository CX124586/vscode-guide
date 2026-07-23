# 截图与媒体资源

## 截图辅助脚本

```bash
bash scripts/screenshots.sh
```

该脚本会创建 `/tmp/vscode-screenshots/` 目录，包含截图所需的示例文件，并打印详细截图指南。

## SVG 图示说明

当前所有图示为 SVG 矢量图，存放在 `public/images/`：

| 文件名 | 用于哪篇文章 | 说明 |
|--------|-------------|------|
| `interface-layout.svg` | macOS > 界面布局 | VS Code 完整窗口布局 |
| `debugger-panel.svg` | macOS > 调试技巧 | 调试器变量/监视/堆栈 |
| `git-panel.svg` | macOS > Git 集成 | 源代码管理面板 + Diff |
| `multicursor.svg` | macOS > 编辑超能力 | 多光标前后对比 |
| `windows-installer.svg` | Windows > 安装配置 | 安装程序选项 |
| `windows-terminal.svg` | Windows > 集成终端 | PowerShell 终端 |
| `wsl-architecture.svg` | Windows > WSL | WSL 2 三层架构 |

## 替换为真实截图

想用真实 VS Code 截图替换 SVG：

1. 运行 `bash scripts/screenshots.sh` 获取操作指南
2. 按照指南截取真实截图，保存为 **同文件名 .png** 到 `public/images/`
3. 更新对应 MDX 文件的引用（`interface-layout.svg` → `interface-layout.png`）

> 建议在截图前关闭 minimap，固定窗口宽度为 1200px，使用 Default Dark+ 主题
