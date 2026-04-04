# 部署 AI 资讯页面到 Vercel

Vercel CLI 已安装完成！现在需要登录并部署。

## 步骤 1: 登录 Vercel

在终端运行以下命令：

```bash
cd /Users/smzdm/Downloads/lesson7-配套资料/ai-news-site
vercel login
```

这会打开浏览器，让你授权 Vercel 访问你的账户。

## 步骤 2: 部署到 Vercel

登录成功后，运行：

```bash
vercel --yes --prod
```

## 步骤 3: 获取访问地址

部署完成后，Vercel 会返回一个 URL，类似：

```
https://ai-news-site-xxxxx.vercel.app
```

复制这个地址，其他人就可以通过链接访问你的页面了！

## 其他部署选项

### 如果你没有 Vercel 账户

可以使用以下免费托管服务：

#### GitHub Pages (需要 GitHub 账户)
1. 创建新仓库: `ai-news-site`
2. 上传 `ai-news-site` 文件夹内容
3. 进入仓库 Settings → Pages
4. 选择 `main` 分支，保存

最终地址: `https://你的用户名.github.io/ai-news-site/`

#### Netlify (无需账户)
1. 访问 [app.netlify.com/drop](https://app.netlify.com/drop)
2. 拖放整个 `ai-news-site` 文件夹
3. 等待几秒，获得访问链接

#### Cloudflare Pages (需要 GitHub 账户)
1. 访问 [pages.cloudflare.com](https://pages.cloudflare.com)
2. 连接你的 GitHub 仓库
3. 自动部署

---

## 更新数据

数据更新后，重新部署即可：
```bash
# 修改 ai-news-data.js 后
vercel --yes --prod
```
