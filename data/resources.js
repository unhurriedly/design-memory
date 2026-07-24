const benHtml = String.raw`<section class="type-specimen">
  <p class="type-specimen__eyebrow">PRODUCT DESIGNER & BUILDER</p>
  <h1 class="type-specimen__title">
    Hi, I'm Ben.<br>
    Design is how I think.
  </h1>
  <p class="type-specimen__body">
    Lead Product Designer with a Data Science background.
    Building thoughtful products for people.
  </p>
</section>`;

const benCss = String.raw`@font-face {
  font-family: "Roobert";
  src: url("https://www.benshih.design/_next/static/media/e717f2176a60f97a-s.p.otf") format("opentype");
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "Roobert";
  src: url("https://www.benshih.design/_next/static/media/1f43618828b4e276-s.p.otf") format("opentype");
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: "Acorn";
  src: url("https://www.benshih.design/_next/static/media/78e0d29f8bb7d66f-s.p.otf") format("opentype");
  font-weight: 600;
  font-display: swap;
}

.type-specimen {
  --cream: #f9f4ed;
  --green: #4c6763;
  padding: clamp(32px, 7vw, 88px);
  background: var(--cream);
  color: var(--green);
}
.type-specimen__eyebrow,
.type-specimen__body {
  font-family: "Roobert", Arial, sans-serif;
}
.type-specimen__eyebrow {
  margin: 0 0 24px;
  font-size: 14px;
  font-weight: 500;
}
.type-specimen__title {
  margin: 0;
  font-family: "Acorn", Arial, serif;
  font-size: clamp(54px, 8vw, 88px);
  font-weight: 600;
  line-height: .92;
  letter-spacing: -.02em;
}
.type-specimen__body {
  max-width: 640px;
  margin: 32px 0 0;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;
}`;

const benJs = String.raw`// 纯排版组件不依赖 JavaScript。
// 可在业务项目中将文本内容替换为实际标题与说明。`;

const benTipsHtml = String.raw`<section class="tips-deck" aria-label="内容导航卡片">
  <div class="tip-shell" data-rotation="6.5" tabindex="0">
    <div class="tip-reveal" aria-hidden="true"><span>AI</span><span>UX</span><span>Data</span></div>
    <article class="tip-card tip-card--orange">
      <div><h2>Recent work</h2><p>See how I turn messy product problems into shipped experiences.</p></div>
      <a href="#work">Read Case Studies</a>
    </article>
  </div>
  <div class="tip-shell" data-rotation="-5" tabindex="0">
    <article class="tip-card tip-card--paper"><h2>A quick intro</h2><p>Design, data and building.</p></article>
  </div>
  <div class="tip-shell" data-rotation="5" tabindex="0">
    <div class="tip-reveal" aria-hidden="true"><span>Mood</span><span>Flow</span><span>Apps</span></div>
    <article class="tip-card tip-card--purple">
      <div><h2>Indie apps</h2><p>I've shipped 20+ indie apps over the last decade.</p></div>
      <a href="#apps">What I've Shipped</a>
    </article>
  </div>
  <div class="tip-shell" data-rotation="-5" tabindex="0">
    <div class="tip-reveal" aria-hidden="true"><span>Tokyo</span><span>AI</span><span>Growth</span></div>
    <article class="tip-card tip-card--blue">
      <div><h2>Public talks</h2><p>I speak about design, growth, AI, and building better products.</p></div>
      <a href="#talks">Explore My Talks</a>
    </article>
  </div>
</section>`;

const benTipsCss = String.raw`@font-face {
  font-family: "Roobert";
  src: url("https://www.benshih.design/_next/static/media/1f43618828b4e276-s.p.otf") format("opentype");
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: "Acorn";
  src: url("https://www.benshih.design/_next/static/media/78e0d29f8bb7d66f-s.p.otf") format("opentype");
  font-weight: 600;
  font-display: swap;
}
* { box-sizing: border-box; }
.tips-deck {
  min-height: 420px;
  padding: 52px 28px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: rgba(255,255,255,.72);
  background-image: radial-gradient(circle, rgba(107,114,128,.15) 1px, transparent 1px);
  background-size: 18px 18px;
}
.tip-shell {
  --x: 0px; --scale: 1; --opacity: 1; --rotation: 0deg;
  position: relative;
  width: 350px;
  height: 386px;
  flex: 0 0 350px;
  margin-right: -40px;
  display: grid;
  place-items: center;
  opacity: var(--opacity);
  transform: translateX(var(--x)) rotate(var(--rotation)) scale(var(--scale));
  transition: transform 560ms cubic-bezier(.22,1,.36,1), opacity 180ms ease;
}
.tip-shell:last-child { margin-right: 0; }
.tip-card {
  position: relative;
  width: 320px;
  height: 360px;
  padding: 32px 32px 40px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 0 1px rgba(0,0,0,.05), 0 4px 16px rgba(16,24,40,.08);
  transition: transform 420ms cubic-bezier(.22,1,.36,1), box-shadow 420ms cubic-bezier(.22,1,.36,1);
}
.tip-shell.is-active .tip-card {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(2,89,78,.15);
}
.tip-card h2 { margin: 0; font: 600 40px/.9 Acorn, Georgia, serif; }
.tip-card p { margin: 12px 0 0; font: 500 19px/1.5 Roobert, Arial, sans-serif; }
.tip-card a { align-self: flex-start; padding: 10px 14px; border-radius: 8px; background: #000; color: #fff; font: 600 14px/20px Roobert, Arial, sans-serif; text-decoration: none; }
.tip-card--orange { background: #ffd6ae; }
.tip-card--paper { background: #fffdf8; }
.tip-card--purple { background: #d9d6fe; }
.tip-card--blue { background: #b2ddff; }
.tip-reveal { position: absolute; z-index: 20; left: 50%; bottom: calc(100% - 22px); width: 260px; height: 104px; opacity: 0; transform: translate(-50%,18px) scale(.7); transition: .44s cubic-bezier(.34,1.56,.64,1); }
.tip-reveal span { position: absolute; left: 50%; top: 50%; width: 104px; height: 68px; border: 2px solid rgba(255,255,255,.9); border-radius: 7px; background: #f2efe9; box-shadow: 0 6px 18px rgba(0,0,0,.22); display: grid; place-items: center; font-size: 12px; font-weight: 600; }
.tip-reveal span:nth-child(1) { transform: translate(-112px,-30px) rotate(-16deg); }
.tip-reveal span:nth-child(2) { transform: translate(-52px,-46px) rotate(3deg); }
.tip-reveal span:nth-child(3) { transform: translate(10px,-30px) rotate(16deg); }
.tip-shell.is-active .tip-reveal { opacity: 1; transform: translate(-50%,0) scale(1); }
@media (max-width: 720px) {
  .tips-deck { justify-content: flex-start; overflow-x: auto; scroll-snap-type: x mandatory; }
  .tip-shell { width: 82vw; flex-basis: 82vw; margin-right: 12px; scroll-snap-align: center; }
}`;

const benTipsJs = String.raw`const shells = [...document.querySelectorAll(".tip-shell")];
const desktop = matchMedia("(min-width: 721px)");

function render(active = null) {
  shells.forEach((shell, index) => {
    const rotation = Number(shell.dataset.rotation);
    const distance = active === null ? 0 : Math.abs(index - active);
    const selected = index === active;
    const x = active === null || selected ? 0 : Math.sign(index - active) * (140 + 28 * distance);

    shell.style.setProperty("--x", desktop.matches ? x + "px" : "0px");
    shell.style.setProperty("--scale", desktop.matches ? active === null ? 1 : selected ? 1.04 : .93 : 1);
    shell.style.setProperty("--opacity", desktop.matches ? active === null || selected ? 1 : .5 : 1);
    shell.style.setProperty("--rotation", (selected ? rotation * .2 : rotation) + "deg");
    shell.style.zIndex = selected ? 10 : shells.length - index;
    shell.classList.toggle("is-active", selected);
  });
}

shells.forEach((shell, index) => {
  shell.addEventListener("pointerenter", () => render(index));
  shell.addEventListener("pointerleave", () => {
    if (!shell.matches(":focus-within")) render();
  });
  shell.addEventListener("focusin", () => render(index));
  shell.addEventListener("focusout", (event) => {
    if (!shell.contains(event.relatedTarget)) render();
  });
  shell.addEventListener("click", () => render(index));
});

desktop.addEventListener("change", () => render());
render();`;

const appleHtml = String.raw`<section class="product-rail" aria-labelledby="rail-title">
  <h2 id="rail-title">限时特惠。<span>科科主打，门门必备。</span></h2>
  <div class="product-rail__scroller">
    <div class="product-rail__track">
      <article class="product-card">
        <div class="product-card__content">
          <p class="product-card__eyebrow">优惠适用</p>
          <h3>MacBook Air</h3>
          <p class="product-card__description">强势动力现来自 M5。</p>
          <p class="product-card__price">RMB 9,249 起</p>
        </div>
        <img src="./assets/apple-education/macbook-air-education.jpg" alt="学生与 MacBook Air 及创作工具的拼贴画">
      </article>
      <article class="product-card">
        <div class="product-card__content">
          <p class="product-card__eyebrow">优惠适用</p>
          <h3>MacBook Pro</h3>
          <p class="product-card__description">M5、M5 Pro 和 M5 Max 现已集结。</p>
          <p class="product-card__price">RMB 15,199 起</p>
        </div>
        <img src="./assets/apple-education/macbook-pro-education.jpg" alt="学生与 MacBook Pro 及创作工具的拼贴画">
      </article>
      <article class="product-card">
        <div class="product-card__content">
          <p class="product-card__eyebrow">优惠适用</p>
          <h3>iPad Air</h3>
          <p class="product-card__description">强势动力现来自 M4。</p>
          <p class="product-card__price">RMB 5,599 起</p>
        </div>
        <img src="./assets/apple-education/ipad-air-education.jpg" alt="学生与 iPad Air 及学习用品的拼贴画">
      </article>
    </div>
  </div>
</section>`;

const appleCss = String.raw`* { box-sizing: border-box; }
.product-rail {
  padding: 48px 0 64px;
  overflow: hidden;
  background: #f5f5f7;
  color: #1d1d1f;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
.product-rail > h2 {
  width: min(1280px, calc(100% - 48px));
  margin: 0 auto 18px;
  font-size: 28px;
  line-height: 1.2;
}
.product-rail > h2 span { color: #6e6e73; white-space: nowrap; }
.product-rail__scroller {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}
.product-rail__scroller::-webkit-scrollbar { display: none; }
.product-rail__track {
  width: max-content;
  padding: 16px max(24px, calc((100vw - 1280px) / 2)) 40px;
  display: inline-flex;
  gap: 20px;
}
.product-card {
  position: relative;
  width: 400px;
  height: 500px;
  flex: 0 0 auto;
  overflow: hidden;
  scroll-snap-align: start;
  border-radius: 18px;
  background: #eeedf2;
  box-shadow: 2px 4px 12px rgba(0,0,0,.08);
  transition: transform .24s ease;
}
.product-card:hover { transform: scale(1.012); }
.product-card__content {
  position: absolute;
  z-index: 2;
  inset: 0 0 auto;
  padding: 28px;
}
.product-card__eyebrow {
  margin: 0 0 7px;
  color: #bf4800;
  font-size: 12px;
  font-weight: 600;
}
.product-card h3 { margin: 0; font-size: 28px; line-height: 1.14; }
.product-card__description { margin: 8px 0 0; font-size: 17px; }
.product-card__price { margin: 8px 0 0; color: #515154; font-size: 14px; }
.product-card img {
  position: absolute;
  z-index: 1;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  pointer-events: none;
}
@media (max-width: 600px) {
  .product-rail > h2 { width: calc(100% - 32px); font-size: 24px; }
  .product-rail__track { padding-left: 16px; padding-right: 16px; }
  .product-card { width: min(320px, calc(100vw - 48px)); height: auto; aspect-ratio: 4 / 5; }
}`;

const appleJs = String.raw`const scroller = document.querySelector(".product-rail__scroller");

export function scrollToCard(index) {
  const card = scroller.querySelectorAll(".product-card")[index];
  card?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
}`;

