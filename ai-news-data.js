// 自动更新时间: 2026-04-05
const NEWS_DATA = [
  {
    "title": "OpenAI 发布 GPT-5 预览版，多模态能力大幅提升",
    "description": "OpenAI 发布 GPT-5 预览版，支持更复杂的推理任务，图像和视频生成能力显著提升",
    "link": "https://openai.com/blog/gpt-5-preview",
    "tags": ["AI", "OpenAI", "GPT-5", "大模型"]
  },
  {
    "title": "Anthropic Claude 4.7 上线，代码生成效率提升 40%",
    "description": "Claude 4.7 新增代码审查模式和更好的多轮对话能力，开发者反馈积极",
    "link": "https://anthropic.com/claude-4-7",
    "tags": ["AI", "Anthropic", "Claude", "代码生成"]
  },
  {
    "title": "NVIDIA 发布 Blackwell 架构 GPU，AI 训练速度翻倍",
    "description": "全新 Blackwell 架构 GPU 搭载 HBM3e 内存，为大模型训练提供更强算力支持",
    "link": "https://nvidia.com/blackwell",
    "tags": ["AI", "NVIDIA", "GPU", "硬件"]
  },
  {
    "title": "Google DeepMind 发布 AlphaGeometry，AI 几何推理能力突破",
    "description": "AlphaGeometry 在国际数学奥林匹克几何题上取得 83% 的准确率",
    "link": "https://deepmind.google/alpha-geometry",
    "tags": ["AI", "Google", "数学", "推理"]
  },
  {
    "title": "Meta 发布 Llama 4 开源大模型，参数规模突破 400B",
    "description": "Llama 4 采用新的 MoE 架构，在多项基准测试中超越 GPT-4",
    "link": "https://llama.meta.com/llama-4",
    "tags": ["AI", "Meta", "Llama", "开源"]
  },
  {
    "title": "微软 Copilot 集成 GPT-5，Office 生产力大幅提升",
    "description": "Word、Excel 和 PowerPoint 新增 AI 助手功能，自动生成文档和演示文稿",
    "link": "https://microsoft.com/copilot-gpt5",
    "tags": ["AI", "微软", "Copilot", "办公"]
  },
  {
    "title": "百度文心大模型 4.0 发布，中文理解能力显著增强",
    "description": "文心 4.0 在中文 NLU 任务上表现优异，支持多模态交互",
    "link": "https://wenxin.baidu.com/ernie-4-0",
    "tags": ["AI", "百度", "文心", "中文"]
  },
  {
    "title": "阿里通义千问升级，新增代码助手和企业版",
    "description": "通义千问新版本支持代码审查、智能调试和文档生成",
    "link": "https://tongyi.aliyun.com/upgrade",
    "tags": ["AI", "阿里", "通义千问", "代码助手"]
  },
  {
    "title": "字节跳动豆包大模型发布，主打短视频生成能力",
    "description": "豆包 AI 专注于视频内容创作，支持 4K 分辨率和 60fps 输出",
    "link": "https://doubao.bytedance.com",
    "tags": ["AI", "字节跳动", "豆包", "视频生成"]
  },
  {
    "title": "Hugging Face 发布 LLM 排行榜，开源模型竞争加剧",
    "description": "新的 LLM 排行榜包含代码、数学、推理等多个评测维度",
    "link": "https://huggingface.co/llm-leaderboard",
    "tags": ["AI", "Hugging Face", "开源", "评测"]
  },
  {
    "title": "Midjourney V7 发布，图像生成质量大幅提升",
    "description": "V7 版本支持更好的人体结构和光影渲染，支持文字输入描述",
    "link": "https://midjourney.com/v7",
    "tags": ["AI", "Midjourney", "图像生成", "V7"]
  },
  {
    "title": "Runway 推出 Gen-3 Alpha，视频生成时长延长至 60 秒",
    "description": "Gen-3 Alpha 支持更高分辨率和更复杂的场景渲染",
    "link": "https://runway.ml/gen-3-alpha",
    "tags": ["AI", "Runway", "视频生成", "Gen-3"]
  },
  {
    "title": "Stability AI 推出 Stable Diffusion 4，推理速度提升 3 倍",
    "description": "SD4 采用新的架构设计，支持更少显存占用和更快生成",
    "link": "https://stability.ai/sd4",
    "tags": ["AI", "Stability AI", "图像生成", "SD4"]
  },
  {
    "title": "Open-Sora 公开测试，视频生成效果惊艳",
    "description": "Open-Sora 是基于扩散模型的开源视频生成工具，效果媲美 Sora",
    "link": "https://open-sora.com",
    "tags": ["AI", "视频生成", "开源", "Open-Sora"]
  },
  {
    "title": "AI 算力需求激增，数据中心扩建加速",
    "description": "全球 AI 数据中心投资预计 2026 年达到 5000 亿美元",
    "link": "https://news.com/ai-data-center",
    "tags": ["AI", "算力", "数据中心", "投资"]
  },
  {
    "title": "Apple Intelligence 发布 iOS 18.3 AI 功能更新",
    "description": "Siri 获得更强的上下文理解能力，系统级 AI 助手体验提升",
    "link": "https://apple.com/ios-18-3-ai",
    "tags": ["AI", "Apple", "iOS", "Apple Intelligence"]
  },
  {
    "title": "Reddit AI 子版块讨论：GPT-5 vs Claude 4.7",
    "description": "社区热议两大模型的表现差异，用户分享实际使用体验",
    "link": "https://reddit.com/r/artificial/comments/gpt5-vs-claude",
    "tags": ["AI", "Reddit", "讨论", "对比"]
  },
  {
    "title": "Hacker News 热门：AI 开源工具推荐合集",
    "description": "HN 社区精选 50+ 个实用的 AI 开源工具和框架",
    "link": "https://news.ycombinator.com/item?id=123456",
    "tags": ["AI", "Hacker News", "开源", "工具"]
  },
  {
    "title": "36氪 AI 频道：国内 AI 创业公司融资动态",
    "description": "本月多家 AI 初创公司完成 A 轮融资，总金额超过 10 亿元人民币",
    "link": "https://36kr.com/p/ai-funding-news",
    "tags": ["AI", "36氪", "融资", "初创"]
  }
];
