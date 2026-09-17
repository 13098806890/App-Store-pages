# App Store Pages

本仓库统一托管多个 iOS App 的 App Store 公开页面（隐私政策、支持页面、使用条款等），通过 GitHub Pages 发布。

## 目录结构

```
├── index.html                  # 门户首页
├── BasketballRecord/           # 🏀 篮球生涯 (Basketball Career)
│   ├── index.html              # App 介绍页
│   ├── privacy-policy.html     # 隐私政策 (多语言)
│   ├── privacy-policy.md
│   ├── terms-of-use.html       # 使用条款 / EULA (多语言)
│   ├── terms-of-use.md
│   ├── support.html            # 支持与 FAQ (多语言)
│   ├── support.md
│   └── appicon.png
├── ChineseLawsSearch/          # ⚖️ 律疏 (ChineseLawsSearch)
│   ├── index.html              # App 介绍页
│   ├── privacy.html            # 隐私政策
│   ├── terms.html              # 用户服务协议
│   └── support.html            # 支持与 FAQ
└── GIFBloom/                   # ✨ GIFBloom 动态照片创作工具
    ├── index.html              # 宣传页
    ├── privacy-policy.html     # 隐私政策
    ├── support.html            # 支持与 FAQ
    ├── site.js                 # 17 种语言的页面文案与渲染
    ├── site.css                # 页面样式
    └── appicon.png             # App 图标
```

## 各 App 信息

| App | App Store ID | Bundle ID |
|-----|-------------|-----------|
| 篮球生涯 (Basketball Career) | 6773215187 | - |
| 律疏 (ChineseLawsSearch) | - | - |
| GIFBloom | 6804921680 | com.livingframe.app |

## GitHub Pages

本站通过 GitHub Pages 发布，地址为：
https://13098806890.github.io/App-Store-pages/

在 App Store Connect 中填写各 App 的隐私政策、支持页面 URL 时，使用对应子目录中的页面地址。

GIFBloom 页面支持简体中文、繁體中文、英语、德语、西班牙语、法语、意大利语、日语、韩语、俄语、巴西葡萄牙语、阿拉伯语、印地语、印尼语、泰语、土耳其语和越南语。页面由 `site.js` 根据所选语言渲染，无外部依赖。可在仓库根目录运行 `python3 -m http.server 8000` 本地预览；GitHub Pages 从 `main` 分支根目录发布，推送页面文件后会自动更新。

GIFBloom 页面地址（发布后）：

- 宣传页：https://13098806890.github.io/App-Store-pages/GIFBloom/
- 隐私政策：https://13098806890.github.io/App-Store-pages/GIFBloom/privacy-policy.html
- 支持页面：https://13098806890.github.io/App-Store-pages/GIFBloom/support.html
