<p align="center">
  <img src="./assets/brand/sheji-design-memory-lockup.png" width="760" alt="设记 Design Memory 品牌标志与项目口号">
</p>

<p align="center">
  <a href="https://unhurriedly.github.io/design-memory/"><strong>在线访问</strong></a>
  ·
  <a href="SKILL.md">网站分析方法</a>
</p>

## 项目简介

设记是一个个人 Web 前端设计资源库。它不只保存参考网站链接或截图，还会分析原站实际使用的字体、布局、视觉参数和交互机制，将结果整理为：

- 可直接查看和操作的独立组件预览
- 面向 AI 与前端开发的自然语言设计说明
- 字体、颜色、尺寸、圆角、时长和缓动等设计参数
- 原站实测、代码推断和本地复现的分析依据
- 可复制使用的 HTML、CSS 和 JavaScript 代码

项目采用纯静态前端实现。完整字体、图片、组件预览、代码和元数据都保存在项目目录中，无需安装依赖、构建工具或后端服务，断网时也可以完整浏览。

## 在线体验

访问：[https://unhurriedly.github.io/design-memory/](https://unhurriedly.github.io/design-memory/)

当前资源库包含字体排版、卡片组件、布局结构、交互动效和图形视觉等类型，支持：

- 按资源类型、标签和最近浏览来源筛选
- 搜索标题、设计说明、用途、实现方式和来源
- 收藏资源与记录最近浏览内容
- 在卡片中直接运行交互预览
- 查看设计参数、分析依据和原始参考截图
- 分别复制 HTML、CSS 和 JavaScript

## 已收录示例

| 资源 | 类型 | 来源 |
| --- | --- | --- |
| 圆周倾斜实验卡片轮播 | 卡片 | Google Labs |
| 点阵轨道 AI 思考图标 | 交互动效 | thinking-orbs |
| MiSans × Outfit AI 品牌字体系统 | 字体排版 | MiniMax |
| AI Agent 灵动岛询问面板 | 交互动效 | Vibe Island |
| Noto Serif SC 中文科技标题系统 | 字体排版 | 御行枢控 |
| Acorn × Roobert 字体系统 | 字体排版 | Ben Shih |
| 倾斜叠放 Tips 卡片 | 卡片 | Ben Shih |
| 横向吸附商品卡片 | 卡片 | Apple 教育商店 |
| 大模型分段输出动效 | 交互动效 | Diffmind |
| 可拖拽缩放的叠层产品窗口 | 交互动效 | Cursor |

## 下载后直接使用

在 GitHub 仓库页面选择 **Code → Download ZIP**，下载后先完整解压。不要只保存 `index.html`，字体、图片、预览和数据都通过项目内相对路径关联。

解压后，推荐双击对应系统的一键入口：

- macOS：双击 `start-macos.command`
- Windows：双击 `start-windows.bat`

入口会自动打开浏览器，不需要输入命令、安装 npm 或连接网络。使用期间保留启动窗口，关闭窗口即可停止本地服务。

也可以直接双击 `index.html` 快速浏览。少数浏览器会限制本地文件加载字体或组件预览；遇到这种情况，改用上面的一键入口即可。

### 可选：通过本地服务器打开

开发者需要调试页面时，可以在项目根目录运行：

```bash
python3 -m http.server 4173
```

然后访问 `http://127.0.0.1:4173/`。这是开发调试方式，不是普通用户使用项目的前置条件。

## 离线范围

以下内容均包含在下载包中并可离线使用：

- 记忆资源库页面、搜索、筛选、收藏和详情面板
- 所有独立组件预览及其交互逻辑
- MiSans、Outfit、Noto Sans SC、Noto Serif SC、Roobert 和 Acorn 字体文件
- 组件图片、品牌图片与分析参考截图
- 可复制的 HTML、CSS、JavaScript 和自然语言元数据
- `SKILL.md` 中的网站分析和入库方法

资源详情中的“来源网站”链接属于溯源元数据，点击它会访问外部网站；不点击这些链接不会产生网络请求。收藏和最近浏览状态保存在当前浏览器中，不会改写项目文件。

## 项目结构

```text
.
├── index.html                         # 页面入口
├── app.js                             # 资源筛选、搜索、详情和本地状态
├── styles.css                         # 资源库界面样式
├── data/
│   └── resources.js                  # 资源数据及可复制代码
├── components/
│   └── <asset-slug>/
│       ├── demo.html                 # 独立可运行组件预览
│       └── demo.js                   # 复杂交互逻辑，可选
├── assets/
│   ├── brand/                        # 设记品牌资源
│   ├── components/                   # 组件使用的本地素材
│   ├── fonts/                        # 离线字体文件
│   └── references/                   # 原始参考截图
├── start-macos.command               # macOS 一键打开
├── start-windows.bat                 # Windows 一键打开
├── start-windows.ps1                 # Windows 内置本地服务
└── SKILL.md                           # 网站分析、复现与入库规范
```

## 添加一条设计记忆

当你发现喜欢的网站设计时：

1. 明确需要提取的区域，例如字体、卡片、布局、背景、图标或动效。
2. 使用截图定位目标，以实时页面的 DOM、计算样式、脚本和网络资源确认实现。
3. 判断视觉是否由 HTML/CSS/JavaScript、SVG 或 Canvas 实现，避免把视频或图片误写成前端组件。
4. 在 `components/<asset-slug>/` 中制作不依赖原站运行时的独立预览。
5. 在 `data/resources.js` 中新增资源记录，写入自然语言说明、参数、证据和代码。
6. 验证桌面端、约 390px 移动端、核心交互、控制台和 JavaScript 语法。

完整方法和检查清单参见 [SKILL.md](SKILL.md)。可将它交给 Codex 或其他 AI 编程工具，作为这个项目的网站分析工作流。

### 资源数据结构

```js
{
  id: "source-asset-name",
  source: {
    id: "source-site",
    name: "来源网站",
    url: "https://example.com/page",
    host: "example.com"
  },
  title: "自然语言资源标题",
  type: "interaction",
  status: "ready",
  favorite: false,
  updatedAt: "YYYY-MM-DD",
  preview: "./components/source-asset-name/demo.html",
  referenceImage: "./assets/references/source-asset-name.png",
  description: "视觉特征和交互行为。",
  usage: "适用场景和使用限制。",
  implementation: "原站机制、本地复现方式和可修改内容。",
  tags: ["视觉标签", "交互标签", "业务场景"],
  tokens: [["参数名称", "参数值"]],
  evidence: [["证据名称", "实测或推断依据"]],
  code: {
    html: reusableHtml,
    css: reusableCss,
    js: reusableJs
  }
}
```

资源类型沿用项目已有值：

- `typography`：字体与排版系统
- `card`：卡片及内容容器
- `layout`：页面和模块布局
- `interaction`：交互与动效
- `graphic`：图形与视觉元素

## 数据与同步

预置资源保存在 `data/resources.js` 中，随 Git 仓库和 GitHub Pages 发布。

收藏状态和最近浏览记录保存在浏览器 `localStorage` 中，因此：

- 不同浏览器和设备之间不会自动同步
- 清除浏览器站点数据会移除这些本地状态
- 修改预置资源后，需要提交并推送代码才能更新公网版本

## 发布

仓库已配置 GitHub Pages，从 `main` 分支根目录发布。提交并推送更新后，GitHub 会自动重新构建：

```bash
git add -A
git commit -m "描述本次修改"
git push
```

构建状态可以在仓库的 **Actions** 或 **Settings → Pages** 中查看。

## 技术实现

- 原生 HTML、CSS 和 JavaScript
- 无模块加载器的原生脚本，可直接从本地文件打开
- CSS Grid、Flexbox、Container/Media Queries
- iframe 沙箱中的独立组件预览
- localStorage 本地状态
- GitHub Pages 静态托管

项目不依赖 npm，也没有生产构建步骤或运行时网络依赖。