const diffmindHtml = String.raw`<section class="multi-model" aria-label="多模型回答对比">
  <header class="multi-model__header">
    <strong>DiffMind</strong>
    <button class="replay" type="button">↻ 重播</button>
  </header>
  <div class="model-grid">
    <article class="model-panel">
      <h2>GPT-5.5</h2>
      <div class="prompt">审稿人说我的论文创新性不足，回复信怎么写？</div>
      <p class="answer" data-answer="0"></p>
    </article>
    <article class="model-panel">
      <h2>Claude Opus 4.8</h2>
      <div class="prompt">审稿人说我的论文创新性不足，回复信怎么写？</div>
      <p class="answer" data-answer="1"></p>
    </article>
    <article class="model-panel">
      <h2>Gemini 3.5 Flash</h2>
      <div class="prompt">审稿人说我的论文创新性不足，回复信怎么写？</div>
      <p class="answer" data-answer="2"></p>
    </article>
  </div>
  <div class="model-summary" hidden>
    <span>✦</span><p data-summary></p>
  </div>
  <form class="model-composer">
    <input aria-label="发送消息给所有模型" placeholder="发送消息给所有模型…">
    <button type="submit" aria-label="发送">↑</button>
  </form>
</section>`;

const diffmindCss = String.raw`* { box-sizing: border-box; }
.multi-model {
  --ink: #20242d;
  --line: #e3e6eb;
  --soft: #f4f5f7;
  --violet: #5854f7;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: #fff;
  color: var(--ink);
  font-family: Inter, system-ui, sans-serif;
  box-shadow: 0 14px 38px rgba(31,38,55,.08);
}
.multi-model__header {
  height: 62px;
  padding: 0 18px;
  border-bottom: 1px solid var(--line);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.replay { height: 35px; padding: 0 13px; border: 1px solid var(--line); border-radius: 8px; background: #fff; }
.model-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); }
.model-panel { min-width: 0; min-height: 290px; padding: 18px 16px 20px; border-right: 1px solid var(--line); }
.model-panel:last-child { border-right: 0; }
.model-panel h2 { margin: 0; font-size: 14px; }
.prompt { margin-top: 12px; padding: 12px; border-radius: 10px; background: var(--soft); font-size: 12px; font-weight: 600; line-height: 1.55; }
.answer { margin: 13px 0 0; font-size: 12px; line-height: 1.75; white-space: pre-wrap; }
.answer.pending::after { content: ""; display: inline-block; width: 5px; height: 14px; margin-left: 3px; background: var(--violet); animation: blink .7s step-end infinite; }
.model-summary { margin: 0 16px 12px; padding: 14px 16px; border: 1px solid #d5d3ff; border-radius: 11px; background: #f7f7ff; display: flex; gap: 12px; font-size: 12px; line-height: 1.75; }
.model-composer { margin: 0 16px 15px; padding: 8px 9px 8px 14px; border-radius: 10px; background: #f1f3f5; display: flex; }
.model-composer input { min-width: 0; flex: 1; border: 0; outline: 0; background: transparent; }
.model-composer button { width: 36px; height: 36px; border: 0; border-radius: 8px; background: var(--violet); color: #fff; }
@keyframes blink { 50% { opacity: 0; } }
@media (max-width: 720px) {
  .model-grid { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; }
  .model-panel { width: 85vw; flex: 0 0 85vw; scroll-snap-align: start; }
}
@media (prefers-reduced-motion: reduce) { * { animation: none !important; } }`;

const diffmindJs = String.raw`const answers = [
  "先承认表述不足，再从理论、方法和数据三个维度重写贡献。",
  "补充与最接近工作的正面对比，划清边界并保持合作语气。",
  "先判断期刊匹配度，再强调应用价值与可复现性。"
];
const summary = "共识：重写贡献、补对比证据、保持合作语气。";
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
let runId = 0;

function typeText(node, text, speed, delay, id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (id !== runId) return resolve();
      if (reduced) { node.textContent = text; return resolve(); }
      let index = 0;
      const timer = setInterval(() => {
        if (id !== runId) { clearInterval(timer); return resolve(); }
        node.textContent = text.slice(0, ++index);
        if (index >= text.length) { clearInterval(timer); resolve(); }
      }, speed);
    }, delay);
  });
}

async function play() {
  const id = ++runId;
  const nodes = [...document.querySelectorAll("[data-answer]")];
  const summaryBox = document.querySelector(".model-summary");
  summaryBox.hidden = true;
  nodes.forEach((node) => { node.textContent = ""; node.classList.add("pending"); });
  await Promise.all(nodes.map((node, index) =>
    typeText(node, answers[index], 18, 180 + index * 130, id)
      .then(() => node.classList.remove("pending"))
  ));
  if (id !== runId) return;
  summaryBox.hidden = false;
  await typeText(document.querySelector("[data-summary]"), summary, 12, 120, id);
}

document.querySelector(".replay").addEventListener("click", play);
document.querySelector(".model-composer").addEventListener("submit", (event) => { event.preventDefault(); play(); });
play();`;

const cursorWindowsHtml = String.raw`<section class="window-stage" aria-label="可拖拽缩放的产品窗口">
  <article class="product-window is-active" data-window style="--x:6.45;--y:6.94;--w:87.1;--h:86.1;--z:2">
    <header class="window-bar" data-drag-handle>
      <span class="traffic"><i></i><i></i><i></i></span>
      <span>Cursor Desktop</span>
      <button type="button">获取 Cursor</button>
    </header>
    <div class="desktop-layout">
      <aside class="task-pane">待审查 6<br><strong>构建落地页</strong><br><strong>分析 Tab 使用模式</strong><br><strong>规划 Mission Control</strong></aside>
      <section class="agent-pane"><strong>构建落地页</strong><p>根据附加文档制作一个介绍我们业务的落地页</p><small>读取文档 · 思考 6 秒</small><p>我会创建一个极简、以衬线字体为主的落地页。</p></section>
      <section class="browser-pane"><div>←　→　↻　http://localhost:3000</div><h2>Acme Labs</h2><p>Software creation is changing. We have much to learn, try, and build.</p></section>
    </div>
    <i data-dir="n"></i><i data-dir="s"></i><i data-dir="e"></i><i data-dir="w"></i><i data-dir="nw"></i><i data-dir="ne"></i><i data-dir="sw"></i><i data-dir="se"></i>
  </article>
  <article class="product-window" data-window style="--x:58.7;--y:45.55;--w:38.7;--h:50;--z:3">
    <header class="window-bar" data-drag-handle><span class="traffic"><i></i><i></i><i></i></span><span>Cursor CLI</span><button type="button">获取 CLI</button></header>
    <pre class="cli-pane">Cursor 智能体
~/cursor/cursor-web

› 分析 Tab 与智能体的使用模式
✓ 已分析 12 个工作区</pre>
    <i data-dir="n"></i><i data-dir="s"></i><i data-dir="e"></i><i data-dir="w"></i><i data-dir="nw"></i><i data-dir="ne"></i><i data-dir="sw"></i><i data-dir="se"></i>
  </article>
</section>`;

const cursorWindowsCss = String.raw`* { box-sizing: border-box; }
.window-stage {
  position: relative;
  width: min(1240px, 100%);
  aspect-ratio: 31 / 18;
  overflow: hidden;
  border-radius: 4px;
  background: #d8d1c5 url("./assets/cursor-draggable-windows/cursor-stage.webp") center / cover no-repeat;
  color: #26251e;
  font-family: Arial, sans-serif;
  container-type: inline-size;
  isolation: isolate;
}
.product-window {
  position: absolute;
  left: calc(var(--x) * 1%);
  top: calc(var(--y) * 1%);
  width: calc(var(--w) * 1%);
  height: calc(var(--h) * 1%);
  z-index: var(--z);
  overflow: hidden;
  border-radius: 10px;
  background: #f2f1ed;
  box-shadow: 0 28px 70px rgba(0,0,0,.14), 0 14px 32px rgba(0,0,0,.1), 0 0 0 1px rgba(38,37,30,.1);
  display: flex;
  flex-direction: column;
  user-select: none;
}
.window-bar {
  height: clamp(20px,2.26cqw,28px);
  padding: 0 clamp(6px,.7cqw,9px);
  border-bottom: 1px solid rgba(38,37,30,.13);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: grab;
  touch-action: none;
}
.traffic { display: flex; gap: 5px; }
.traffic i { width: 8px; height: 8px; border-radius: 50%; background: #cecdc8; }
.window-bar > span:nth-child(2) { position: absolute; left: 50%; transform: translateX(-50%); font-size: clamp(7px,.88cqw,11px); }
.window-bar button { border: 0; border-radius: 4px; background: #dfded8; font-size: clamp(6px,.72cqw,9px); }
.desktop-layout { min-height: 0; flex: 1; display: grid; grid-template-columns: 24% 32% 44%; font-size: clamp(6px,.82cqw,10px); }
.task-pane, .agent-pane { padding: 14px; border-right: 1px solid rgba(38,37,30,.13); line-height: 2; }
.agent-pane > p:first-of-type { padding: 8px; border: 1px solid rgba(38,37,30,.13); border-radius: 5px; background: #faf9f5; }
.browser-pane { padding: 14px; background: #f7f6f1; }
.browser-pane h2 { margin-top: 36px; font-family: Georgia, serif; font-style: italic; }
.cli-pane { min-height: 0; flex: 1; margin: 0; padding: 18px; font: clamp(6px,.78cqw,10px)/1.6 "SFMono-Regular", Consolas, monospace; white-space: pre-wrap; }
.product-window [data-dir] { position: absolute; z-index: 4; touch-action: none; }
[data-dir="n"], [data-dir="s"] { left: 8px; right: 8px; height: 8px; cursor: ns-resize; }
[data-dir="n"] { top: 0; } [data-dir="s"] { bottom: 0; }
[data-dir="e"], [data-dir="w"] { top: 8px; bottom: 8px; width: 8px; cursor: ew-resize; }
[data-dir="e"] { right: 0; } [data-dir="w"] { left: 0; }
[data-dir="nw"], [data-dir="ne"], [data-dir="sw"], [data-dir="se"] { width: 11px; height: 11px; }
[data-dir="nw"] { left: 0; top: 0; cursor: nwse-resize; }
[data-dir="ne"] { right: 0; top: 0; cursor: nesw-resize; }
[data-dir="sw"] { left: 0; bottom: 0; cursor: nesw-resize; }
[data-dir="se"] { right: 0; bottom: 0; cursor: nwse-resize; }
@media (max-width: 700px) {
  .window-stage { aspect-ratio: 4 / 3; }
  .task-pane { display: none; }
  .desktop-layout { grid-template-columns: 46% 54%; }
}`;

const cursorWindowsJs = String.raw`const stage = document.querySelector(".window-stage");
const windows = [...document.querySelectorAll("[data-window]")];
const PAD = 2.6;
const MIN_W = 34;
const MIN_H = 36;
let action = null;
let topZ = 3;
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const read = (win) => ["x", "y", "w", "h"].reduce((state, key) => ({ ...state, [key]: parseFloat(win.style.getPropertyValue("--" + key)) }), {});
const write = (win, state) => Object.entries(state).forEach(([key, value]) => win.style.setProperty("--" + key, value));

function activate(win) {
  topZ += 1;
  windows.forEach((item) => item.classList.toggle("is-active", item === win));
  win.style.setProperty("--z", topZ);
}

function begin(event, win, type, dir = "") {
  if (event.button !== 0) return;
  event.preventDefault();
  action = { win, type, dir, startX: event.clientX, startY: event.clientY, start: read(win) };
  event.currentTarget.setPointerCapture(event.pointerId);
}

windows.forEach((win) => {
  win.addEventListener("pointerdown", () => activate(win));
  win.querySelector("[data-drag-handle]").addEventListener("pointerdown", (event) => {
    if (!event.target.closest("button")) begin(event, win, "move");
  });
  win.querySelectorAll("[data-dir]").forEach((handle) => handle.addEventListener("pointerdown", (event) => begin(event, win, "resize", handle.dataset.dir)));
});

window.addEventListener("pointermove", (event) => {
  if (!action) return;
  const rect = stage.getBoundingClientRect();
  const dx = (event.clientX - action.startX) / rect.width * 100;
  const dy = (event.clientY - action.startY) / rect.height * 100;
  const start = action.start;
  const next = { ...start };
  if (action.type === "move") {
    next.x = clamp(start.x + dx, PAD, 100 - PAD - start.w);
    next.y = clamp(start.y + dy, PAD, 100 - PAD - start.h);
  } else {
    if (action.dir.includes("e")) next.w = clamp(start.w + dx, MIN_W, 100 - PAD - start.x);
    if (action.dir.includes("s")) next.h = clamp(start.h + dy, MIN_H, 100 - PAD - start.y);
    if (action.dir.includes("w")) { next.x = clamp(start.x + dx, PAD, start.x + start.w - MIN_W); next.w = start.w + start.x - next.x; }
    if (action.dir.includes("n")) { next.y = clamp(start.y + dy, PAD, start.y + start.h - MIN_H); next.h = start.h + start.y - next.y; }
  }
  write(action.win, next);
});

window.addEventListener("pointerup", () => { action = null; });
window.addEventListener("pointercancel", () => { action = null; });`;

