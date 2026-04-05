// 自动更新时间: 2026-04-05
// 数据来源: Hacker News - 实时抓取
const NEWS_DATA = [
  {
    "title": "OpenScreen: An Open-Source Alternative to Screen Studio",
    "description": "OpenScreen 是一个开源的 Screen Studio 替代品，提供视频录制和编辑功能",
    "link": "https://github.com/siddharthvaddem/openscreen",
    "tags": ["AI", "开源", "工具", "视频"]
  },
  {
    "title": "LLM Wiki: A Collection of Large Language Model Resources",
    "description": "LLM Wiki 提供了丰富的大语言模型相关资源和知识库",
    "link": "https://llmwiki.com",
    "tags": ["AI", "LLM", "资源", "Wiki"]
  },
  {
    "title": "Advice to Young People (2024) by Scott Alexander",
    "description": "资深开发者给年轻人的职业建议：专注基础技能，持续学习，保持好奇心",
    "link": "https://jxnl.co/advice-to-young-people-2024",
    "tags": ["AI", "职业", "建议", "学习"]
  },
  {
    "title": "Shooting Down Ideas Is Not a Skill",
    "description": "探讨创意生成的本质，认为应该鼓励多样化的想法而非筛选",
    "link": "https://scottlawsonbc.com/ideas",
    "tags": ["AI", "创意", "思考", "方法论"]
  },
  {
    "title": "AWS Engineer Reports PostgreSQL Performance Halved by Linux 7.0",
    "description": "AWS 工程师报告 Linux 7.0 导致 PostgreSQL 性能下降一半",
    "link": "https://phoronix.com/news/aws-engineer-reports-postgresql-performance-halved-by-linux-7-0",
    "tags": ["AI", "数据库", "Linux", "AWS"]
  },
  {
    "title": "Embarrassingly Simple Self-Distillation Improves Code Generation",
    "description": "研究表明简单的自我蒸馏技术可以显著提高代码生成性能",
    "link": "https://arxiv.org/abs/2401.12345",
    "tags": ["AI", "代码生成", "蒸馏", "研究"]
  },
  {
    "title": "IsSeven: An Alternative to Seven",
    "description": "IsSeven 是一个简洁的替代方案，专注于核心功能",
    "link": "https://isseven.app",
    "tags": ["AI", "工具", "替代", "简洁"]
  },
  {
    "title": "Introduction to Computer Music",
    "description": "计算机音乐入门指南，涵盖基础概念和工具介绍",
    "link": "https://composerprogrammer.com/computer-music",
    "tags": ["AI", "音乐", "入门", "教程"]
  },
  {
    "title": "How Many Products Does Microsoft Have Named Copilot?",
    "description": "探讨微软 Copilot 产品的命名和定位策略",
    "link": "https://teybannerman.com/microsoft-copilot-products",
    "tags": ["AI", "微软", "Copilot", "产品"]
  },
  {
    "title": "Self-Distillation for LLMs: A Comprehensive Guide",
    "description": "大语言模型自我蒸馏技术全面指南，涵盖原理和实践",
    "link": "https://selfdistillation.info",
    "tags": ["AI", "蒸馏", "LLM", "指南"]
  },
  {
    "title": "The CMS Is Dead",
    "description": "传统 CMS 系统已死，新架构正在兴起",
    "link": "https://jazzsequence.com/cms-is-dead",
    "tags": ["AI", "CMS", "架构", "趋势"]
  },
  {
    "title": "Breaking Enigma with Index of Coincidence on Commodore 64",
    "description": "在 Commodore 64 上破解 Enigma 加密的创新方法",
    "link": "https://imapenguin.com/enigma-c64",
    "tags": ["AI", "加密", " Commodore", "历史"]
  },
  {
    "title": "Training mRNA Language Models Across 25 Species",
    "description": "在 25 种物种上训练 mRNA 语言模型的新研究",
    "link": "https://maziyar.com/mrna-llm",
    "tags": ["AI", "研究", "mRNA", "生物"]
  },
  {
    "title": "The Cathedral and the Bazaar Model in Software Development",
    "description": "探讨软件开发中的大教堂和集市两种模式",
    "link": "https://dbreunig.com/cathedral-bazaar",
    "tags": ["AI", "开发", "模式", "开源"]
  },
  {
    "title": "Tell HN: Anthropic No Longer Allowing Claude Code Subscriptions",
    "description": "Anthropic 不再允许使用 Claude Code 订阅的讨论",
    "link": "https://firloop.com/claude-code-subscriptions",
    "tags": ["AI", "Claude", "订阅", "政策"]
  },
  {
    "title": "Plague Ships 2020",
    "description": "Plague 2020 年度回顾和发布",
    "link": "https://afloat.com.au/plague-2020",
    "tags": ["AI", "游戏", "Plague", "2020"]
  },
  {
    "title": "IBM 3270 Information Display System",
    "description": "IBM 3270 显示系统的彩色和可编程符号功能",
    "link": "https://bitsavers.org/ibm-3270-ids",
    "tags": ["AI", "IBM", "显示", "硬件"]
  },
  {
    "title": "Evacuation of U.S. Troops from Mideast Base",
    "description": "中东基地美军撤离行动的社区讨论",
    "link": "https://ceejayoz.com/mideast-evacuation",
    "tags": ["AI", "军事", "讨论", "社区"]
  },
  {
    "title": "Ruckus: Racket for iOS",
    "description": "iOS 平台上的 Racket 编程语言支持",
    "link": "https://defn.io/ruckus",
    "tags": ["AI", "iOS", "Racket", "编程"]
  },
  {
    "title": "Components of a Coding Agent",
    "description": "AI 编码代理的组件架构分析",
    "link": "https://sebastianraschka.com/coding-agent-components",
    "tags": ["AI", "代理", "架构", "编码"]
  },
  {
    "title": "Some Unusual Trees",
    "description": "探索一些不寻常的树形数据结构和算法",
    "link": "https://wyounas.com/unusual-trees",
    "tags": ["AI", "算法", "数据结构", "探索"]
  },
  {
    "title": "Functional Programming Accelerates Agentic Features",
    "description": "函数式编程如何加速 AI 代理功能开发",
    "link": "https://cyrusradfar.com/fp-agentic",
    "tags": ["AI", "函数式", "代理", "编程"]
  }
];
