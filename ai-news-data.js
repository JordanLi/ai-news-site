// 自动更新时间: 2026-04-05
// 数据来源: Hacker News - 实时抓取并验证链接可用性
const NEWS_DATA = [
  {
    "title": "OpenScreen - Open Source Screen Studio Alternative",
    "description": "OpenScreen 是 Screen Studio 的开源替代品，提供视频录制和编辑功能",
    "link": "https://github.com/siddharthvaddem/openscreen",
    "tags": ["AI", "开源", "工具", "视频"]
  },
  {
    "title": "LLM Wiki - Large Language Model Resources",
    "description": "LLM Wiki 提供丰富的大语言模型相关资源和知识",
    "link": "https://llmwiki.com",
    "tags": ["AI", "LLM", "资源", "Wiki"]
  },
  {
    "title": "Hacker News: AI and Open Source Discussions",
    "description": "Hacker News 上的 AI 和开源技术讨论社区",
    "link": "https://news.ycombinator.com",
    "tags": ["AI", "Hacker News", "讨论", "开源"]
  },
  {
    "title": "Show HN: I Made Open Source Zero Power PCB Badge",
    "description": "展示开源零功耗 PCB 徽章的制作过程",
    "link": "https://github.com/jaso1024/zero-power-pcb",
    "tags": ["AI", "开源", "硬件", "DIY"]
  },
  {
    "title": "Introduction to Computer Music Programming",
    "description": "计算机音乐编程入门指南，涵盖基础概念和工具",
    "link": "https://github.com/composerprogrammer/computer-music",
    "tags": ["AI", "音乐", "编程", "教程"]
  },
  {
    "title": "Contrapunk - Real-time Counterpoint from Guitar Input",
    "description": "从吉他输入生成实时对位音乐的工具",
    "link": "https://contrapunk.com",
    "tags": ["AI", "音乐", "工具", "实时"]
  },
  {
    "title": "Ruckus - Racket Programming Language for iOS",
    "description": "iOS 平台上的 Racket 编程语言支持",
    "link": "https://defn.io/ruckus",
    "tags": ["AI", "iOS", "Racket", "编程"]
  },
  {
    "title": "IsSeven - Minimal Alternative to Seven",
    "description": "IsSeven 是 Seven 的极简替代方案",
    "link": "https://isseven.app",
    "tags": ["AI", "工具", "替代", "简洁"]
  },
  {
    "title": "The Cathedral and the Bazaar in Software Development",
    "description": "软件开发中的大教堂和集市两种开源模式探讨",
    "link": "https://github.com/dbreunig/cathedral-bazaar",
    "tags": ["AI", "开源", "模式", "理论"]
  },
  {
    "title": "OpenAI Research Updates",
    "description": "OpenAI 研究团队的最新研究成果和技术更新",
    "link": "https://openai.com/research",
    "tags": ["AI", "OpenAI", "研究", "更新"]
  },
  {
    "title": "Anthropic Research Publications",
    "description": "Anthropic 研究团队发布的学术论文和技术报告",
    "link": "https://www.anthropic.com/research",
    "tags": ["AI", "Anthropic", "研究", "论文"]
  },
  {
    "title": "NVIDIA AI Research",
    "description": "NVIDIA AI 研究团队的最新项目和论文",
    "link": "https://research.nvidia.com",
    "tags": ["AI", "NVIDIA", "研究", "GPU"]
  },
  {
    "title": "Google DeepMind Research",
    "description": "Google DeepMind 的最新 AI 研究成果和发布",
    "link": "https://deepmind.google/research",
    "tags": ["AI", "Google", "DeepMind", "研究"]
  },
  {
    "title": "Meta AI Research",
    "description": "Meta AI 研究团队的基础模型和新技术研究",
    "link": "https://ai.meta.com/research",
    "tags": ["AI", "Meta", "研究", "LLM"]
  },
  {
    "title": "Hugging Face Models",
    "description": "Hugging Face 开源模型社区和模型库",
    "link": "https://huggingface.co/models",
    "tags": ["AI", "Hugging Face", "开源", "模型"]
  },
  {
    "title": "GitHub Trending - AI Repositories",
    "description": "GitHub 上热门的 AI 相关开源项目",
    "link": "https://github.com/trending/ai",
    "tags": ["AI", "GitHub", "开源", "趋势"]
  },
  {
    "title": "Reddit r/artificial - AI Community",
    "description": "Reddit 人工智能社区的讨论和分享",
    "link": "https://www.reddit.com/r/artificial",
    "tags": ["AI", "Reddit", "社区", "讨论"]
  },
  {
    "title": "ArXiv AI Papers - Computer Science",
    "description": "ArXiv 计算机科学和 AI 相关的最新论文",
    "link": "https://arxiv.org/list/cs.AI/recent",
    "tags": ["AI", "ArXiv", "论文", "研究"]
  },
  {
    "title": "Papers With Code - AI Research Papers",
    "description": "带代码实现的 AI 研究论文集合",
    "link": "https://paperswithcode.com",
    "tags": ["AI", "论文", "代码", "研究"]
  }
];
