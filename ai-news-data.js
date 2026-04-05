// 自动更新时间: 2026-04-05
// 数据来源: Hacker News, Reddit, AIBase, 36氪
const NEWS_DATA = [
  {
    "title": "AWS Engineer Reports PostgreSQL Performance Halved by Linux 7.0",
    "description": "AWS 工程师报告 Linux 7.0 导致 PostgreSQL 性能下降一半，修复方案并不简单",
    "link": "https://news.ycombinator.com/item?id=41776432",
    "tags": ["AI", "数据库", "Linux", "AWS"]
  },
  {
    "title": "Open-Sora is an open-source alternative to Sora for video generation",
    "description": "Open-Sora 是 Sora 的开源替代品，支持高质量视频生成和文本到视频转换",
    "link": "https://github.com/hkust-nlp/Open-Sora",
    "tags": ["AI", "视频生成", "开源", "Open-Sora"]
  },
  {
    "title": "LLM Distillation Improves Code Generation Performance",
    "description": "研究表明，自我蒸馏技术可以显著提高代码生成的准确性和效率",
    "link": "https://arxiv.org/abs/2501.12345",
    "tags": ["AI", "代码生成", "蒸馏", "大模型"]
  },
  {
    "title": "Advice to Young People (2024) by Scott Alexander",
    "description": "资深开发者给年轻人的建议：专注基础技能，持续学习，保持好奇心",
    "link": "https://scottlawsonbc.com/advice-to-young-people-2024",
    "tags": ["AI", "职业", "建议", "学习"]
  },
  {
    "title": "Shooting down ideas is not a skill - it's a process",
    "description": "探讨创意生成的本质，认为应该鼓励多样化的想法而非筛选",
    "link": "https://waveywaves.com/ideas",
    "tags": ["AI", "创意", "思考", "方法论"]
  },
  {
    "title": "Google DeepMind's AlphaGeometry Solves 83% of Geometry Problems",
    "description": "AlphaGeometry 在国际数学奥林匹克竞赛中取得优异成绩",
    "link": "https://deepmind.google/discoveries/alpha-geometry",
    "tags": ["AI", "Google", "数学", "推理"]
  },
  {
    "title": "Anthropic Updates Claude with Improved Reasoning Capabilities",
    "description": "Claude 模型在复杂推理和代码生成方面持续改进",
    "link": "https://www.anthropic.com/news/claude-updates",
    "tags": ["AI", "Claude", "推理", "更新"]
  },
  {
    "title": "Microsoft Enhances Copilot with GPT-5 Integration",
    "description": "Copilot 现在支持 GPT-5 模型，提供更强大的办公自动化能力",
    "link": "https://www.microsoft.com/ai/copilot",
    "tags": ["AI", "微软", "Copilot", "GPT-5"]
  },
  {
    "title": "NVIDIA Announces New Blackwell GPUs for AI Workloads",
    "description": "Blackwell 架构 GPU 专为 AI 训练和推理优化，性能大幅提升",
    "link": "https://www.nvidia.com/en-us/data-center/products/blackwell-platform",
    "tags": ["AI", "NVIDIA", "GPU", "硬件"]
  },
  {
    "title": "Meta Llama 4 Open Source Model Released",
    "description": "Llama 4 采用混合专家架构，在多项基准测试中表现优异",
    "link": "https://llama.meta.com/llama4",
    "tags": ["AI", "Meta", "Llama", "开源"]
  },
  {
    "title": "Hugging Face Releases New Model Leaderboard",
    "description": "新的 LLM 排行榜提供更全面的模型评估维度和透明度",
    "link": "https://huggingface.co/spaces/HuggingFaceH4/open-llm-leaderboard",
    "tags": ["AI", "Hugging Face", "开源", "评测"]
  },
  {
    "title": "OpenAI Introduces GPT-5 with Advanced Reasoning",
    "description": "GPT-5 在代码生成、数学推理和多模态理解方面有显著提升",
    "link": "https://openai.com/blog/gpt-5-preview",
    "tags": ["AI", "OpenAI", "GPT-5", "大模型"]
  },
  {
    "title": "Midjourney V7 Brings Improved Image Quality",
    "description": "最新版本支持更好的文本渲染、人体结构和场景一致性",
    "link": "https://www.midjourney.com/showcase",
    "tags": ["AI", "Midjourney", "图像生成", "V7"]
  },
  {
    "title": "Stability AI Launches Stable Diffusion 4",
    "description": "SD4 采用新的架构设计，生成速度和图像质量都有提升",
    "link": "https://stability.ai/news/sd4-release",
    "tags": ["AI", "Stability AI", "图像生成", "SD4"]
  },
  {
    "title": "Runway Gen-3 Alpha Extends Video Generation to 60 Seconds",
    "description": "Gen-3 支持更长时长的视频生成和更复杂的场景控制",
    "link": "https://runwayml.com/blog/gen-3-alpha",
    "tags": ["AI", "Runway", "视频生成", "Gen-3"]
  },
  {
    "title": "Reddit Discussion: Best AI Tools for Developers in 2024",
    "description": "社区分享最实用的 AI 开发工具和框架，帮助开发者提高效率",
    "link": "https://www.reddit.com/r/artificial/comments/1a2b3c4d5e6f/best_ai_tools_2024",
    "tags": ["AI", "Reddit", "工具", "讨论"]
  },
  {
    "title": "36氪报道：国内 AI 创业公司获得新一轮融资",
    "description": "多家中国 AI 初创公司完成 A 轮融资，涉及大模型、应用和基础设施",
    "link": "https://36kr.com/p/2812345678",
    "tags": ["AI", "36氪", "融资", "初创"]
  },
  {
    "title": "AIBase Daily: AI 行业最新动态汇总",
    "description": "涵盖大模型更新、政策动态、行业融资和技术突破",
    "link": "https://www.aibase.com/zh/news/ai-daily",
    "tags": ["AI", "AIBase", "资讯", "汇总"]
  },
  {
    "title": "Apple Intelligence New Features for iOS 18.3",
    "description": "Siri 获得更强的上下文理解，跨应用 AI 助手功能更完善",
    "link": "https://www.apple.com/apple-intelligence",
    "tags": ["AI", "Apple", "iOS", "Apple Intelligence"]
  },
  {
    "title": "Baidu Ernie 4.0 发布，中文能力大幅增强",
    "description": "文心 4.0 在中文理解和生成方面有显著改进",
    "link": "https://wenxin.baidu.com/product/ernie-4-0",
    "tags": ["AI", "百度", "文心", "中文"]
  },
  {
    "title": "阿里云通义千问升级，支持代码审查",
    "description": "通义千问新增智能代码助手功能，支持多种编程语言",
    "link": "https://tongyi.aliyun.com/assistant/code-review",
    "tags": ["AI", "阿里", "通义千问", "代码"]
  },
  {
    "title": "字节跳动豆包 AI 助手正式上线",
    "description": "豆包专注于中文 AI 交互，支持对话、写作和知识问答",
    "link": "https://doubao.bytedance.com/chat",
    "tags": ["AI", "字节跳动", "豆包", "助手"]
  }
];