const yuxingHtml = String.raw`<section class="yuxing-type" aria-label="御行中文标题系统">
  <header class="type-toolbar">
    <strong>Noto Serif SC · 御行标题</strong>
    <div class="type-modes" role="group" aria-label="标题层级">
      <button class="active" data-target="hero" type="button" aria-pressed="true">主视觉</button>
      <button data-target="section" type="button" aria-pressed="false">章节</button>
    </div>
    <label>字号 <input id="typeSize" type="range" min="34" max="90" value="74"><output>74px</output></label>
  </header>
  <div class="type-specimen">
    <article class="type-sample active" data-sample="hero">
      <p>HERO / DISPLAY 700</p>
      <h1 contenteditable="true">御行枢控，<br>无人机具身<br>智能体。</h1>
    </article>
    <article class="type-sample type-sample--section" data-sample="section">
      <p>SECTION / HEADING 700</p>
      <h2 contenteditable="true">云端大脑，<br>边缘执行。</h2>
    </article>
  </div>
</section>`;

const yuxingCss = String.raw`@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500&family=Noto+Serif+SC:wght@600;700;900&display=swap");
* { box-sizing: border-box; }
.yuxing-type {
  --black: #000;
  --panel: #0a0a0f;
  --white: #fff;
  --muted: #6e6e73;
  --line: rgba(255,255,255,.1);
  --blue: #2997ff;
  min-width: 320px;
  overflow: hidden;
  background: var(--black);
  color: var(--white);
  font-family: "Noto Sans SC", -apple-system, sans-serif;
}
.type-toolbar {
  min-height: 54px;
  padding: 8px 16px;
  border-bottom: 1px solid var(--line);
  display: flex;
  align-items: center;
  gap: 14px;
  background: rgba(10,10,15,.96);
}
.type-toolbar > strong { margin-right: auto; font: 600 12px "Noto Serif SC", serif; }
.type-modes { height: 34px; padding: 3px; border-radius: 7px; background: #18181e; display: flex; gap: 2px; }
.type-modes button { height: 28px; padding: 0 10px; border: 0; border-radius: 5px; background: transparent; color: #85858b; font-size: 10px; }
.type-modes button.active { background: #303038; color: #fff; }
.type-toolbar label { display: flex; align-items: center; gap: 8px; color: #a1a1a6; font-size: 10px; }
.type-toolbar input { width: 92px; accent-color: var(--blue); }
.type-toolbar output { width: 34px; color: #d2d2d7; font-variant-numeric: tabular-nums; }
.type-specimen { min-height: 520px; display: grid; grid-template-columns: minmax(0,1.2fr) minmax(280px,.8fr); }
.type-sample { min-width: 0; padding: clamp(30px,5vw,72px); display: flex; flex-direction: column; justify-content: center; transition: background .2s, opacity .2s; }
.type-sample:not(.active) { opacity: .62; }
.type-sample.active { background: radial-gradient(circle at 20% 50%,rgba(41,151,255,.1),transparent 52%); }
.type-sample--section { border-left: 1px solid var(--line); background: var(--panel); }
.type-sample p { margin: 0 0 20px; color: var(--blue); font-size: 10px; font-weight: 500; letter-spacing: 4px; }
.type-sample h1, .type-sample h2 { margin: 0; color: var(--white); font-family: "Noto Serif SC", serif; font-weight: 700; outline: none; }
.type-sample h1 { font-size: clamp(44px,6vw,74px); line-height: 1.06; letter-spacing: -1px; }
.type-sample h2 { font-size: clamp(34px,4.5vw,56px); line-height: 1.08; letter-spacing: -.5px; }
.type-sample [contenteditable]:focus { box-shadow: 0 2px 0 var(--blue); }
@media (max-width: 720px) {
  .type-toolbar { align-items: flex-start; flex-wrap: wrap; }
  .type-toolbar > strong { width: 100%; margin: 0; }
  .type-toolbar label { margin-left: auto; }
  .type-specimen { grid-template-columns: 1fr; }
  .type-sample { min-height: 300px; padding: 32px 24px; }
  .type-sample--section { border-top: 1px solid var(--line); border-left: 0; }
}`;

const yuxingJs = String.raw`const modes = [...document.querySelectorAll("[data-target]")];
const samples = [...document.querySelectorAll("[data-sample]")];
const size = document.querySelector("#typeSize");
const output = size.nextElementSibling;
let active = "hero";

function selectSample(name) {
  active = name;
  modes.forEach((button) => {
    const selected = button.dataset.target === name;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  samples.forEach((sample) => sample.classList.toggle("active", sample.dataset.sample === name));
  const title = document.querySelector('[data-sample="' + name + '"] :is(h1,h2)');
  const computedSize = Math.round(parseFloat(getComputedStyle(title).fontSize));
  size.value = String(computedSize);
  output.value = computedSize + "px";
}

modes.forEach((button) => button.addEventListener("click", () => selectSample(button.dataset.target)));
size.addEventListener("input", () => {
  const title = document.querySelector('[data-sample="' + active + '"] :is(h1,h2)');
  title.style.fontSize = size.value + "px";
  output.value = size.value + "px";
});`;

const googleLabsOrbitHtml = String.raw`<section class="orbit-carousel" aria-label="实验卡片轮播">
  <div class="bg-shapes" aria-hidden="true" style="--shapes-rot:0deg">
    <div class="bg-shapes__slot" style="--slot-tilt:-18deg">
      <svg class="background-shape" viewBox="0 0 360 360">
        <path class="shape-path is-active" data-form="hexagon" d="..." />
        <path class="shape-path" data-form="circle" d="..." />
        <path class="shape-path" data-form="rounded-square" d="..." />
        <path class="shape-path" data-form="clover" d="..." />
      </svg>
    </div>
    <!-- 其余 3 层使用相同 SVG，通过位置、倾角和漂浮参数形成错层 -->
  </div>
  <h2>Be the first to create</h2>
  <div class="orbit-window" tabindex="0">
    <div class="orbit-track" style="--position:0">
      <article class="orbit-item" style="--slot:-1">...</article>
      <article class="orbit-item is-center" style="--slot:0">...</article>
      <article class="orbit-item" style="--slot:1">...</article>
    </div>
  </div>
  <div class="carousel-controls">
    <button data-direction="-1" aria-label="上一张">←</button>
    <button data-direction="1" aria-label="下一张">→</button>
  </div>
  <div class="categories" role="tablist">
    <button role="tab">All</button><button role="tab" aria-pressed="true">Create</button>
    <button role="tab">Develop</button><button role="tab">Explore</button><button role="tab">Learn</button>
  </div>
</section>`;

const googleLabsOrbitCss = String.raw`@property --morph-twist { syntax: "<angle>"; inherits: false; initial-value: 0deg; }
.bg-shapes { position: absolute; inset: 0; z-index: 0; perspective: 1200px; pointer-events: none; }
.bg-shapes__slot {
  position: absolute;
  width: clamp(310px,43vw,550px);
  aspect-ratio: 1;
  rotate: var(--slot-tilt);
  transform: rotateY(var(--shapes-rot));
  transform-style: preserve-3d;
  transition: transform .9s cubic-bezier(.65,0,.35,1);
}
.background-shape {
  width: 100%; height: 100%; color: var(--shape-color);
  animation: float-x 8s ease-in-out infinite, float-y 14.64s ease-in-out infinite, float-r 11.6s ease-in-out infinite;
  animation-composition: add, add, add;
}
.shape-path { opacity: 0; transition: opacity .26s cubic-bezier(.4,0,.2,1) .28s; }
.shape-path.is-active { opacity: 1; }
@keyframes float-x { 25% { transform: translateX(var(--float-x)); } 75% { transform: translateX(calc(var(--float-x) * -1)); } }
@keyframes float-y { 25% { transform: translateY(var(--float-y)); } 75% { transform: translateY(calc(var(--float-y) * -1)); } }
@keyframes float-r { 25% { transform: rotate(var(--float-r)); } 75% { transform: rotate(calc(var(--float-r) * -1)); } }

.orbit-window { position: relative; z-index: 2; height: 616px; overflow: hidden; }
.orbit-track {
  --position: 0;
  position: absolute;
  left: 50%; top: -3900px;
  width: 8500px; height: 8500px;
  border-radius: 50%;
  transform: translateX(-50%) rotate(calc(var(--position) * -6deg));
  transition: transform .72s cubic-bezier(.22,.7,.18,1);
}
.orbit-item {
  --slot: 0;
  position: absolute;
  left: calc(50% - 185px); top: 3900px;
  width: 370px; height: 560px;
  transform-origin: 50% 4250px;
  transform: rotate(calc(var(--slot) * 6deg));
}
.experiment-card { height: 100%; border-radius: 26px; background: #fff; }
.experiment-card img { width: 322px; height: 322px; object-fit: cover; }
.categories button { border: 0; border-radius: 40px; }`;

const googleLabsOrbitJs = String.raw`let position = 0;
let shapeRotation = 0;
const track = document.querySelector(".orbit-track");

function move(direction) {
  position += direction;
  track.style.setProperty("--position", position);
}

document.querySelectorAll("[data-direction]").forEach((button) => {
  button.addEventListener("click", () => move(Number(button.dataset.direction)));
});

function setCategory(category) {
  const theme = themes[category]; // shape、color、cards 和 heading 均由配置提供
  shapeRotation += 180;
  root.style.setProperty("--shapes-rot", shapeRotation + "deg");
  root.style.setProperty("--shape-color", theme.shape);
  setTimeout(() => setActiveSvgPath(theme.form), 360);
}

document.querySelector(".orbit-window").addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    move(event.key === "ArrowLeft" ? -1 : 1);
  }
});`;

const thinkingOrbHtml = String.raw`<ThinkingOrb state="working" size={64} />

<div className="agent-status">
  <ThinkingOrb state={agentState} size={20} />
  <span>{statusLabel}</span>
</div>`;

const thinkingOrbCss = String.raw`.agent-status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #171717;
  font: 500 14px/20px Inter, sans-serif;
}

[data-theme="dark"] .agent-status { color: #f6f6f2; }

@media (prefers-reduced-motion: reduce) {
  .agent-status canvas { animation: none; }
}`;

const thinkingOrbJs = String.raw`import { ThinkingOrb } from "thinking-orbs";

const states = [
  { state: "working", mode: "orbits", label: "Working" },
  { state: "searching", mode: "globe", label: "Searching" },
  { state: "solving", mode: "rubik", label: "Solving" },
  { state: "listening", mode: "wave", label: "Agent listening" },
  { state: "composing", mode: "ribbon", label: "Thinking" },
  { state: "shaping", mode: "morph", label: "Agent shaping" }
];

export function OrbGallery() {
  return states.map(({ state, label }) => (
    <button key={state} aria-label={label}>
      <ThinkingOrb state={state} size={64} theme="auto" />
      <span>{label}</span>
    </button>
  ));
}`;

