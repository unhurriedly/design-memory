---
name: build-design-memory
description: Analyze a reference website, identify reusable typography, components, layouts, graphics, and interactions implemented with frontend code, reproduce selected assets locally, and add verified natural-language design records and reusable code to the 设记 Design Memory project. Use when a user sends a website URL or screenshot and asks to analyze, save, reproduce, update, compare, or verify a design asset.
---

# Build Design Memory

把用户喜欢的网站设计转化为可检索、可解释、可运行的长期记忆。以原站代码和浏览器实测为依据，保存自然语言说明、设计参数、分析证据及可复用代码。

## 理解目标

1. 从用户文字和截图中确认具体目标，例如字体、卡片、布局、背景、图标、导航、滚动方式或交互动效。
2. 把截图作为定位和视觉比对依据，把实时页面的 DOM、计算样式、脚本及网络资源作为技术判断依据。
3. 当描述不够精确时，先检查首屏、截图对应区域和第一个明显可交互组件，再根据证据缩小范围。只有不同理解会导致明显不同结果时才向用户询问。
4. 记录用户喜欢的关键机制，不必复制整个页面。不要用项目无关的装饰替代目标设计。

## 检查项目

开始修改前：

1. 阅读 `data/resources.js`，了解现有资源字段和同来源记录。
2. 搜索相同标题、来源域名、资源类型和标签，优先更新已有资源，避免重复。
3. 若资源已有独立预览，阅读 `components/<asset-slug>/demo.html` 和 `demo.js`。
4. 检查 `app.js`、`index.html` 和 `styles.css` 中与资源加载、预览及缓存版本相关的逻辑。
5. 保留现有资源和用户改动，只修改本次目标涉及的文件。

项目约定：

```text
data/resources.js                  资源数据和可复制代码
components/<asset-slug>/demo.html 独立可运行预览
components/<asset-slug>/demo.js   复杂交互逻辑，可选
assets/components/<asset-slug>/   组件使用的本地资源
assets/references/                 原始参考截图
app.js                             资源库渲染与交互
index.html                         页面入口
styles.css                         资源库界面样式
```

资源类型使用项目已有值：`typography`、`card`、`layout`、`interaction` 或 `graphic`。

## 分析原站

### 建立证据

使用浏览器打开用户给出的 URL，并完成以下检查：

1. 定位目标元素，记录语义结构、标签、类名、父子关系和重复单元。
2. 读取目标元素及关键子元素的计算样式，不只阅读样式表声明。
3. 检查页面加载的 CSS、JavaScript、字体、图片、SVG、视频和 Canvas 资源。
4. 操作 hover、focus、点击、拖拽、滚动、分类切换和响应式状态，比较交互前后的 DOM、属性及计算样式。
5. 同时观察桌面与约 390px 宽的移动端，确认断点和降级方式。
6. 保存必要的原始截图作为视觉比对依据。

不要把视觉猜测写成原站事实。将结论明确区分为：

- **原站实测**：可由 DOM、计算样式、资源文件或运行状态直接确认。
- **代码推断**：由压缩脚本、组件命名或状态变化推导，并说明依据。
- **本地复现**：为便于独立运行而采用的等效实现，不宣称是原站源码。

### 分析字体

至少记录：

- 实际生效的 `font-family` 和 fallback 顺序。
- 字体文件 URL、格式、可用字重和 `font-display`。
- 标题、正文、标签分别使用的 weight、size、line-height 和 letter-spacing。
- 中英文混排时的字体分工，以及字体未加载时的回退结果。
- 桌面与移动端字号、行高和断点差异。

不要仅根据字形猜字体名。结合 `@font-face`、网络字体文件、CSS 变量和计算样式确认实际生效字体。

### 分析组件与布局

至少记录：

- 宽高、间距、内边距、圆角、边框、阴影、颜色和层级。
- `flex`、`grid`、绝对定位、sticky、scroll-snap 或圆周定位等布局机制。
- 图片比例、`object-fit`、裁切方式及文字与媒体的叠放关系。
- 桌面、平板和移动端的尺寸约束、溢出处理及断点。
- 重复组件的数据结构和可替换内容。

### 分析交互动效

至少记录：

- 触发条件：hover、focus、pointer、scroll、intersection、click 或定时器。
- 起始、过渡、结束和取消状态。
- transform、opacity、filter、clip-path、SVG path、Canvas 状态或 CSS 变量的变化。
- duration、delay、stagger、easing、关键帧和循环策略。
- selected、active、loading、disabled 等状态的权威标志，例如 ARIA 属性、类名或 URL。
- 键盘操作、触屏行为和 `prefers-reduced-motion` 降级。

对分类切换、翻转或复杂状态动画，必须实际触发后再检查变化，不能只看静态首帧。

