# AI 资讯展示页面

赛博朋克风格的 AI 资讯展示页面。

## 本地运行

### 方法 1: 直接打开
```bash
open ai-news.html
```

### 方法 2: 使用本地服务器
```bash
# Python 3
python3 -m http.server 8000

# 或使用 Node.js (需要先安装 http-server)
npx http-server -p 8000

# 然后访问 http://localhost:8000/ai-news.html
```

### 方法 3: 一键启动 (推荐)
```bash
chmod +x start-server.sh
./start-server.sh
```

## 在线部署

### 方式 1: Vercel (推荐，免费且简单)

1. 访问 [vercel.com](https://vercel.com)
2. 安装 Vercel CLI: `npm i -g vercel`
3. 运行: `vercel deploy`

### 方式 2: GitHub Pages

1. 创建 GitHub 仓库
2. 上传文件到仓库
3. 在仓库设置中启用 GitHub Pages

### 方式 3: Netlify

1. 访问 [netlify.com](https://netlify.com)
2. 拖放 `ai-news-site` 文件夹到 Netlify 部署区域
3. 几秒钟即可上线

### 方式 4: Cloudflare Pages

1. 访问 [pages.cloudflare.com](https://pages.cloudflare.com)
2. 连接 GitHub 仓库或直接上传文件
3. 自动部署

## 文件说明

- `ai-news.html` - 主页面文件
- `ai-news-data.js` - 数据文件（可随时更新内容）
- `start-server.sh` - 本地服务器启动脚本