const minimaxTypeHtml = String.raw`<section class="minimax-type" aria-label="MiSans 与 Outfit 字体样张">
  <header class="type-controls">
    <strong>MiSans × Outfit</strong>
    <div class="type-modes" role="group" aria-label="排版场景">
      <button data-mode="brand" aria-pressed="true">品牌标题</button>
      <button data-mode="section" aria-pressed="false">产品层级</button>
      <button data-mode="article" aria-pressed="false">研究混排</button>
    </div>
    <label>字号 <input id="titleSize" type="range" min="48" max="96" value="80"><output>80px</output></label>
  </header>
  <div class="type-view is-active" data-view="brand">
    <p class="type-eyebrow">FRONTIER MODEL · OUTFIT 500</p>
    <h1 contenteditable="true">MiniMax <span>M3</span></h1>
    <p class="type-intro">一个使用全新注意力架构 MSA、拥有 1M 超长上下文的 Coding / Agentic 前沿模型</p>
    <div class="type-metrics"><div><strong>前沿 Coding 能力</strong><span>真实工程级，不止生成代码，更懂协作</span></div><div><strong>MSA · 1M 上下文</strong><span>全新稀疏注意力，让 context 真正可 scale</span></div><div><strong>原生多模态</strong><span>Step 0 混合训练 · interleaved 数据</span></div></div>
  </div>
  <div class="type-view" data-view="section">
    <h2 contenteditable="true">旗舰模型</h2><p class="type-subtitle">MiniMax 最新首推模型，覆盖语言模型 / 视频生成 / 语音 & 音乐</p>
    <div class="type-products"><article><small>LANGUAGE MODEL</small><h3>MiniMax M3</h3><p>Coding 顶尖 · 1M 上下文 · 原生多模态</p></article><article><small>VIDEO GENERATION</small><h3>海螺 Hailuo 2.3</h3><p>更自然的运动与更稳定的视觉表现</p></article></div>
  </div>
  <div class="type-view" data-view="article">
    <p class="type-eyebrow">最新研究 · MISANS 500</p>
    <h2 class="article-title" contenteditable="true">MaxProof：生成式验证强化学习驱动的数学证明进化系统</h2>
    <i class="article-rule"></i><p class="article-copy">中英文、数字与技术术语共用 MiSans，维持统一的字面高度和阅读节奏。品牌名与短英文产品名切换到 Outfit，形成更鲜明的科技品牌识别。</p>
  </div>
</section>`;

const minimaxTypeCss = String.raw`@font-face{font-family:MiSans;src:url("https://filecdn.minimax.chat/public/MiSans-Normal.woff2") format("woff2");font-weight:400;font-display:swap}
@font-face{font-family:MiSans;src:url("https://filecdn.minimax.chat/public/MiSans-Medium.woff2") format("woff2");font-weight:500;font-display:swap}
@font-face{font-family:Outfit;src:url("https://filecdn.minimax.chat/public/09e926a9-f079-4d5f-82c9-1e17dd0ababc.ttf") format("truetype");font-display:swap}
*{box-sizing:border-box}button,input{font:inherit}
.minimax-type{--ink:#181e25;--muted:#86909c;--line:#e5e8eb;--blue:#2864dc;--title-size:80px;min-height:620px;overflow:hidden;border:1px solid var(--line);border-radius:6px;background:#fff;color:var(--ink);font-family:MiSans,"PingFang SC",sans-serif}
.type-controls{min-height:56px;padding:8px 18px;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:16px;background:#fbfcfd}.type-controls strong{font:500 13px Outfit,sans-serif}.type-controls label{display:flex;align-items:center;gap:8px;color:var(--muted);font-size:10px}.type-controls input{width:90px;accent-color:var(--blue)}.type-controls output{width:34px;color:#45515e}
.type-modes{margin-left:auto;padding:3px;display:flex;gap:2px;border:1px solid var(--line);border-radius:7px;background:#f2f4f6}.type-modes button{height:28px;padding:0 12px;border:0;border-radius:4px;background:transparent;color:#697582;font-size:11px}.type-modes button[aria-pressed="true"]{background:#fff;color:var(--ink);box-shadow:0 1px 4px rgba(24,30,37,.12)}
.type-view{display:none;min-height:564px;padding:clamp(34px,6vw,76px)}.type-view.is-active{display:block}.type-eyebrow{margin:0 0 18px;color:var(--blue);font:600 11px/16px MiSans,sans-serif}.type-view h1{margin:0;font:500 var(--title-size)/1.1 Outfit,sans-serif;letter-spacing:0;outline:none}.type-view h1 span{color:var(--blue)}.type-intro{max-width:650px;margin:18px 0 0;color:#45515e;font:400 16px/24px MiSans,sans-serif}
.type-metrics{margin-top:54px;padding-top:18px;border-top:1px solid var(--line);display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.type-metrics strong,.type-metrics span{display:block}.type-metrics strong{font:500 20px/30px MiSans,sans-serif}.type-metrics span{margin-top:3px;color:var(--muted);font:400 13px/20px MiSans,sans-serif}
.type-view>h2{margin:0;font:500 28px/48px MiSans,sans-serif;outline:none}.type-subtitle{margin:0 0 34px;color:var(--muted);font:400 16px/24px MiSans,sans-serif}.type-products{display:grid;grid-template-columns:1.2fr .8fr;gap:1px;background:var(--line);border:1px solid var(--line)}.type-products article{min-height:230px;padding:28px;background:#f7f9ff;display:flex;flex-direction:column;justify-content:space-between}.type-products article+article{background:#f2fbf8}.type-products h3{margin:0;font:500 28px/35px Outfit,sans-serif}.type-products article+article h3{font-size:18px;line-height:22.5px}.type-products p{margin:0;color:#45515e;font:400 14px/21px MiSans,sans-serif}
.type-view>.article-title{max-width:760px;font:500 20px/30px MiSans,sans-serif}.article-rule{display:block;width:64px;height:3px;margin:28px 0;background:var(--blue)}.article-copy{max-width:760px;margin:0;color:#45515e;font:400 16px/27px MiSans,sans-serif}
@media(max-width:680px){.type-controls{align-items:flex-start;flex-wrap:wrap}.type-modes{order:3;width:100%;margin:0}.type-modes button{flex:1;padding:0 4px}.type-view{padding:34px 22px}.type-view h1{font-size:min(var(--title-size),15vw)}.type-metrics{grid-template-columns:1fr;gap:12px;margin-top:36px}.type-view>h2{font-size:20px}.type-products{grid-template-columns:1fr}.type-products article{min-height:150px}}`;

const minimaxTypeJs = String.raw`const modeButtons=[...document.querySelectorAll("[data-mode]")];
const typeViews=[...document.querySelectorAll("[data-view]")];
const titleSize=document.querySelector("#titleSize");
const titleOutput=titleSize.nextElementSibling;
function setTypeMode(mode){
  modeButtons.forEach((button)=>button.setAttribute("aria-pressed",String(button.dataset.mode===mode)));
  typeViews.forEach((view)=>view.classList.toggle("is-active",view.dataset.view===mode));
  titleSize.disabled=mode!=="brand";
}
modeButtons.forEach((button)=>button.addEventListener("click",()=>setTypeMode(button.dataset.mode)));
titleSize.addEventListener("input",()=>{
  document.querySelector(".minimax-type").style.setProperty("--title-size",titleSize.value+"px");
  titleOutput.value=titleSize.value+"px";
});`;

const vibeIslandAskHtml = String.raw`<section class="agent-island-demo" aria-label="AI Agent 灵动岛四状态面板">
  <div class="agent-island" data-state="overview" data-view="expanded">
    <div class="island-layer overview is-active" data-layer="overview">
      <div class="usage"><b>5h</b><strong>11%</strong><span>4h1m</span><i>|</i><b>7d</b><strong>2%</strong><span>6h1m</span></div>
      <article class="session hero"><span class="pet">●</span><div><p>fix auth bug <small>Claude · iTerm · 27m</small></p><span>You: fix the token validation before deploy</span></div></article>
      <article class="session"><i></i><p>landing page motion</p><small>Codex · Cursor · 12m</small></article>
      <article class="session"><i class="working"></i><p>search indexing</p><small>Gemini · Ghostty · 5h</small></article>
    </div>
    <div class="island-layer compact overview-compact" data-layer="overview-collapsed"><b>●</b><span>fix auth bug</span><small>3 Agents</small></div>
    <div class="island-layer approval" data-layer="approval">
      <header><i></i>Permission Request</header>
      <p class="tool"><b>⚠ Edit</b> src/auth/middleware.ts</p>
      <div class="diff"><span>12 const verify = (token) =&gt;</span><del>13 - jwt.verify(token);</del><ins>13 + if (!token) throw new</ins><ins>14 + &nbsp; AuthError('missing');</ins></div>
      <footer><button data-decision="Denied">Deny <kbd>⌘N</kbd></button><button class="allow" data-decision="Approved">Allow <kbd>⌘Y</kbd></button></footer>
    </div>
    <div class="island-layer compact approval-compact" data-layer="approval-collapsed"><b>!</b><span>Permission Request</span><small>Edit</small></div>
    <div class="island-layer ask" data-layer="ask">
      <header>▰ Claude asks</header><p>Which deployment target?</p>
      <div class="ask-options"><button data-value="Production"><kbd>⌘1</kbd>Production</button><button data-value="Staging"><kbd>⌘2</kbd>Staging</button><button data-value="Local only"><kbd>⌘3</kbd>Local only</button></div>
    </div>
    <div class="island-layer compact ask-compact" data-layer="ask-collapsed"><b>?</b><span>Claude asks</span><small>1 question</small></div>
    <div class="island-layer jump" data-layer="jump">
      <div class="usage"><b>5h</b><strong>11%</strong><span>4h1m</span><i>|</i><b>7d</b><strong>2%</strong><span>6h1m</span></div>
      <button class="session hero highlight" data-jump="fix auth bug"><span class="pet">●</span><div><p>fix auth bug <small>Claude · iTerm · 28m</small></p><span>Done — click to jump</span></div></button>
      <button class="session" data-jump="landing page motion"><i></i><p>landing page motion</p><small>Codex · Cursor · 13m</small></button>
      <button class="session" data-jump="search indexing"><i class="working"></i><p>search indexing</p><small>Gemini · Ghostty · 5h</small></button>
    </div>
    <div class="island-layer compact jump-compact" data-layer="jump-collapsed"><b>✓</b><span>fix auth bug</span><small>Done · Jump</small></div>
  </div>
  <nav class="state-switch" aria-label="组件状态">
    <button data-show="overview" aria-pressed="true">总览</button><button data-show="approval" aria-pressed="false">批准</button><button data-show="ask" aria-pressed="false">询问</button><button data-show="jump" aria-pressed="false">跳回</button><button class="collapse-toggle" aria-pressed="false"><span>↑</span><em>收起</em></button>
  </nav>
  <p class="selection" aria-live="polite"></p>
</section>`;

