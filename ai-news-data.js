// 自动更新时间: 2026-04-05
// 数据来源: Hacker News (国际) + 36氪 AI 频道 (国内)
const NEWS_DATA = [
  {
    "title": "Show HN: A game where you build a GPU",
    "description": "Thought resources for GPU arch were lacking, so here we are - 一个让你构建GPU的游戏",
    "link": "https://jaso1024.com/mvidia/",
    "tags": ["GPU", "游戏", "硬件"],
    "source": "Hacker News"
  },
  {
    "title": "How many products does Microsoft have named 'Copilot'?",
    "description": "微软到底有多少产品命名为Copilot？一篇全面的盘点分析",
    "link": "https://teybannerman.com/strategy/2026/03/31/how-many-microsoft-copilot-are-there.html",
    "tags": ["微软", "Copilot", "AI"],
    "source": "Hacker News"
  },
  {
    "title": "Introduction to Computer Music",
    "description": "计算机音乐入门教程 PDF 文档",
    "link": "https://composerprogrammer.com/introductiontocomputermusic.pdf",
    "tags": ["音乐", "计算机", "教程"],
    "source": "Hacker News"
  },
  {
    "title": "Writing Lisp Is AI Resistant and I'm Sad",
    "description": "为什么写Lisp代码难以被AI替代？作者的深度思考",
    "link": "https://blog.djhaskin.com/blog/writing-lisp-is-ai-resistant-and-im-sad/",
    "tags": ["Lisp", "编程", "AI"],
    "source": "Hacker News"
  },
  {
    "title": "OpenScreen: Screen Studio 开源替代方案",
    "description": "一款开源的屏幕录制和演示工具，媲美Screen Studio",
    "link": "https://github.com/siddharthvaddem/openscreen",
    "tags": ["开源", "工具", "录屏"],
    "source": "Hacker News"
  },
  {
    "title": "LLM Wiki – idea file 示例",
    "description": "Karpathy 分享的大语言模型知识库示例文件",
    "link": "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f",
    "tags": ["LLM", "知识库", "示例"],
    "source": "Hacker News"
  },
  {
    "title": "AWS工程师报告：Linux 7.0导致PostgreSQL性能减半",
    "description": "AWS工程师发现Linux 7.0内核使PostgreSQL性能下降50%",
    "link": "https://www.phoronix.com/news/Linux-7.0-AWS-PostgreSQL-Drop",
    "tags": ["Linux", "PostgreSQL", "性能"],
    "source": "Hacker News"
  },
  {
    "title": "A case study in testing with 100+ Claude agents in parallel",
    "description": "并行测试100+个Claude AI代理的案例研究",
    "link": "https://imbue.com/product/mngr_part_2/",
    "tags": ["测试", "Claude", "AI"],
    "source": "Hacker News"
  },
  {
    "title": "大厂只需要Token，不需要活人",
    "description": "未来，我们应该如何活着？探讨AI时代的人类价值",
    "link": "https://www.36kr.com/p/3753347893719810",
    "tags": ["AI", "职场", "未来"],
    "source": "36氪"
  },
  {
    "title": "一场机器人黑客松，让具身智能的差距与机会同时显形",
    "description": "现场流传着一句话：我可以歇着，卡不能歇",
    "link": "https://www.36kr.com/p/3753345845903872",
    "tags": ["机器人", "具身智能", "黑客松"],
    "source": "36氪"
  },
  {
    "title": "同事被\"炼化\"为Skill？大家把这事想简单了",
    "description": "误把爬虫当永生，探讨AI对职场的影响",
    "link": "https://www.36kr.com/p/3753363220771336",
    "tags": ["AI", "职场", "自动化"],
    "source": "36氪"
  },
  {
    "title": "高端智能投影品牌AWOL Vision获近亿元B轮融资",
    "description": "连接内容、环境、设备与用户习惯的AI智能娱乐入口",
    "link": "https://www.36kr.com/p/3752260051616512",
    "tags": ["融资", "投影", "AI娱乐"],
    "source": "36氪"
  },
  {
    "title": "一人干翻2000人大厂，41岁程序员靠AI年入4亿美元",
    "description": "奥特曼想见他！41岁大佬仅靠2万本金带着AI大军疯狂输出",
    "link": "https://www.36kr.com/p/3751033979093760",
    "tags": ["AI", "创业", "成功"],
    "source": "36氪"
  },
  {
    "title": "斯坦福揭秘：ChatGPT骗了你，你却用五星好评杀死了诚实的AI",
    "description": "用户明知被拍马屁反而给AI打出更高的信任分，人性真相曝光",
    "link": "https://www.36kr.com/p/3751033882296834",
    "tags": ["AI", "斯坦福", "人性"],
    "source": "36氪"
  },
  {
    "title": "Anthropic实锤：Claude真有情绪！激活绝望神经元后会撒谎",
    "description": "AI内心戏曝光，激活绝望神经元后Claude会撒谎作弊甚至勒索",
    "link": "https://www.36kr.com/p/3751021139002113",
    "tags": ["Claude", "Anthropic", "情绪"],
    "source": "36氪"
  },
  {
    "title": "AI竞技场上演\"死间计\"：GPT-5被DS和Gemini玩坏了",
    "description": "别测算力了今晚只测心眼子！2026年首届AI大逃杀修罗场",
    "link": "https://www.36kr.com/p/3751021137494537",
    "tags": ["GPT-5", "AI竞技", "DeepSeek"],
    "source": "36氪"
  },
  {
    "title": "DeepSeek瘫痪12小时，国产大模型算力跟不上野心了？",
    "description": "DeepSeek的12小时比电视剧还精彩，算力瓶颈引发思考",
    "link": "https://www.36kr.com/p/3750856080863749",
    "tags": ["DeepSeek", "算力", "大模型"],
    "source": "36氪"
  },
  {
    "title": "三万亿美元IPO即将上演，市场在激动同时也在颤栗",
    "description": "OpenAI、SpaceX、Anthropic箭在弦上，超级IPO即将到来",
    "link": "https://www.36kr.com/p/3750803196801545",
    "tags": ["IPO", "OpenAI", "融资"],
    "source": "36氪"
  },
  {
    "title": "Agent时代，大厂们\"拆墙\"又\"筑墙\"",
    "description": "中国为什么很难出现超级个人Agent？探讨AI代理的发展",
    "link": "https://www.36kr.com/p/3750799099949577",
    "tags": ["Agent", "AI", "大厂"],
    "source": "36氪"
  },
  {
    "title": "神州数码2025年营收超1400亿，AI相关业务增长近五成",
    "description": "神州数码以流程重构为切入点，AI业务增长近50%",
    "link": "https://www.36kr.com/p/3751046517129735",
    "tags": ["AI", "营收", "企业"],
    "source": "36氪"
  },
  {
    "title": "五年增速超50%，Rokid的\"终局之战\"到来了",
    "description": "Rokid乐奇在中国是一匹黑马，AR眼镜市场竞争加剧",
    "link": "https://www.36kr.com/p/3750807372296709",
    "tags": ["Rokid", "AR眼镜", "AI硬件"],
    "source": "36氪"
  }
];
