export interface Extension {
  name: string
  id: string
  description: string
  installs: string
  rating: number
  category: string
  tags: string[]
  official?: boolean
}

export const extensionCategories = [
  {
    title: '🤖 AI 编程助手',
    description: '让 AI 帮你写代码、改代码、解释代码',
    extensions: [
      {
        name: 'GitHub Copilot',
        id: 'GitHub.copilot',
        description: '最受欢迎的 AI 编程助手，73M+ 安装量。支持代码补全、对话问答、代理模式',
        installs: '73M+',
        rating: 4.8,
        category: 'AI 助手',
        tags: ['AI', '补全', '聊天'],
      },
      {
        name: 'Claude Code for VS Code',
        id: 'Anthropic.claude-code',
        description: 'Anthropic 官方出品，17M+ 安装量。擅长大型重构、多文件修改、复杂任务',
        installs: '17.7M+',
        rating: 4.7,
        category: 'AI 助手',
        tags: ['AI', '重构', '代理'],
        official: true,
      },
      {
        name: 'Superpowers for Copilot Chat',
        id: 'dwaintr.superpowers-vscode',
        description: '为 Copilot Chat 添加结构化工作流，支持 /plan、/tdd、/review 等命令',
        installs: '500K+',
        rating: 4.6,
        category: 'AI 助手',
        tags: ['AI', '工作流', 'Superpowers'],
      },
      {
        name: 'Cline',
        id: 'saoudrizwan.claude-dev',
        description: '开源 AI 代理，自带 API Key，支持 Plan/Act 模式，4.3M+ 安装',
        installs: '4.3M+',
        rating: 4.7,
        category: 'AI 助手',
        tags: ['AI', '开源', '代理'],
      },
      {
        name: 'Continue',
        id: 'Continue.continue',
        description: '开源 AI 编程助手，支持多种模型（DeepSeek、Claude、GPT），可自托管',
        installs: '2.1M+',
        rating: 4.5,
        category: 'AI 助手',
        tags: ['AI', '开源', '多模型'],
      },
    ],
  },
  {
    title: '🔧 Git 版本控制',
    description: '让代码版本管理一目了然',
    extensions: [
      {
        name: 'GitLens',
        id: 'eamodio.gitlens',
        description: 'Git 超级增强，内联 Blame、提交图、工作树管理，35M+ 下载',
        installs: '35M+',
        rating: 4.9,
        category: 'Git',
        tags: ['Git', 'Blame', '可视化'],
      },
      {
        name: 'Git Graph',
        id: 'mhutchie.git-graph',
        description: '交互式 Git 分支可视化，查看提交历史、创建分支、合并一目了然',
        installs: '14M+',
        rating: 4.8,
        category: 'Git',
        tags: ['Git', '可视化', '分支'],
      },
      {
        name: 'Git History',
        id: 'donjayamanne.githistory',
        description: '按文件、作者、日期搜索 Git 提交历史',
        installs: '12M+',
        rating: 4.5,
        category: 'Git',
        tags: ['Git', '历史', '搜索'],
      },
    ],
  },
  {
    title: '✨ 代码质量',
    description: '让代码更规范、更整洁',
    extensions: [
      {
        name: 'Prettier',
        id: 'esbenp.prettier-vscode',
        description: '代码格式化标配，支持 JS/TS/JSON/Markdown 等，68M+ 安装',
        installs: '68M+',
        rating: 4.8,
        category: '格式化',
        tags: ['格式化', '美化'],
      },
      {
        name: 'ESLint',
        id: 'dbaeumer.vscode-eslint',
        description: 'JavaScript/TypeScript 代码检查，15M+ 安装，团队必备',
        installs: '15M+',
        rating: 4.7,
        category: '代码检查',
        tags: ['Lint', '质量'],
      },
      {
        name: 'Error Lens',
        id: 'usernamehw.errorlens',
        description: '内联显示错误和警告信息，不用鼠标悬停就能看到问题，8M+ 安装',
        installs: '8M+',
        rating: 4.7,
        category: '效率',
        tags: ['错误', '内联'],
      },
      {
        name: 'Pretty TypeScript Errors',
        id: 'yoavbls.pretty-ts-errors',
        description: 'TypeScript 错误信息美化，把晦涩的类型错误变成可读的中文描述',
        installs: '5M+',
        rating: 4.8,
        category: 'TypeScript',
        tags: ['TS', '错误', '美化'],
      },
      {
        name: 'Code Spell Checker',
        id: 'streetsidesoftware.code-spell-checker',
        description: '代码拼写检查，自动检测变量名、注释中的拼写错误',
        installs: '17M+',
        rating: 4.7,
        category: '质量',
        tags: ['拼写', '检查'],
      },
    ],
  },
  {
    title: '🎨 界面美化',
    description: '让 VS Code 看起来更舒服',
    extensions: [
      {
        name: 'Material Icon Theme',
        id: 'pkief.material-icon-theme',
        description: '最流行的文件图标主题，25M+ 安装，让文件类型一目了然',
        installs: '25M+',
        rating: 4.8,
        category: '图标',
        tags: ['图标', '主题'],
      },
      {
        name: 'One Dark Pro',
        id: 'zhuangtongfa.Material-theme',
        description: 'Atom 经典配色主题，持续更新，最受欢迎的深色主题',
        installs: '15M+',
        rating: 4.6,
        category: '主题',
        tags: ['主题', '暗色'],
      },
      {
        name: 'vscode-icons',
        id: 'vscode-icons-team.vscode-icons',
        description: '老牌文件图标集，23M+ 安装，支持更多文件类型',
        installs: '23M+',
        rating: 4.6,
        category: '图标',
        tags: ['图标', '文件'],
      },
      {
        name: 'Catppuccin',
        id: 'Catppuccin.catppuccin-vsc',
        description: '柔和多彩的 VS Code 主题，2025-2026 年最热门配色',
        installs: '6M+',
        rating: 4.9,
        category: '主题',
        tags: ['主题', '多彩', '热门'],
      },
    ],
  },
  {
    title: '⚡ 效率工具',
    description: '让日常工作更高效',
    extensions: [
      {
        name: 'Live Server',
        id: 'ritwickdey.LiveServer',
        description: '一键启动本地开发服务器，实时刷新浏览器，77M+ 安装',
        installs: '77M+',
        rating: 4.6,
        category: '开发',
        tags: ['服务器', '实时刷新'],
      },
      {
        name: 'Path Intellisense',
        id: 'christian-kohler.path-intellisense',
        description: '文件路径自动补全，输入时提示目录结构',
        installs: '18M+',
        rating: 4.6,
        category: '效率',
        tags: ['路径', '补全'],
      },
      {
        name: 'Thunder Client',
        id: 'rangav.vscode-thunder-client',
        description: '轻量级 API 调试工具，VS Code 中的 Postman 替代品',
        installs: '10M+',
        rating: 4.7,
        category: 'API',
        tags: ['API', '请求', '调试'],
      },
      {
        name: 'Todo Tree',
        id: 'Gruntfuggly.todo-tree',
        description: '扫描项目中所有 TODO/FIXME/HACK 注释，集中管理任务',
        installs: '9M+',
        rating: 4.7,
        category: '效率',
        tags: ['TODO', '管理'],
      },
      {
        name: 'Better Comments',
        id: 'aaron-bond.better-comments',
        description: '彩色注释，用不同颜色区分 TODO、FIXME、重要提示等',
        installs: '8M+',
        rating: 4.6,
        category: '效率',
        tags: ['注释', '高亮'],
      },
      {
        name: 'Import Cost',
        id: 'wix.vscode-import-cost',
        description: '在导入语句旁边显示包的大小，避免引入过大的依赖',
        installs: '5M+',
        rating: 4.6,
        category: '性能',
        tags: ['导入', '体积'],
      },
    ],
  },
  {
    title: '🔤 语言支持',
    description: '让 VS Code 更好地支持你用的语言',
    extensions: [
      {
        name: 'Python',
        id: 'ms-python.python',
        description: '微软官方 Python 扩展，含 IntelliSense、调试、环境管理',
        installs: '45M+',
        rating: 4.6,
        category: '语言',
        tags: ['Python', '微软'],
        official: true,
      },
      {
        name: 'Docker',
        id: 'ms-azuretools.vscode-docker',
        description: '微软官方 Docker 扩展，管理容器、镜像、Docker Compose',
        installs: '25M+',
        rating: 4.7,
        category: '工具',
        tags: ['Docker', '容器'],
        official: true,
      },
      {
        name: 'Go',
        id: 'golang.go',
        description: 'Google 官方 Go 语言扩展，调试、测试、代码补全',
        installs: '12M+',
        rating: 4.7,
        category: '语言',
        tags: ['Go', 'Google'],
      },
      {
        name: 'rust-analyzer',
        id: 'rust-lang.rust-analyzer',
        description: 'Rust 语言官方扩展，代码补全、类型检查、重构',
        installs: '8M+',
        rating: 4.8,
        category: '语言',
        tags: ['Rust', 'LSP'],
      },
    ],
  },
]

export function getAllExtensions(): Extension[] {
  return extensionCategories.flatMap((cat) => cat.extensions)
}

export function getExtensionById(id: string): Extension | undefined {
  return getAllExtensions().find((ext) => ext.id === id)
}