const vibeIslandAskCss = String.raw`* { box-sizing: border-box; }
button { font: inherit; }
.agent-island-demo { --idle:#22c55e;--work:#3b82f6;--alert:#f97316;--question:#06b6d4;--spring:cubic-bezier(.175,.885,.32,1.1);position:relative;min-height:430px;overflow:hidden;display:flex;justify-content:center;background:linear-gradient(145deg,#eef4f7,#cbd8df);font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text","Segoe UI",sans-serif; }
.agent-island { position:relative;width:380px;height:175px;overflow:visible;border-radius:0 0 14px 14px;background:#000;color:#e5e5e5;box-shadow:0 2px 8px rgba(0,0,0,.6),0 8px 24px rgba(0,0,0,.3);transition:width .5s var(--spring),height .5s var(--spring),box-shadow .4s; }
.agent-island::before,.agent-island::after { content:"";position:absolute;top:0;width:13px;height:25px;pointer-events:none; }
.agent-island::before { left:-13px;border-radius:0 6px 0 0;box-shadow:5px 0 0 #000; }
.agent-island::after { right:-13px;border-radius:6px 0 0 0;box-shadow:-5px 0 0 #000; }
.agent-island[data-view="expanded"][data-state="overview"],.agent-island[data-view="expanded"][data-state="jump"] { width:380px;height:175px; }
.agent-island[data-view="expanded"][data-state="approval"] { width:380px;height:220px;box-shadow:0 8px 24px rgba(0,0,0,.3),0 0 20px rgba(249,115,22,.15); }
.agent-island[data-view="expanded"][data-state="ask"] { width:340px;height:165px;box-shadow:0 8px 24px rgba(0,0,0,.3),0 0 20px rgba(6,182,212,.15); }
.agent-island[data-view="collapsed"] { height:40px;border-radius:0 0 10px 10px; }
.agent-island[data-view="collapsed"][data-state="overview"] { width:240px;height:36px; }
.agent-island[data-view="collapsed"][data-state="approval"] { width:300px;box-shadow:0 8px 24px rgba(0,0,0,.3),0 0 14px rgba(249,115,22,.12); }
.agent-island[data-view="collapsed"][data-state="ask"] { width:260px;box-shadow:0 8px 24px rgba(0,0,0,.3),0 0 14px rgba(6,182,212,.12); }
.agent-island[data-view="collapsed"][data-state="jump"] { width:280px; }
.island-layer { position:absolute;inset:0;overflow:hidden;border-radius:inherit;opacity:0;filter:blur(6px);transform:scale(.96);pointer-events:none;transition:opacity .25s,filter .3s,transform .35s var(--spring); }
.island-layer.is-active { opacity:1;filter:none;transform:scale(1);pointer-events:auto;transition-delay:.06s; }
.compact { padding:0 14px;display:flex;align-items:center;gap:8px;color:rgba(255,255,255,.56);font:11px/1 ui-monospace,monospace; }.compact b{width:17px;height:17px;display:grid;place-items:center;border-radius:5px;background:rgba(255,255,255,.08)}.compact span{min-width:0;flex:1;overflow:hidden;color:rgba(255,255,255,.82);text-overflow:ellipsis;white-space:nowrap}.compact small{padding:2px 5px;border-radius:4px;background:rgba(255,255,255,.1);font-size:9px;white-space:nowrap}.overview-compact b{color:var(--idle)}.approval-compact b,.approval-compact small{color:var(--alert)}.ask-compact b,.ask-compact small{color:var(--question)}.jump-compact b,.jump-compact small{color:#4ade80}
.overview,.jump { padding:10px 12px;display:flex;flex-direction:column;gap:3px; }
.usage { height:17px;padding:2px 8px;display:flex;align-items:center;gap:4px;color:rgba(255,255,255,.4);font:9.5px/1 ui-monospace,monospace; }.usage b{color:rgba(255,255,255,.82)}.usage strong{color:#57d977}.usage i{color:rgba(255,255,255,.22);font-style:normal}
.session { min-height:31px;padding:5px 8px;border:0;border-radius:6px;display:flex;align-items:center;gap:8px;background:transparent;color:inherit;text-align:left; }.session.hero{min-height:47px;padding:8px}.session.highlight{background:rgba(255,255,255,.06)}button.session{width:100%;cursor:pointer}.session:hover{background:rgba(255,255,255,.08)}
.session p{min-width:0;flex:1;margin:0;overflow:hidden;color:#fff;font-size:11px;text-overflow:ellipsis;white-space:nowrap}.session p small,.session small{color:rgba(255,255,255,.45);font-size:9px}.session span{color:rgba(255,255,255,.4);font-size:10px}.jump .hero span:last-child{color:#4ade80}.session>i{width:6px;height:6px;border-radius:50%;background:var(--idle)}.session>i.working{background:var(--work)}.pet{color:var(--idle)!important}
.approval { padding:12px 14px;display:flex;flex-direction:column;gap:6px; }.approval header{display:flex;align-items:center;gap:6px;color:rgba(255,255,255,.4);font-size:11px}.approval header i{width:6px;height:6px;border-radius:50%;background:var(--alert);animation:pulse 1.5s infinite}.tool{margin:0;overflow:hidden;color:rgba(255,255,255,.85);font:11px/1 ui-monospace,monospace;text-overflow:ellipsis;white-space:nowrap}.tool b{color:var(--alert)}
.diff { padding:3px 0;overflow:hidden;border-radius:4px;background:rgba(255,255,255,.04);font:9px/1.6 ui-monospace,monospace; }.diff span,.diff del,.diff ins{padding:0 6px;display:block;text-decoration:none}.diff span{color:rgba(255,255,255,.5)}.diff del{color:#fca5a5;background:rgba(249,115,22,.08)}.diff ins{color:#4ade80;background:rgba(34,197,94,.08)}
.approval footer { margin-top:auto;display:flex;gap:6px; }.approval footer button{height:27px;flex:1;border:0;border-radius:6px;background:rgba(255,255,255,.15);color:#fff;font-size:10px}.approval footer .allow{background:rgba(255,255,255,.9);color:#000}.approval kbd{font-size:8px;opacity:.5}
.ask { padding:12px 14px;display:flex;flex-direction:column;gap:6px; }.ask header{color:var(--question);font-size:10px;font-weight:600}.ask>p{margin:0;color:rgba(255,255,255,.9);font-size:11px}.ask-options{display:flex;flex-direction:column;gap:3px}.ask-options button{height:28px;padding:5px 10px;border:0;border-radius:6px;display:flex;align-items:center;gap:8px;background:rgba(6,182,212,.15);color:rgba(255,255,255,.9);font-size:10px}.ask-options button:hover,.ask-options button.is-selected{background:rgba(6,182,212,.35)}.ask-options kbd{width:18px;height:18px;border-radius:4px;display:grid;place-items:center;background:rgba(6,182,212,.6);font-size:9px}
.state-switch { position:absolute;left:50%;bottom:24px;transform:translateX(-50%);padding:4px;display:flex;gap:3px;border-radius:8px;background:rgba(248,251,252,.82); }.state-switch button{height:28px;padding:0 12px;border:0;border-radius:5px;background:transparent;color:#51636d;font-size:11px}.state-switch button[aria-pressed="true"]{background:#fff;color:#10232e;box-shadow:0 1px 5px rgba(30,49,59,.14)}.state-switch .collapse-toggle{min-width:62px;margin-left:3px;border-left:1px solid rgba(20,35,45,.12);border-radius:0 5px 5px 0}.collapse-toggle span{display:inline-block;width:12px;transition:transform .3s var(--spring)}.collapse-toggle[aria-pressed="true"] span{transform:rotate(180deg)}.collapse-toggle em{font-style:normal}
.selection { position:absolute;left:50%;bottom:66px;transform:translateX(-50%);margin:0;color:#2c4a58;font-size:11px; }
@keyframes pulse{50%{opacity:.4}}
@media(max-width:420px){.agent-island[data-view="expanded"][data-state="overview"],.agent-island[data-view="expanded"][data-state="approval"],.agent-island[data-view="expanded"][data-state="jump"]{width:calc(100vw - 28px)}.agent-island[data-view="expanded"][data-state="ask"]{width:calc(100vw - 42px)}.state-switch{width:calc(100% - 20px)}.state-switch button{min-width:0;flex:1;padding:0 3px}.state-switch .collapse-toggle{min-width:54px}}
@media(prefers-reduced-motion:reduce){.agent-island,.island-layer{transition-duration:.01ms}.approval header i{animation:none}}`;

const vibeIslandAskJs = String.raw`const island=document.querySelector(".agent-island");
const layers=[...document.querySelectorAll("[data-layer]")];
const stateButtons=[...document.querySelectorAll("[data-show]")];
const options=[...document.querySelectorAll(".ask-options button")];
const selection=document.querySelector(".selection");
const collapseToggle=document.querySelector(".collapse-toggle");
let resetTimer;
let collapsed=false;
function announce(message){clearTimeout(resetTimer);selection.textContent=message;resetTimer=setTimeout(()=>selection.textContent="",1600)}
function render(){const layerName=island.dataset.state+(collapsed?"-collapsed":"");island.dataset.view=collapsed?"collapsed":"expanded";layers.forEach(layer=>layer.classList.toggle("is-active",layer.dataset.layer===layerName));stateButtons.forEach(button=>button.setAttribute("aria-pressed",String(button.dataset.show===island.dataset.state)));collapseToggle.setAttribute("aria-pressed",String(collapsed));collapseToggle.querySelector("em").textContent=collapsed?"展开":"收起"}
function setState(state){island.dataset.state=state;render()}
function setCollapsed(value){collapsed=value;render()}
function choose(option){options.forEach(item=>item.classList.toggle("is-selected",item===option));announce("Selected: "+option.dataset.value)}
stateButtons.forEach(button=>button.addEventListener("click",()=>setState(button.dataset.show)));
collapseToggle.addEventListener("click",()=>setCollapsed(!collapsed));
options.forEach(option=>option.addEventListener("click",()=>choose(option)));
document.querySelectorAll("[data-decision]").forEach(button=>button.addEventListener("click",()=>announce(button.dataset.decision+": src/auth/middleware.ts")));
document.querySelectorAll("[data-jump]").forEach(button=>button.addEventListener("click",()=>announce("Jumped to: "+button.dataset.jump)));
window.addEventListener("keydown",event=>{if(island.dataset.state!=="ask")return;const index=Number(event.key)-1;if(index>=0&&index<options.length)choose(options[index])});`;

export const assetTypes = [
  { id: "all", label: "全部资产", icon: "grid" },
  { id: "typography", label: "字体排版", icon: "type" },
  { id: "card", label: "卡片组件", icon: "box" },
  { id: "layout", label: "布局结构", icon: "layout" },
  { id: "interaction", label: "交互动效", icon: "mouse" },
  { id: "graphic", label: "图形视觉", icon: "image" },
  { id: "favorite", label: "我的收藏", icon: "star" }
];

