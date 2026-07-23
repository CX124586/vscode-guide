#!/bin/bash
# VS Code 使用指南 — 截图辅助脚本
# 用法: bash scripts/screenshots.sh
# 用途: 创建截图所需的临时项目，方便截取真实 VS Code 截图

set -e

TMP_DIR=/tmp/vscode-screenshots
mkdir -p "$TMP_DIR"

echo "=== VS Code 截图辅助工具 ==="
echo "将在 $TMP_DIR 创建截图用临时文件"
echo "截好的图请保存到 public/images/ 目录"
echo ""

# 1. 界面布局截图
echo "[1/4] 准备界面布局截图..."
cat > "$TMP_DIR/app.tsx" << 'EOF'
import React, { useState } from 'react'

interface User {
  name: string
  age: number
}

export default function App() {
  const [count, setCount] = useState(0)
  const user: User = { name: 'Alice', age: 25 }

  return (
    <div>
      <h1>Hello VS Code</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
    </div>
  )
}
EOF

cat > "$TMP_DIR/index.ts" << 'EOF'
import { createRoot } from 'react-dom/client'
import App from './app'

createRoot(document.getElementById('root')!).render(<App />)
EOF

cat > "$TMP_DIR/package.json" << 'EOF'
{
  "name": "screenshot-demo",
  "dependencies": { "react": "^19", "react-dom": "^19" }
}
EOF

# 2. 多光标截图
echo "[2/4] 准备多光标编辑截图..."
cat > "$TMP_DIR/multicursor-demo.ts" << 'EOF'
// 选中 name  → Cmd+D / Ctrl+D  → 输入 user
const name1 = 'Alice'
const name2 = 'Bob'
const name3 = 'Charlie'
EOF

# 3. Git 截图
echo "[3/4] 准备 Git 截图..."
cd "$TMP_DIR"
git init 2>/dev/null || true
echo "node_modules/" > .gitignore
git add -A 2>/dev/null || true
git commit -m "init" --allow-empty 2>/dev/null || true

# Make some changes for diff view
echo "// 新增代码行" >> app.tsx
echo "// 另一处修改" >> index.ts

# 4. 调试截图
echo "[4/4] 准备调试截图..."
cat > "$TMP_DIR/debug-demo.js" << 'EOF'
function calculate(items) {
  let total = 0
  for (let i = 0; i < items.length; i++) {
    total += items[i].price
  }
  return total
}

const result = calculate([
  { name: 'A', price: 10 },
  { name: 'B', price: 20 },
  { name: 'C', price: 30 },
])
console.log(result)
EOF

echo ""
echo "=== 截图指南 ==="
echo ""
echo "📸 截图 1: 界面布局"
echo "   code $TMP_DIR"
echo "   截取完整 VS Code 窗口（活动栏 + 侧边栏 + 编辑器 + 面板）"
echo "   保存为 public/images/interface-layout.png"
echo ""
echo "📸 截图 2: 多光标编辑"
echo "   打开 multicursor-demo.ts"
echo "   选中 name → Cmd+D 三次 → 输入 user"
echo "   截取编辑器区域"
echo "   保存为 public/images/multicursor.png"
echo ""
echo "📸 截图 3: Git 面板"
echo "   打开源代码管理面板 (Cmd+Shift+G)"
echo "   截取侧边栏 Git 视图（暂存/变更/Diff）"
echo "   保存为 public/images/git-panel.png"
echo ""
echo "📸 截图 4: 调试界面"
echo "   在 debug-demo.js 行 5 加断点 (F9)"
echo "   按 F5 启动调试"
echo "   截取调试侧边栏（变量/监视/堆栈）"
echo "   保存为 public/images/debugger-panel.png"
echo ""
echo "截图完成后运行以下命令替换 SVG："
echo "  (SVG 文件路径不变，HTML 自动引用)"
echo ""
echo "推荐截图设置："
echo "  - 窗口宽度: 1200px"
echo "  - 主题: Default Dark+"
echo "  - 字体: 14px"
echo "  - 关闭 mini map 以获得更干净的截图"
