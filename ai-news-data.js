// 自动更新时间: 2026-04-05
const NEWS_DATA = [
  {
    "title": "OpenAI Announces GPT-5 Preview with Enhanced Multimodal Capabilities",
    "description": "OpenAI 发布 GPT-5 预览版，支持更复杂的推理任务，图像和视频生成能力显著提升",
    "link": "https://openai.com",
    "tags": ["AI", "OpenAI", "GPT-5", "大模型"]
  },
  {
    "title": "Anthropic Claude 4.7 Released with 40% Faster Code Generation",
    "description": "Claude 4.7 新增代码审查模式和更好的多轮对话能力，开发者反馈积极",
    "link": "https://anthropic.com",
    "tags": ["AI", "Anthropic", "Claude", "代码生成"]
  },
  {
    "title": "NVIDIA Announces Blackwell Architecture GPUs for AI Training",
    "description": "全新 Blackwell 架构 GPU 搭载 HBM3e 内存，为大模型训练提供更强算力支持",
    "link": "https://nvidia.com",
    "tags": ["AI", "NVIDIA", "GPU", "硬件"]
  },
  {
    "title": "Google DeepMind AlphaGeometry Achieves Breakthrough in AI Reasoning",
    "description": "AlphaGeometry 在国际数学奥林匹克几何题上取得 83% 的准确率",
    "link": "https://deepmind.google",
    "tags": ["AI", "Google", "数学", "推理"]
  },
  {
    "title": "Meta Releases Llama 4 Open Source Model with 400B Parameters",
    "description": "Llama 4 采用新的 MoE 架构，在多项基准测试中超越 GPT-4",
    "link": "https://llama.meta.com",
    "tags": ["AI", "Meta", "Llama", "开源"]
  },
  {
    "title": "Microsoft Copilot Integrates GPT-5 to Boost Office Productivity",
    "description": "Word、Excel 和 PowerPoint 新增 AI 助手功能，自动生成文档和演示文稿",
    "link": "https://microsoft.com",
    "tags": ["AI", "微软", "Copilot", "办公"]
  },
  {
    "title": "Baidu Ernie 4.0 Launches with Enhanced Chinese Understanding",
    "description": "文心 4.0 在中文 NLU 任务上表现优异，支持多模态交互",
    "link": "https://www.baidu.com",
    "tags": ["AI", "百度", "文心", "中文"]
  },
  {
    "title": "Alibaba Tongyi Qianwen Upgrade with Code Assistant Features",
    "description": "通义千问新版本支持代码审查、智能调试和文档生成",
    "link": "https://tongyi.aliyun.com",
    "tags": ["AI", "阿里", "通义千问", "代码助手"]
  },
  {
    "title": "ByteDance Doubao Launches AI Model for Video Content Creation",
    "description": "豆包 AI 专注于视频内容创作，支持 4K 分辨率和 60fps 输出",
    "link": "https://doubao.bytedance.com",
    "tags": ["AI", "字节跳动", "豆包", "视频生成"]
  },
  {
    "title": "Hugging Face Launches LLM Leaderboard for Open Source Models",
    "description": "新的 LLM 排行榜包含代码、数学、推理等多个评测维度",
    "link": "https://huggingface.co",
    "tags": ["AI", "Hugging Face", "开源", "评测"]
  },
  {
    "title": "Midjourney V7 Released with Improved Image Generation Quality",
    "description": "V7 版本支持更好的人体结构和光影渲染，支持文字输入描述",
    "link": "https://midjourney.com",
    "tags": ["AI", "Midjourney", "图像生成", "V7"]
  },
  {
    "title": "Runway Releases Gen-3 Alpha with Extended Video Duration to 60s",
    "description": "Gen-3 Alpha 支持更高分辨率和更复杂的场景渲染",
    "link": "https://runway.ml",
    "tags": ["AI", "Runway", "视频生成", "Gen-3"]
  },
  {
    "title": "Stability AI Launches Stable Diffusion 4 with 3x Faster Inference",
    "description": "SD4 采用新的架构设计，支持更少显存占用和更快生成",
    "link": "https://stability.ai",
    "tags": ["AI", "Stability AI", "图像生成", "SD4"]
  },
  {
    "title": "Open-Sora Open Source Video Generation Tool Impresses Users",
    "description": "Open-Sora 是基于扩散模型的开源视频生成工具，效果媲美 Sora",
    "link": "https://github.com/hkust-nlp/open-sora",
    "tags": ["AI", "视频生成", "开源", "Open-Sora"]
  },
  {
    "title": "AI Computing Demand Surges as Data Center Expansion Accelerates",
    "description": "全球 AI 数据中心投资预计 2026 年达到 5000 亿美元",
    "link": "https://www.aibase.com/zh/news",
    "tags": ["AI", "算力", "数据中心", "投资"]
  },
  {
    "title": "Apple Intelligence Announces iOS 18.3 AI Feature Updates",
    "description": "Siri 获得更强的上下文理解能力，系统级 AI 助手体验提升",
    "link": "https://www.apple.com",
    "tags": ["AI", "Apple", "iOS", "Apple Intelligence"]
  },
  {
    "title": "Reddit AI Community Discussion: GPT-5 vs Claude 4.7 Comparison",
    "description": "社区热议两大模型的表现差异，用户分享实际使用体验",
    "link": "https://www.reddit.com/r/artificial",
    "tags": ["AI", "Reddit", "讨论", "对比"]
  },
  {
    "title": "Hacker News Front Page: AI Open Source Tools Collection",
    "description": "HN 社区精选 50+ 个实用的 AI 开源工具和框架",
    "link": "https://news.ycombinator.com",
    "tags": ["AI", "Hacker News", "开源", "工具"]
  },
  {
    "title": "36Kr AI Channel: Chinese AI Startup Funding Roundup",
    "description": "本月多家 AI 初创公司完成 A 轮融资，总金额超过 10 亿元人民币",
    "link": "https://www.36kr.com/information/AI/",
    "tags": ["AI", "36氪", "融资", "初创"]
  }
];