### 判断是否由前端代码实现

按以下规则决定是否复现：

- DOM + CSS + JavaScript、SVG 或 Canvas 组成：可以复现并入库。
- 图片或视频承载全部视觉和动效：记录媒体性质，不伪造为前端组件；用户明确说视频无需处理时停止入库。
- Canvas 或 WebGL：确认公开实现、依赖规模和可独立运行性，再决定复现范围。
- 第三方库：记录库名、版本线索和核心作用；优先复用已验证的成熟库。
- 无法读取完整源码：保存已验证的行为与参数，并把本地等效实现标为复现方案。

## 复现组件

1. 沿用项目当前的原生 HTML、CSS 和 JavaScript 方式。除非原效果确实需要，不引入框架或大型依赖。
2. 在 `components/<asset-slug>/` 创建独立预览。预览打开后直接展示组件，不做营销页或说明页。
3. 提取用户喜欢的关键机制，使预览不依赖原站运行时、路由或认证。
4. 对公开且必要的图片或字体，优先放入对应的本地资源目录，避免预览因原站链接变化而失效。
5. 将颜色、尺寸、速度、路径、形状、数量和内容集中为 CSS 自定义属性或 JavaScript 配置，便于后续替换。
6. 提供完整的 hover、focus、active、loading 或分类状态，而不只实现静态外观。
7. 支持键盘、合理的 ARIA、触屏、移动端和 `prefers-reduced-motion`。
8. 保持预览边界稳定，防止动态内容引起跳动、遮挡或横向溢出。

不要把整站代码直接搬入项目。去掉分析目标以外的导航、埋点、账户、营销内容和无关依赖。

## 写入记忆资源库

在 `data/resources.js` 中新增或更新资源，沿用以下结构：

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
  description: "用户能看到什么，以及组件如何响应。",
  usage: "适合什么业务场景，以及不适合什么场景。",
  implementation: "原站实现证据、本地复现方式和可修改内容。",
  tags: ["自然语言标签", "技术关键词"],
  tokens: [
    ["参数名称", "精确值或响应式范围"]
  ],
  evidence: [
    ["证据名称", "页面位置、DOM、计算样式或交互验证结果"]
  ],
  code: {
    html: reusableHtml,
    css: reusableCss,
    js: reusableJs
  }
}
```

字段写法：

- `title`：用“形态 + 用途”命名，让用户不看来源也能理解。
- `description`：用自然语言说明视觉层级和交互行为。
- `usage`：说明适用场景、内容规模和使用限制。
- `implementation`：先写原站机制，再写本地复现和可替换参数。
- `tags`：同时包含视觉词、交互词、业务场景和关键技术，支持自然语言搜索。
- `tokens`：保存字体、颜色、尺寸、间距、圆角、时间、缓动和断点等精确参数。
- `evidence`：保存可复查的事实和复现边界，不写空泛评价。
- `code`：提供最小但完整的 HTML、CSS、JavaScript 调用代码。纯样式组件也明确写出不需要 JavaScript。

自然语言描述应让 AI 或前端开发者仅阅读详情就能回答：组件是什么、何时用、如何实现、哪些内容能改、关键参数是多少。

## 验证结果

完成修改后执行以下检查：

1. 对所有修改过的 JavaScript 文件运行 `node --check`。
2. 启动本地静态服务器，并确认入口页、资源详情和独立预览均能加载。
3. 在桌面和 390px 移动视口检查组件，不允许出现非预期横向滚动、内容遮挡、文字溢出或空白 iframe。
4. 实际执行组件的核心交互，验证 URL、ARIA、CSS 变量、transform、激活类或 Canvas 状态等权威结果。
5. 检查浏览器控制台错误，区分旧日志和本次修改产生的问题。
6. 对比参考截图，重点检查结构、比例、色彩关系、运动方向和状态变化，不追求与目标无关的像素复制。
7. 若更新后的种子资源被旧缓存覆盖，更新入口处资源文件的 query version，并重新加载验证。
8. 最后确认没有覆盖无关文件或删除现有资产。

## 完成清单

- [ ] 已定位用户真正喜欢的设计区域。
- [ ] 已确认它由前端代码还是图片/视频实现。
- [ ] 字体、布局、视觉和动效参数有可复查证据。
- [ ] 原站实测、代码推断和本地复现没有混写。
- [ ] 独立预览可运行且包含必要交互状态。
- [ ] 资源详情使用完整的自然语言描述。
- [ ] 可替换的内容和参数已明确记录。
- [ ] 桌面端和移动端均已验证。
- [ ] JavaScript 语法和浏览器控制台检查通过。
- [ ] 没有覆盖或移除与本次任务无关的内容。