export const seedAssets = [
  {
    id: "google-labs-orbit-card-carousel",
    source: { id: "google-labs", name: "Google Labs", url: "https://labs.google/?category=create", host: "labs.google" },
    title: "圆周倾斜实验卡片轮播",
    type: "card",
    status: "ready",
    favorite: false,
    updatedAt: "2026-07-24",
    preview: "./components/google-labs-orbit-carousel/demo.html",
    referenceImage: "./assets/references/google-labs-create-carousel.png",
    description: "将产品卡片挂载在一个远大于视口的圆形轨道上，并在其后铺设四层持续漂浮的可变 SVG 几何形状。中心卡保持正向，两侧卡片随圆周逐级倾斜；分类切换时背景形状绕 Y 轴翻面、模糊收缩并变形成对应图形，让内容、主题色与空间动效形成一次完整过渡。",
    usage: "适用于实验项目、创意工具、作品案例和产品系列的强视觉浏览。相比普通横向列表，它能在首屏同时露出更多相邻内容并建立明确的中心焦点；不适合需要快速比较大量参数的密集型列表。",
    implementation: "原站并非横向 scroll-snap，而是把 APP-CAROUSEL-CARD 绝对定位到 8500px 圆形容器 home-carousel__circle 的圆周上。背景也不是位图或视频：APP-SHAPES-BG 创建 4 个绝对定位槽，每槽包含一个内置六边形、圆形、圆角方形和四叶形路径的 SVG。X、Y 位移与旋转使用三组不同周期和负延迟的关键帧叠加，制造非同步漂浮；分类变化时槽位以 0.9 秒 rotateY 翻面，并在中段交叉淡化到新路径。复用时可以直接修改 SVG path、currentColor、槽位数量、尺寸、位置、倾角、漂浮幅度、周期和翻转速度；新增任意 SVG 路径也可扩展形态。复现版将形状配置与分类主题集中在 themes，保留循环轨道、键盘方向键、五类筛选和 prefers-reduced-motion 静态降级。",
    tags: ["卡片轮播", "圆周轨道", "漂浮背景", "SVG 变形", "3D 翻面", "分类筛选", "Google Labs"],
    tokens: [
      ["原站技术", "Angular 21.2.7 / 自定义 APP-HOME-CAROUSEL 与 APP-CAROUSEL-CARD"],
      ["轨道尺寸", "8500 × 8500px 圆形容器"],
      ["桌面卡片", "370 × 560px"],
      ["卡片圆角", "26px"],
      ["封面图片", "322 × 322px / object-fit: cover"],
      ["内容区域", "322 × 166px"],
      ["卡片标题", "Google Sans / 26px"],
      ["相邻角度", "约 6°；按钮每次旋转一个卡位"],
      ["居中状态", ".carousel-card.is-centered；保持 0° 正向"],
      ["分类", "All / Create / Develop / Explore / Learn"],
      ["筛选状态", "role=tab + aria-pressed；同步内容、标题、URL 与主题"],
      ["分类按钮", "40px 圆角胶囊；选中态使用分类主题色"],
      ["背景实现", "4 个 DOM/SVG 几何槽；不是图片或视频"],
      ["内置形态", "六边形 / 圆形 / 圆角方形 / 四叶形；切换激活 path"],
      ["分类颜色", "Create #FFBDF9 / Develop #48F08B / Explore #FCC934 / Learn #5E9BFF"],
      ["3D 翻面", "rotateY 每次累加 180deg；perspective 1200px"],
      ["翻面过渡", "0.9s cubic-bezier(0.65,0,0.35,1)"],
      ["路径淡入淡出", "0.26s cubic-bezier(0.4,0,0.2,1)，延迟 0.28s"],
      ["漂浮轨迹", "X / Y / rotate 三组关键帧叠加；4 层周期约 8–10.5s，使用不同负延迟"],
      ["可修改项", "SVG path、颜色、数量、尺寸、位置、倾角、漂浮幅度与周期、翻转速度"],
      ["交互入口", "前一张 / 后一张按钮 + 键盘左右方向键"],
      ["配图策略", "Mixboard / Pomelli / Flow Music / Project Genie 原站 WebP 本地保存"]
    ],
    evidence: [
      ["分析日期", "2026-07-24"],
      ["分析页面", "labs.google/?category=create 实时页面与用户附件截图"],
      ["目标区块", "Interactive carousel of Be the first to create tools"],
      ["DOM 结构", ".home-carousel.create > .home-carousel__container > .home-carousel__circle > app-carousel-card"],
      ["轨道实测", ".home-carousel__circle 为 8500 × 8500px；卡片通过旋转矩阵沿圆周排布"],
      ["旋转验证", "点击 Next card 后圆轨道由 0° 变为 -6°，中心卡由 Pomelli 切换为 Google Flow Music"],
      ["卡片实测", "中心卡 370 × 560px、26px 圆角；封面 322 × 322px；内容区 322 × 166px"],
      ["字体实测", "标题 Google Sans / 26px；后备 Helvetica、Arial、sans-serif"],
      ["筛选验证", "Create 初始 aria-pressed=true；切换 All 后 URL 更新为 ?category=all，标题变为 Be the first to experiment，并换入完整数据集"],
      ["背景 DOM", ".bg-shapes > 4 个 .bg-shapes__slot；容器 perspective:1200px，层级 z-index:-2"],
      ["形状结构", "每个 SVG 同时保存 4 条 path，通过 shape__path--active 切换六边形、圆、圆角方形与四叶形"],
      ["漂浮实测", "每层分别叠加 gl-float-x / gl-float-y / gl-float-r；不同幅度、时长和负延迟避免同步运动"],
      ["分类翻面", "--shapes-rot 驱动 rotateY；槽位 transition 为 0.9s cubic-bezier(0.65,0,0.35,1)"],
      ["可复用结论", "背景为公开前端 SVG/CSS/JS 结构，可替换路径和全部运动参数，无图像生成依赖"],
      ["资源来源", "四张 Create 分类封面由浏览器已加载的 labs.google 原始 WebP 资源保存"],
      ["复现边界", "保留圆周几何与交互逻辑；用原生 CSS/JS 替代原站 Angular 组件运行时与液态按钮装饰"]
    ],
    code: { html: googleLabsOrbitHtml, css: googleLabsOrbitCss, js: googleLabsOrbitJs }
  },
  {
    id: "thinking-orbs-working-indicator",
    source: { id: "thinking-orbs", name: "thinking-orbs", url: "https://github.com/Jakubantalik/thinking-orbs", host: "github.com" },
    title: "点阵轨道 AI 思考图标",
    type: "interaction",
    status: "ready",
    favorite: false,
    updatedAt: "2026-07-23",
    preview: "./components/thinking-orbs-working/demo.html",
    description: "一套用点阵、三维深度和轮廓变形表达 Agent 进程的六状态图标系统。Working 是粒子轨道，Searching 是扫描经纬球，Solving 是分带旋转球，Listening 是双频波动球，Composing 是点阵丝带，Shaping 是圆、三角与方形之间的轮廓变形。live demo 中的 Thinking、Agent listening、Agent shaping 分别对应 composing、listening、shaping，并不是额外状态。",
    usage: "用于把 Agent 的真实任务阶段映射成可辨识的视觉反馈：执行用 Working，检索用 Searching，推理解题用 Solving，接收语音或输入用 Listening，组织内容用 Composing，生成结构或塑形用 Shaping。64px 适合头像和主状态，20px 适合消息行、按钮和状态标签。",
    implementation: "原项目是 MIT 许可的 React 组件，运行时无第三方渲染依赖，宿主只需 React 18。六个 state 会在 src/presets.ts 中映射到六套独立 Canvas 2D 算法，而非同一动画替换文案：working/orbits、searching/globe、solving/rubik、listening/wave、composing/ribbon、shaping/morph。共享 core 负责正交投影、z-sort、粒径与灰度深度；各状态为 64px 与 20px 分别配置速度、点数和点径。资源预览保留六态切换、浅深主题、暂停、隐藏页暂停、DPR 上限 2 与 prefers-reduced-motion 静态帧。",
    tags: ["AI", "思考动效", "Canvas", "六状态", "加载状态"],
    tokens: [
      ["渲染技术", "Canvas 2D / arc() / 无 WebGL 与滤镜"],
      ["标准尺寸", "64px"],
      ["行内尺寸", "20px"],
      ["Working", "working → orbits；倾斜轨道 + 幽灵路径 + 每轨 3 个运动粒子"],
      ["Searching", "searching → globe；点阵经纬球 + 扫描经线"],
      ["Solving", "solving → rubik；14 次确定性分带四分之一转，打乱后逆序复原"],
      ["Listening", "listening → wave；两组不同频率波驱动球面环带与点径"],
      ["Composing", "composing → ribbon；150 点幽灵球 + 5 轨、88 段波动丝带"],
      ["Shaping", "shaping → morph；圆 → 三角 → 方形 → 圆；每段静置 1.4s、变形 0.9s"],
      ["Live demo 文案", "Composing 显示 Thinking；Listening 显示 Agent listening；Shaping 显示 Agent shaping"],
      ["Working 速度", "64px 1.885× / 20px 3.9×"],
      ["Searching 速度", "64px 2.015× / 20px 2.665×"],
      ["Solving 速度", "64px 1.82× / 20px 1.95×"],
      ["Listening 速度", "64px 4.388× / 20px 3.998×"],
      ["Composing 速度", "64px 2.34× / 20px 3.12×"],
      ["Shaping 速度", "64px 2.405× / 20px 2.08×"],
      ["设备像素比", "Math.min(2, devicePixelRatio)"],
      ["主题", "严格单色；深色模式镜像灰度"],
      ["减少动态效果", "固定绘制 t = 0.6 的代表帧"]
    ],
    evidence: [
      ["分析日期", "2026-07-23"],
      ["代码来源", "github.com/Jakubantalik/thinking-orbs / main 分支"],
      ["公开状态", "公开仓库；MIT License"],
      ["包版本", "0.1.1"],
      ["依赖评估", "无 runtime dependencies；peerDependencies 仅 react >=18 与 react-dom >=18"],
      ["核心组件", "src/ThinkingOrb.tsx：canvas + requestAnimationFrame + IntersectionObserver"],
      ["状态映射", "working/orbits、searching/globe、solving/rubik、listening/wave、composing/ribbon、shaping/morph"],
      ["参数来源", "src/presets.ts 与 src/engine/profiles.ts"],
      ["Working 算法", "src/engine/orbits.ts：倾斜轨道、幽灵路径、运动粒子"],
      ["Searching / Solving / Listening", "src/engine/lattice.ts：扫描经线、分带求解、双频波"],
      ["Composing 算法", "src/engine/ribbon.ts：幽灵球与多轨点阵丝带；正式预设 spin = 0"],
      ["Shaping 算法", "src/engine/morph.ts：轮廓插值并按弧长重新分布点位"],
      ["三维表达", "src/engine/core.ts：正交投影、z-sort、粒径与灰度深度"],
      ["性能策略", "离屏与隐藏标签页自动暂停；所有实例使用 performance.now 共享时钟；DPR 上限 2"],
      ["兼容声明", "原生 Canvas 2D，不使用 ctx.filter、SVG filter 或 WebGL；README 声明兼容 Chrome/Safari/Firefox"],
      ["收录结论", "公开前端源码、依赖轻量且可零依赖复现，符合记忆资源库收录条件"]
    ],
    code: { html: thinkingOrbHtml, css: thinkingOrbCss, js: thinkingOrbJs }
  },
  {
    id: "minimaxi-misans-outfit-typography",
    source: { id: "minimaxi", name: "MiniMax", url: "https://www.minimaxi.com", host: "minimaxi.com" },
    title: "MiSans × Outfit AI 品牌字体系统",
    type: "typography",
    status: "ready",
    favorite: false,
    updatedAt: "2026-07-23",
    preview: "./components/minimaxi-typography/demo.html",
    description: "以 MiSans 承担中文界面、章节标题和长文本，以 Outfit 承担超大英文品牌标题与短产品名。MiSans 的中性字面保证技术内容清晰稳定，Outfit 的几何轮廓为模型名称提供更强的未来感和品牌识别。",
    usage: "适用于 AI 模型官网、开发者平台、研究博客、技术产品发布页，以及需要在中文信息密度与英文品牌识别之间取得平衡的界面。",
    implementation: "中文站点根字体栈为 MiSans、PingFang SC、PingFang HK、Microsoft YaHei、Arial、sans-serif；MiSans 提供 100–800 多档字重。首页超大模型标题通过 .outfit-zh 使用 Outfit 500，桌面 80px/88px、移动 48px/52px。中文章节标题使用 MiSans 500，桌面 28px/48px、移动 20px/48px；研究卡片中英混排标题保持 MiSans 500、20px/30px。产品卡中的英文或短混排名称可切换为 Outfit 500，桌面 18–28px。所有实测字距均为 normal。",
    tags: ["MiSans", "Outfit", "AI 品牌", "中英混排", "科技排版"],
    tokens: [
      ["中文主字体", "MiSans, PingFang SC, PingFang HK, Microsoft YaHei, Arial, sans-serif"],
      ["英文展示字体", "Outfit, Helvetica Neue, Helvetica, Arial, sans-serif"],
      ["品牌主标题（桌面）", "Outfit 500 / 80px / 88px"],
      ["品牌主标题（移动）", "Outfit 500 / 48px / 52px"],
      ["章节标题（桌面）", "MiSans 500 / 28px / 48px"],
      ["章节标题（移动）", "MiSans 500 / 20px / 48px"],
      ["研究卡片标题", "MiSans 500 / 20px / 30px"],
      ["大号产品名", "Outfit 500 / 28px / 35px"],
      ["小号产品名", "Outfit 500 / 18px / 22.5px；移动 15px / 18.75px"],
      ["模型说明", "MiSans 400 / 16px / 24px"],
      ["功能标题", "MiSans 500 / 20px / 30px"],
      ["功能说明", "MiSans 400 / 14px / 21px"],
      ["主文字", "#181e25"],
      ["次级文字", "#45515e / #86909c"],
      ["字距", "normal（0）"]
    ],
    evidence: [
      ["分析日期", "2026-07-23"],
      ["分析来源", "MiniMax 中文官网实时 DOM、计算样式与 Next.js 生产 CSS"],
      ["站点版本线索", "prod-zh-minimax-0.1.43 / Next.js"],
      ["全局字体规则", "html、body、h1–h6、p 均声明 MiSans 中文字体栈"],
      ["MiSans 字体文件", "CDN 提供 Thin、ExtraLight、Light、Normal、Regular、Medium、Semibold、Demibold、Bold、Heavy 的 WOFF2/WOFF"],
      ["Outfit 字体文件", "CDN TTF；.outfit-zh 与 .font-outfit 用于中文站英文展示标题"],
      ["主标题实测", "MiniMax M3：Outfit 500；桌面 80/88px；移动 48/52px"],
      ["章节标题实测", "旗舰模型、最新研究：MiSans 500；桌面 28/48px；移动 20/48px"],
      ["研究标题实测", "MaxProof 中英混排：MiSans 500 / 20px / 30px"],
      ["产品标题实测", "MiniMax M3：Outfit 500 / 28px / 35px；海螺 Hailuo 2.3：桌面 18/22.5px，移动 15/18.75px"],
      ["正文实测", "模型说明 MiSans 400 / 16px / 24px；功能说明 14px / 21px"],
      ["响应式实测", "桌面视口 1274px；移动视口 384px；两端 letter-spacing 均为 normal"]
    ],
    code: { html: minimaxTypeHtml, css: minimaxTypeCss, js: minimaxTypeJs }
  },
  {
    id: "vibeisland-agent-question-island",
    source: { id: "vibeisland", name: "Vibe Island", url: "https://vibeisland.app/zh/", host: "vibeisland.app" },
    title: "AI Agent 灵动岛询问面板",
    type: "interaction",
    status: "ready",
    favorite: false,
    updatedAt: "2026-07-24",
    preview: "./components/vibeisland-agent-question/demo.html?v=four-states-2",
    description: "把多个 AI Agent 的运行信息、权限请求、问题选择和完成跳转集中到桌面顶部灵动岛。总览、批准、询问和跳回均提供展开与收起两种视图：展开态承载完整操作，收起态只保留当前事件、来源和数量等关键线索。四类场景使用绿色、橙色、青色和蓝色建立清晰的事件语义。",
    usage: "适用于 AI 编程助手、桌面 Agent、命令行工具和审批流。可在不离开当前工作区的情况下查看多任务状态、处理高风险操作、回答单选问题并返回完成任务所在的终端或标签页。",
    implementation: "组件使用真实 DOM 而非视频，原站为 overview、approval、ask、jump 准备四个独立展开图层，而不是复用同一层替换文案。总览与跳回均为 380×175px；批准态为 380×220px；询问态为 340×165px。原站公开脚本还提供 240×36px 通用 compact 机制。本地复现据此为四个场景分别补充收起图层：总览显示任务与 Agent 数量，批准保留 Permission Request 与工具类型，询问保留来源与问题数量，跳回保留完成任务与跳转提示；宽度按信息量设为 240、300、260、280px，高度为 36–40px。状态与展开层级相互独立，切换场景时保持当前展开/收起模式。外层宽高以 500ms 弹性曲线变形，图层通过 opacity、6px blur 和 scale(.96→1) 交叉切换；顶部反内角由左右 13×25px 伪元素和 ±5px 黑色 box-shadow 形成。",
    tags: ["AI", "灵动岛", "Agent 总览", "权限批准", "问题选择", "终端跳转", "展开收起", "状态切换", "键盘快捷键"],
    tokens: [
      ["总览状态", "380px × 175px"],
      ["批准状态", "380px × 220px"],
      ["询问状态", "340px × 165px"],
      ["跳回状态", "380px × 175px"],
      ["总览收起态", "240px × 36px"],
      ["批准收起态", "300px × 40px"],
      ["询问收起态", "260px × 40px"],
      ["跳回收起态", "280px × 40px"],
      ["展开圆角", "0 0 14px 14px"],
      ["顶部反内角", "左右各 13px × 25px / 6px 单侧圆角"],
      ["反内角填充", "box-shadow: ±5px 0 0 #000"],
      ["面板背景", "#000000"],
      ["总览/完成色", "#22c55e / #4ade80"],
      ["批准强调色", "#f97316"],
      ["询问强调色", "#06b6d4"],
      ["运行强调色", "#3b82f6"],
      ["面板内边距", "12px 14px"],
      ["图层间距", "6px"],
      ["身份标签", "10px / 600 / 16px"],
      ["问题正文", "11px / 500 / 17.6px"],
      ["选项高度", "28px"],
      ["选项圆角", "6px"],
      ["选项背景", "rgba(6,182,212,.15)"],
      ["选项间距", "3px"],
      ["尺寸过渡", "500ms cubic-bezier(.175,.885,.32,1.1)"],
      ["图层进入", "opacity + blur(6px→0) + scale(.96→1) / 350ms"],
      ["快捷键", "1 / 2 / 3（界面标记为 ⌘1 / ⌘2 / ⌘3）"]
    ],
    evidence: [
      ["分析日期", "2026-07-24"],
      ["分析来源", "Vibe Island 中文首页实时 DOM、计算样式、Astro 页面源码与用户截图"],
      ["用户截图", "730 × 348px；Claude asks / Which deployment target? / 三项选择"],
      ["代码确认", "页面存在 .v6-layer[data-layer='ask']、三个 .v6-ask-opt button 和 JavaScript 场景切换"],
      ["媒体排除", "实时 DOM 中 video: 0、source: 0、询问层 img: 0；HTML 未引用 mp4/webm/mov/gif"],
      ["四态尺寸", "原站脚本 Te：overview 380×175、approval 380×220、ask 340×165、jump 380×175"],
      ["顶部反内角", ".v6-notch::before / ::after 均为 13×25px；单侧 6px 圆角配合 ±5px 黑色 box-shadow"],
      ["裁切关系", ".v6-notch 为 overflow: visible；内部 .v6-layer 为 overflow: hidden"],
      ["选项实测", "312×28px，6px 圆角，rgba(6,182,212,.15)，5px 10px 内边距"],
      ["状态结构", "演示入口为 overview / approval / ask / jump 四个场景；每个场景对应独立 DOM 图层，.v6-layer-active 控制显示"],
      ["总览与跳回", "均包含用量行、1 个展开会话和 2 个紧凑会话；jump 的完成会话使用 .v6-sess-hl 与 Done — click to jump"],
      ["批准结构", "Permission Request、Edit 路径、四行代码 diff、Deny ⌘N 与 Allow ⌘Y"],
      ["场景控制", ".v6-scene-pill[data-scene] 与 Dock button[data-state] 共同驱动四态；脚本按状态写入宽、高、圆角和阴影"],
      ["收起态边界", "原站公开脚本确认 compact 为 240×36px；四个语义化收起图层及其差异化宽度为本地复现扩展"],
      ["技术栈线索", "Astro 5.17.1 + 原生 HTML/CSS/JavaScript"],
      ["结论", "附件组件由前端代码实时渲染并交互，不是视频，因此符合收录条件"]
    ],
    code: { html: vibeIslandAskHtml, css: vibeIslandAskCss, js: vibeIslandAskJs }
  },
  {
    id: "yuxing-noto-serif-typography",
    source: { id: "yuxing", name: "御行枢控", url: "http://127.0.0.1:4173/yuxing-v5%E5%BE%A1%E8%A1%8C%E5%A2%9E%E5%8A%A0%E6%97%A0%E4%BA%BA%E6%9C%BA%E5%9B%BE.html", host: "本地项目" },
    title: "Noto Serif SC 中文科技标题系统",
    type: "typography",
    status: "ready",
    favorite: false,
    updatedAt: "2026-07-22",
    preview: "./components/yuxing-typography/demo.html?v=async-font-1",
    description: "以 Noto Serif SC 700 构建中文科技品牌标题。高对比宋体笔画为无人机与具身智能主题带来精密、权威的气质，紧凑行高和轻微负字距让大字号标题保持凝聚力。",
    usage: "适用于机器人、无人机、工业智能、硬件产品与前沿科技品牌的主视觉标题、章节标题和发布会大字排版。",
    implementation: "主视觉标题使用 Noto Serif SC 700，字号 clamp(44px, 6vw, 74px)，行高 1.06，字距 -1px；章节标题同为 700，字号 clamp(34px, 4.5vw, 56px)，行高 1.08，字距 -0.5px。两级标题均使用纯白文字和黑色背景，正文搭配 Noto Sans SC，英文标签可搭配 Rajdhani。",
    tags: ["Noto Serif SC", "中文标题", "科技品牌", "响应式排版", "宋体"],
    tokens: [
      ["标题字体", "Noto Serif SC, serif"],
      ["标题字重", "700"],
      ["主视觉字号", "clamp(44px, 6vw, 74px)"],
      ["主视觉行高", "1.06 / 桌面 78.44px / 移动 46.64px"],
      ["主视觉字距", "-1px"],
      ["章节字号", "clamp(34px, 4.5vw, 56px)"],
      ["章节行高", "1.08 / 桌面 60.48px / 移动 36.72px"],
      ["章节字距", "-0.5px"],
      ["标题颜色", "#ffffff"],
      ["页面背景", "#000000"],
      ["强调色", "#2997ff"],
      ["正文搭配", "Noto Sans SC 300–700"]
    ],
    evidence: [
      ["分析日期", "2026-07-22"],
      ["分析来源", "项目文件 yuxing-v5御行增加无人机图.html"],
      ["字体引入", "Google Fonts：Noto Serif SC 200 / 300 / 400 / 600 / 700 / 900"],
      ["主视觉选择器", ".hero-headline"],
      ["章节标题选择器", ".h2（示例：云端大脑，边缘执行。）"],
      ["桌面实测 1280px", "主视觉 74px / 700 / 78.44px；章节 56px / 700 / 60.48px"],
      ["移动实测 390px", "主视觉 44px / 46.64px；章节 34px / 36.72px"],
      ["字体组合", "中文标题 Noto Serif SC；正文 Noto Sans SC；英文标签 Rajdhani"]
    ],
    code: { html: yuxingHtml, css: yuxingCss, js: yuxingJs }
  },
  {
    id: "benshih-typography",
    source: { id: "benshih", name: "Ben Shih", url: "https://www.benshih.design", host: "benshih.design" },
    title: "Acorn × Roobert 字体系统",
    type: "typography",
    status: "ready",
    favorite: true,
    updatedAt: "2026-07-22",
    preview: "./components/benshih-typography/demo.html",
    description: "用 Acorn 承担高识别度的大标题，用 Roobert 承担正文与导航。圆润标题和理性无衬线正文形成明显但不冲突的层级。",
    usage: "适用于个人作品集、创意工作室首页、品牌介绍页，以及需要友好而有个性的大标题场景。",
    implementation: "标题使用 Acorn 600，桌面主标题 88px、0.92 行高和 -0.02em 字距；正文使用 Roobert 500，24px、1.4 行高。页面底色为 #f9f4ed，主文字为 #4c6763。",
    tags: ["Acorn", "Roobert", "英文字体", "作品集", "标题排版"],
    tokens: [
      ["标题字体", "Acorn, Acorn Fallback, serif"],
      ["正文字体", "Roobert, Roobert Fallback"],
      ["H1", "88px / 600 / 80.96px"],
      ["H1 字距", "-1.76px"],
      ["正文", "24px / 500 / 33.6px"],
      ["背景色", "#f9f4ed"],
      ["文字色", "#4c6763"]
    ],
    evidence: [
      ["分析日期", "2026-07-22"],
      ["H1 计算样式", "font-family: acorn; font-size: 88px; font-weight: 600; line-height: 80.96px"],
      ["正文计算样式", "font-family: roobert; font-size: 24px; font-weight: 500; line-height: 33.6px"],
      ["字体文件", "站点 CSS 中的 OTF @font-face，共包含 400 / 500 / 600 / 700 字重"],
      ["技术栈线索", "Next.js 静态字体资源 + Tailwind CSS 4.1.18"]
    ],
    code: { html: benHtml, css: benCss, js: benJs }
  },
  {
    id: "benshih-tips-cards",
    source: { id: "benshih", name: "Ben Shih", url: "https://www.benshih.design", host: "benshih.design" },
    title: "倾斜叠放 Tips 卡片",
    type: "card",
    status: "ready",
    favorite: false,
    updatedAt: "2026-07-22",
    preview: "./components/benshih-tips-cards/demo.html",
    referenceImage: "./assets/references/benshih-tips-cards.png",
    description: "四张大尺寸内容入口卡片以交错角度和负间距叠放。悬浮时当前卡片上浮并展开，其他卡片向两侧让位、降低透明度，同时在卡片上方弹出与内容相关的缩略图提示。",
    usage: "适合个人作品集、创作者主页、产品能力导航和品牌首页，用少量高优先级卡片同时传达内容分类与个性化互动。",
    implementation: "桌面端每张卡片为 320×360px，放在 350×386px 的旋转容器中，相邻容器使用 -40px 负间距。默认角度依次为 6.5°、-5°、5°、-5°。悬浮卡缩放到 1.04、角度收敛为原值的 20%、z-index 提升至 10，卡片本体上浮 6px；其他卡片按相对方向平移 140px + 28px × 距离、缩放到 0.93 并降至 0.5 透明度。上方缩略图和纸屑使用弹簧感过渡进入。窄屏不执行让位动画，改为横向滚动吸附，避免卡片溢出视口。",
    tags: ["Tips 卡片", "叠放布局", "Hover", "Framer Motion", "内容导航"],
    tokens: [
      ["卡片尺寸", "320px × 360px"],
      ["旋转容器", "350px × 386px"],
      ["卡片圆角", "24px"],
      ["相邻重叠", "margin-right: -40px"],
      ["默认旋转", "6.5° / -5° / 5° / -5°"],
      ["卡片颜色", "#ffd6ae / #d9d6fe / #b2ddff"],
      ["标题", "Acorn 600 / 40px / 0.9"],
      ["正文", "Roobert 500 / 19px / 1.5"],
      ["按钮", "14px / 600 / 10px 14px / 8px radius"],
      ["悬浮卡", "scale(1.04) / translateY(-6px) / z-index: 10"],
      ["非悬浮卡", "translateX(±(140px + 28px × distance)) / scale(.93) / opacity(.5)"],
      ["悬浮阴影", "0 20px 40px rgba(2,89,78,.15)"],
      ["移动端", "82vw 横向轨道 / scroll-snap: center"]
    ],
    evidence: [
      ["分析日期", "2026-07-22"],
      ["分析来源", "用户截图 + 原站实时 DOM、计算样式与 Next.js 页面脚本"],
      ["用户截图", "1890 × 702px"],
      ["DOM 结构", "四个 350×386px motion 容器；内部为三张信息卡和一张媒体卡"],
      ["计算样式", "卡片 320×360px、24px 圆角、-40px 重叠、40px Acorn 标题、19px Roobert 正文"],
      ["悬浮编排", "源脚本 active card: rotate × .2 / scale 1.04 / z 10；siblings: ±(140 + 28 × distance) / scale .93 / opacity .5"],
      ["弹簧参数", "容器 stiffness 140 / damping 22 / mass .8；卡片 stiffness 300 / damping 25；缩略图 stiffness 380 / damping 22"],
      ["附加反馈", "彩色卡上方弹出 3–4 张内容缩略图与 12 个纸屑；CTA 额外向右移动 4px"],
      ["版本差异", "用户截图中的第二张卡为空白纸面；当前原站为自动播放个人介绍视频，本复现以中性媒体卡表示"],
      ["技术栈线索", "Next.js + Tailwind CSS + Framer Motion"]
    ],
    code: { html: benTipsHtml, css: benTipsCss, js: benTipsJs }
  },
  {
    id: "apple-horizontal-product-card",
    source: { id: "apple-edu", name: "Apple 教育商店", url: "https://www.apple.com.cn/cn-edu/store", host: "apple.com.cn" },
    title: "横向吸附商品卡片",
    type: "card",
    status: "ready",
    favorite: true,
    updatedAt: "2026-07-22",
    preview: "./components/apple-product-card/demo.html",
    description: "固定尺寸商品卡片组成横向滚动轨道。苹果教育商店原始拼贴图铺满整卡，图片自带的浅灰紫底色与产品主体自然融合，前景文字叠放在顶部留白区。",
    usage: "适用于商品推荐、服务入口、套餐选择、案例轮播等需要连续横向浏览的内容。",
    implementation: "卡片桌面尺寸 400×500px、圆角 18px、阴影 2px 4px 12px rgba(0,0,0,.08)。800×1000px 原图以 absolute + inset: 0 + object-fit: cover 铺满卡片，文字层用 z-index: 2 覆盖在原图顶部留白上。轨道使用 inline-flex，卡片间距 20px；外层 overflow-x: auto，并设置 x mandatory 吸附。",
    tags: ["商品卡片", "横向滚动", "Scroll Snap", "电商", "整卡配图"],
    tokens: [
      ["卡片尺寸", "400px × 500px"],
      ["卡片圆角", "18px"],
      ["卡片阴影", "2px 4px 12px rgba(0,0,0,.08)"],
      ["内容内边距", "28px"],
      ["原图尺寸", "800px × 1000px"],
      ["图片填充", "inset: 0 / 100% × 100% / object-fit: cover"],
      ["卡片间距", "20px"],
      ["轨道", "display: inline-flex"],
      ["滚动吸附", "scroll-snap-type: x mandatory"]
    ],
    evidence: [
      ["分析日期", "2026-07-22"],
      ["卡片容器", ".rf-ccard-content.rf-ccard-content-withfullimg"],
      ["卡片实测", "width: 400px; height: 500px; border-radius: 18px; overflow: hidden"],
      ["滚动容器", ".rf-cards-scroller-content: overflow-x scroll; scroll-snap-type x mandatory"],
      ["轨道实测", ".rf-cards-scroller-platter: inline-flex; padding 16px 0 40px"],
      ["单项间距", ".rf-cards-scroller-itemview: margin-right 20px"],
      ["配图来源", "Apple 教育商店当前限时特惠卡片：MacBook Air / MacBook Pro / iPad Air"],
      ["配图方式", "800×1000px JPEG 原图整卡铺满，文字作为 z-index: 2 前景层"]
    ],
    code: { html: appleHtml, css: appleCss, js: appleJs }
  },
  {
    id: "diffmind-model-output",
    source: { id: "diffmind", name: "Diffmind", url: "https://www.diffmind.ai", host: "diffmind.ai" },
    title: "大模型分段输出动效",
    type: "interaction",
    status: "ready",
    favorite: false,
    updatedAt: "2026-07-22",
    preview: "./components/diffmind-model-output/demo.html",
    referenceImage: "./assets/references/diffmind-comparison.png",
    description: "同一个问题并行发送给三个模型，每个模型在独立列中错峰逐字输出；全部完成后再出现跨模型总结，形成“发散比较 → 汇聚结论”的清晰节奏。",
    usage: "多模型对比、AI 答案评测、提示词实验、方案会审，以及需要同时展示多个生成结果的工作台。",
    implementation: "整体是带浏览器顶栏的白色工作区。主体使用三等分网格和 1px 分隔线，每列依次包含模型身份、统一问题卡和流式回答。JavaScript 用同一 runId 管理重播任务，以 130ms 错峰启动三列输出；所有 Promise 完成后才显示总结区，避免总结先于答案出现。移动端改为横向吸附的单列浏览。",
    tags: ["AI", "多模型对比", "逐字输出", "状态编排", "一键总结"],
    tokens: [
      ["外框圆角", "18px"],
      ["顶部栏", "62px"],
      ["主体布局", "repeat(3, minmax(0, 1fr))"],
      ["列分隔线", "1px solid #e3e6eb"],
      ["问题卡", "#f4f5f7 / 10px radius / 12px padding"],
      ["总结区", "#f7f7ff / #d5d3ff / 11px radius"],
      ["主强调色", "#5854f7"],
      ["列启动间隔", "130ms"],
      ["正文逐字速度", "7ms / character"],
      ["总结逐字速度", "4ms / character"]
    ],
    evidence: [
      ["分析日期", "2026-07-22"],
      ["分析来源", "用户提供的 DiffMind 组件截图"],
      ["截图尺寸", "2206 × 1060px"],
      ["结构识别", "浏览器式顶栏、三等分模型列、统一问题卡、回答区、跨模型总结、统一输入栏"],
      ["动效推断", "分列生成完成后再汇聚总结；重播入口用于复现整段状态流程"],
      ["响应式策略", "桌面三列并排；窄屏改为 85vw 横向滚动并启用 scroll snap"]
    ],
    code: { html: diffmindHtml, css: diffmindCss, js: diffmindJs }
  },
  {
    id: "cursor-draggable-product-windows",
    source: { id: "cursor", name: "Cursor", url: "https://cursor.com", host: "cursor.com" },
    title: "可拖拽缩放的叠层产品窗口",
    type: "interaction",
    status: "ready",
    favorite: false,
    updatedAt: "2026-07-23",
    preview: "./components/cursor-draggable-windows/demo.html",
    description: "在绘画质感的全幅舞台上叠放 Desktop 与 CLI 两个仿系统窗口。窗口可通过标题栏自由拖拽，并支持八方向缩放；每次操作都会把当前窗口提升到最前方，形成接近桌面操作系统的空间交互。",
    usage: "适用于开发工具、桌面应用、AI 智能体、IDE、终端产品和多窗口工作流的官网产品演示。",
    implementation: "桌面舞台实测为 1240×720px。主窗口默认 1080×620px、距舞台左上 80×50px；CLI 窗口 480×360px、距左上 728×328px。窗口使用 10px 圆角、#f2f1ed 背景和双层阴影。Pointer Events 统一处理标题栏拖拽与八个缩放手柄，坐标以舞台百分比保存以适应响应式尺寸；活动窗口递增 z-index，移动和缩放均限制在舞台内边距中。",
    tags: ["拖拽窗口", "八向缩放", "z-index", "产品演示", "Pointer Events"],
    tokens: [
      ["舞台尺寸", "1240px × 720px / aspect-ratio: 31 / 18"],
      ["舞台圆角", "4px"],
      ["桌面窗口", "1080px × 620px / x: 80px / y: 50px"],
      ["CLI 窗口", "480px × 360px / x: 728px / y: 328px"],
      ["窗口最小值", "420px × 260px（原站桌面实测）"],
      ["窗口圆角", "10px"],
      ["窗口背景", "#f2f1ed"],
      ["标题栏高度", "28px"],
      ["主阴影", "0 28px 70px rgba(0,0,0,.14)"],
      ["次阴影", "0 14px 32px rgba(0,0,0,.10)"],
      ["缩放方向", "n / s / e / w / nw / ne / sw / se"],
      ["舞台内边距", "32px；窄屏 16px"],
      ["活动层级", "每次 pointerdown 递增 z-index"],
      ["窄屏舞台", "aspect-ratio: 4 / 3 / 保留拖拽与缩放"]
    ],
    evidence: [
      ["分析日期", "2026-07-23"],
      ["分析来源", "Cursor 官网当前中文首页实时 DOM、计算样式与交互实测"],
      ["组件位置", "首屏标题与下载按钮下方的第一个独立交互演示"],
      ["无障碍描述", "Interactive demo showing Cursor Desktop and Cursor CLI interfaces"],
      ["桌面窗口实测", "1080×620px；min-width 420px；min-height 260px；8 个 resize handle"],
      ["CLI 窗口实测", "480×360px；min-width 420px；min-height 260px；8 个 resize handle"],
      ["拖拽实测", "标题栏拖动后窗口位置更新，活动 Desktop z-index 从默认层提升至 101"],
      ["置顶实测", "随后拖动 CLI，CLI z-index 提升至 103 并覆盖 Desktop"],
      ["位置约束", "left/top 使用 clamp()；--demo-pad 桌面约 32px，≤767px 为 16px"],
      ["背景资产", "Cursor 首屏 3840×2560 WebP 绘画风景图，object-fit: cover"],
      ["技术实现线索", "React 状态 + Pointer Events + 绝对定位 + transform translate(-50%, -50%)"]
    ],
    code: { html: cursorWindowsHtml, css: cursorWindowsCss, js: cursorWindowsJs }
  }
];
