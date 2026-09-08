# Wenjun Yu — personal website

英文个人学术主页，只有 Home 与 Research 两页。内容依据个人 CV 和论文原始页面整理。

## 本地运行

需要 Node.js 22.13 或更高版本，以及 npm。自动发布使用 Node.js 22.23.2。

```sh
npm ci
npm run dev
```

打开终端显示的本地地址，默认是 http://localhost:3000 。

## GitHub Pages 发布

使用个人账号 `wenjunyus`，仓库为 `wenjunyus/wenjunyus.github.io`，网站地址为 `https://wenjunyus.github.io/`。在仓库 Settings → Pages 中将 Source 设为 GitHub Actions。

推送到 `main` 后，`.github/workflows/deploy.yml` 自动安装锁定的依赖、构建并检查 Home 和 Research，再发布 `dist/client`。构建失败时不会发布。也可以在 Actions 中手动运行该工作流。

原始 CV、本地内容来源记录、环境变量和其他托管平台的本地配置不属于公开仓库。页面照片、字体及字体授权随网站发布。

## 更新内容

| 修改内容 | 文件 |
| --- | --- |
| 英文名、中文名、读音音标、单位、邮箱、Scholar、News、Professional Services、Research Interests | `lib/profile.ts` |
| Bio 的身份、教育及导师介绍 | `app/page.tsx` |
| 研究主题、论文、作者、发表状态和简介 | `lib/research.ts` |
| 颜色、字体、尺寸和手机布局 | `app/globals.css` |
| 页头图片 | `public/aurora-lightscape.jpg` |
| 简介旁的个人照片 | `public/wenjun-yu.png`（更换时同步更新 `app/page.tsx` 中的原图宽高） |

News 按时间倒序维护；日期使用 `YYYY-MM`，不补造未知日期。每条 News 用 `paperId` 对应 `lib/research.ts` 中的论文 `id`，标题和链接自动共用；论文名统一为句首大写并保留专名。修改论文标题时只改该文献条目。每篇论文保留稳定且唯一的 `id`，可以用 `/research#论文id` 直接链接。预印本正式发表时，在原条目更新 `venue` 和 `href`。作者按原文顺序列出，`W. Yu` 自动加粗。邮箱保持 `wenjunyus [AT] gmail [DOT] com` 形式的纯文本。

## 验证和构建

```sh
npx tsc --noEmit --incremental false
npx oxlint app lib/profile.ts lib/research.ts components/site-header.tsx components/site-footer.tsx vite.config.ts next.config.ts
npm run build
```

构建应将 `/` 和 `/research` 都列为 Static，生成 `dist/client/index.html` 和 `dist/client/research.html`。静态部署目录是 `dist/client`，托管服务需要支持把 `/research` 解析到 `research.html`（HTML 扩展名省略）。不要把 `dist/server` 用作这版静态站的发布入口。`npm start` 可在本地检查构建结果。

本项目使用官方 Sites 脚手架的 Vinext / React 和 shadcn 基础依赖；页面自身只使用语义化 HTML 和 CSS。没有数据库、登录、API 或后台服务。未来的博客功能尚未加入。

## 本轮验证边界

- 已检查静态导出、TypeScript、本次页面代码、生成 HTML 的内部链接与内容完整性，以及本机两页的 HTTP 响应。
- 已编写桌面和手机媒体查询、键盘焦点样式、跳过导航链接；尚未做浏览器截图或交互验收。
- 脚手架自带但未使用的 `components/ui` 与 `hooks/use-mobile.ts` 存在 19 条全量 lint 错误；本次页面代码的定向 lint 通过。保留这些模板文件，未做无关修改。
- 2026-09-08 的 npm audit 报告脚手架依赖有 11 项告警（1 low、2 moderate、8 high），涉及 Vinext、RSC、Cloudflare 工具链等。此次发布产物仅为静态 HTML / CSS / 浏览器 JS / 图片，不包含服务端运行时；未擅自执行跨版本 `audit fix --force`。今后启用服务端功能前需要单独评估和升级。
