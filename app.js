import { assetTypes, seedAssets } from "./data/resources.js?v=vibe-four-states-1";

const STORAGE_KEY = "shiguang-component-assets-v2";
const LEGACY_KEY = "shiguang-design-library-v1";
const RECENT_VIEWS_KEY = "shiguang-recently-viewed-assets-v1";
const RECENT_VIEWS_LIMIT = 6;
const legacySeedIds = new Set(["benshih", "diffmind", "apple-edu", "cursor", "claude-code"]);
const removedAssetIds = new Set(["cursor-scroll-story", "claude-code-terminal-story"]);

let assets = loadAssets();
let recentAssetIds = loadRecentAssetIds();
let activeType = "all";
let activeSource = "all";
let activeTag = "全部";
let activeCodeTab = "html";
let activeAssetId = null;
let toastTimer;
const cardCache = new Map();

const $ = (selector, root = document) => root.querySelector(selector);
const els = {
  typeNav: $("#typeNav"),
  sourceNav: $("#sourceNav"),
  summary: $("#summary"),
  chips: $("#filterChips"),
  grid: $("#assetGrid"),
  search: $("#searchInput"),
  sort: $("#sortSelect"),
  title: $("#pageTitle"),
  description: $("#pageDescription"),
  panel: $("#detailPanel"),
  overlay: $("#detailOverlay"),
  toast: $("#toast")
};

function icon(name) {
  return `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;"
  })[character]);
}

function safeUrl(value) {
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) ? url.href : "#";
  } catch {
    return "#";
  }
}

function hostOf(value) {
  try { return new URL(value).hostname.replace(/^www\./, ""); }
  catch { return "未知来源"; }
}

function labelForType(type) {
  return assetTypes.find((item) => item.id === type)?.label || "待分析";
}

const searchFilters = [
  { id: "全部", matches: () => true },
  { id: "品牌排版", matches: (asset) => asset.type === "typography" },
  { id: "卡片设计", matches: (asset) => asset.type === "card" },
  { id: "动态交互", matches: (asset) => asset.type === "interaction" },
  { id: "响应式", terms: ["响应式", "横向滚动", "Scroll Snap", "窄屏"] },
  { id: "AI 体验", terms: ["AI", "多模型", "智能体"] },
  { id: "内容导航", terms: ["内容导航", "叠放布局"] },
  { id: "产品展示", terms: ["商品卡片", "电商", "产品演示", "产品窗口"] }
];

function searchableText(asset) {
  return [asset.title, asset.description, asset.usage, asset.implementation, ...(asset.tags || [])].join(" ").toLowerCase();
}

function matchesSearchFilter(asset, filterId) {
  const filter = searchFilters.find((item) => item.id === filterId);
  if (!filter) return true;
  if (filter.matches) return filter.matches(asset);
  const text = searchableText(asset);
  return filter.terms.some((term) => text.includes(term.toLowerCase()));
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function uid() {
  return `asset-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function loadAssets() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    const savedList = Array.isArray(saved) ? saved : [];
    const savedById = new Map(savedList.map((item) => [item.id, item]));
    const refreshedSeeds = seedAssets.map((seed) => {
      const previous = savedById.get(seed.id);
      return previous ? { ...seed, favorite: previous.favorite ?? seed.favorite } : seed;
    });
    const customAssets = savedList.filter((item) => !seedAssets.some((seed) => seed.id === item.id) && !removedAssetIds.has(item.id));

    if (saved === null) {
      const legacy = JSON.parse(localStorage.getItem(LEGACY_KEY) || "[]");
      const migrated = Array.isArray(legacy)
        ? legacy.filter((item) => !legacySeedIds.has(item.id)).map(migrateLegacyAsset)
        : [];
      return [...refreshedSeeds, ...migrated];
    }
    return [...refreshedSeeds, ...customAssets];
  } catch {
    return [...seedAssets];
  }
}

function migrateLegacyAsset(item) {
  return {
    id: item.id || uid(),
    source: {
      id: `source-${item.id || uid()}`,
      name: item.title || hostOf(item.url),
      url: item.url,
      host: hostOf(item.url)
    },
    title: item.title || "待分析内容",
    type: item.category === "font" ? "typography" : item.category === "interaction" ? "interaction" : item.category === "component" ? "card" : "reference",
    status: "pending",
    favorite: Boolean(item.favorite),
    updatedAt: item.createdAt || today(),
    description: item.note || item.highlight || "待分析",
    usage: item.usage || "待补充",
    implementation: item.implementation || "待进一步检查页面实现。",
    tags: item.tags || [],
    tokens: [],
    evidence: [],
    code: { html: "", css: "", js: "" }
  };
}

function saveAssets() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(assets));
}

function loadRecentAssetIds() {
  try {
    const saved = JSON.parse(localStorage.getItem(RECENT_VIEWS_KEY) || "[]");
    if (!Array.isArray(saved)) return [];
    const knownIds = new Set(assets.map((asset) => asset.id));
    return [...new Set(saved.filter((id) => typeof id === "string" && knownIds.has(id)))].slice(0, RECENT_VIEWS_LIMIT);
  } catch {
    return [];
  }
}

function recordAssetView(id) {
  recentAssetIds = [id, ...recentAssetIds.filter((assetId) => assetId !== id)].slice(0, RECENT_VIEWS_LIMIT);
  try {
    localStorage.setItem(RECENT_VIEWS_KEY, JSON.stringify(recentAssetIds));
  } catch {
    // Keep the in-memory history working when storage is unavailable.
  }
  renderSourceNav();
}

function allSources() {
  const unique = new Map();
  assets.forEach((asset) => unique.set(asset.source.id, asset.source));
  return [...unique.values()].sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));
}

function recentSources() {
  const unique = new Map();
  recentAssetIds.forEach((id) => {
    const asset = assets.find((item) => item.id === id);
    if (asset && !unique.has(asset.source.id)) unique.set(asset.source.id, asset.source);
  });
  return [...unique.values()];
}

function renderTypeNav() {
  els.typeNav.innerHTML = assetTypes.map((type) => {
    const count = type.id === "all"
      ? assets.length
      : type.id === "favorite"
        ? assets.filter((asset) => asset.favorite).length
        : assets.filter((asset) => asset.type === type.id).length;
    return `<button class="nav-button ${activeType === type.id ? "active" : ""}" data-type="${type.id}" type="button">
      ${icon(type.icon)}<span>${escapeHtml(type.label)}</span><span class="count">${count}</span>
    </button>`;
  }).join("");
}

function renderSourceNav() {
  const sources = recentSources();
  els.sourceNav.innerHTML = `<button class="nav-button ${activeSource === "all" ? "active" : ""}" data-source="all" type="button"><span class="source-dot"></span><span>全部来源</span><span class="count">${allSources().length}</span></button>` +
    sources.map((source) => {
      const count = assets.filter((asset) => asset.source.id === source.id).length;
      return `<button class="nav-button ${activeSource === source.id ? "active" : ""}" data-source="${escapeHtml(source.id)}" type="button"><span class="source-dot"></span><span>${escapeHtml(source.name)}</span><span class="count">${count}</span></button>`;
    }).join("");
}

function renderSummary() {
  const ready = assets.filter((asset) => asset.status === "ready").length;
  const codeCount = assets.filter((asset) => asset.code && Object.values(asset.code).some(Boolean)).length;
  els.summary.innerHTML = `
    <div class="summary-item"><strong>${assets.length}</strong><span>组件资产</span></div>
    <div class="summary-item"><strong>${ready}</strong><span>已完成复现</span></div>
    <div class="summary-item"><strong>${codeCount}</strong><span>包含代码</span></div>`;
}

function renderChips() {
  const availableFilters = searchFilters.filter((filter) => filter.id === "全部" || assets.some((asset) => matchesSearchFilter(asset, filter.id)));
  if (!availableFilters.some((filter) => filter.id === activeTag)) activeTag = "全部";
  els.chips.innerHTML = availableFilters.map((filter) => `<button class="filter-chip ${activeTag === filter.id ? "active" : ""}" data-tag="${escapeHtml(filter.id)}" type="button">${escapeHtml(filter.id)}</button>`).join("");
}

function filteredAssets() {
  const query = els.search.value.trim().toLowerCase();
  const result = assets.filter((asset) => {
    const typeMatch = activeType === "all" || (activeType === "favorite" ? asset.favorite : asset.type === activeType);
    const sourceMatch = activeSource === "all" || asset.source.id === activeSource;
    const tagMatch = matchesSearchFilter(asset, activeTag);
    const haystack = [searchableText(asset), asset.source.name, asset.source.host].join(" ").toLowerCase();
    return typeMatch && sourceMatch && tagMatch && (!query || haystack.includes(query));
  });
  if (els.sort.value === "title") result.sort((a, b) => a.title.localeCompare(b.title, "zh-CN"));
  else if (els.sort.value === "source") result.sort((a, b) => a.source.name.localeCompare(b.source.name, "zh-CN"));
  else result.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  return result;
}

function renderHeading() {
  const type = assetTypes.find((item) => item.id === activeType) || assetTypes[0];
  const source = allSources().find((item) => item.id === activeSource);
  els.title.textContent = source ? `${source.name} 的组件` : type.id === "all" ? "记忆资源库" : type.label;
  els.description.textContent = source
    ? `已从该网站保存 ${assets.filter((asset) => asset.source.id === source.id).length} 项可复用内容。`
    : type.id === "all"
      ? "从参考网站中提取真实参数，复现为可以直接调用的前端组件。"
      : `当前视图包含 ${filteredAssets().length} 项${type.label}资源。`;
}

function previewMarkup(asset) {
  if (asset.preview) {
    const loading = asset.id === "yuxing-noto-serif-typography" ? "eager" : "lazy";
    return `<iframe src="${escapeHtml(asset.preview)}" title="${escapeHtml(asset.title)} 预览" loading="${loading}" sandbox="allow-scripts allow-same-origin"></iframe>`;
  }
  return `<div class="fallback-preview"><span>${escapeHtml(asset.title)}</span></div>`;
}

function createAssetCard(asset) {
  const card = document.createElement("article");
  card.className = "asset-card";
  card.dataset.assetId = asset.id;
  card.tabIndex = 0;
  card.setAttribute("aria-label", `查看 ${asset.title}`);
  card.innerHTML = `
    <div class="asset-preview">
      ${previewMarkup(asset)}
      <span class="asset-badge">${escapeHtml(labelForType(asset.type))}</span>
      <button class="favorite-button" data-favorite-id="${escapeHtml(asset.id)}" type="button">${icon("star")}</button>
    </div>
    <div class="asset-body">
      <div class="source-row">
        <img class="favicon" src="https://www.google.com/s2/favicons?domain=${encodeURIComponent(asset.source.host)}&sz=64" alt="" onerror="this.style.visibility='hidden'">
        <span>${escapeHtml(asset.source.name)}</span>
        <span class="status ${asset.status === "pending" ? "pending" : ""}">${asset.status === "ready" ? "可调用" : "待分析"}</span>
      </div>
      <h2>${escapeHtml(asset.title)}</h2>
      <p class="description">${escapeHtml(asset.description)}</p>
      <div class="tag-list">${(asset.tags || []).slice(0, 5).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
      <div class="asset-meta"><span>更新于 ${escapeHtml(asset.updatedAt)}</span><span>${asset.status === "ready" ? "含复现代码" : "已保存记录"}</span></div>
    </div>`;
  cardCache.set(asset.id, card);
  return card;
}

function updateAssetCard(asset, card) {
  const favorite = $("[data-favorite-id]", card);
  favorite.classList.toggle("active", asset.favorite);
  favorite.setAttribute("aria-label", `${asset.favorite ? "取消收藏" : "收藏"} ${asset.title}`);
}

function renderGrid() {
  const list = filteredAssets();
  $(".empty-state", els.grid)?.remove();
  cardCache.forEach((card) => { card.hidden = true; });

  if (!list.length) {
    els.grid.insertAdjacentHTML("beforeend", `<div class="empty-state">${icon("search")}<h2>没有匹配的组件</h2><p>调整资产类型、来源网站或搜索关键词。</p></div>`);
    return;
  }

  // Keep loaded iframes attached; CSS order handles sorting without reloading them.
  list.forEach((asset, index) => {
    const card = cardCache.get(asset.id) || createAssetCard(asset);
    updateAssetCard(asset, card);
    card.hidden = false;
    card.style.order = index;
    if (!card.isConnected) els.grid.append(card);
  });
}

function renderAll() {
  renderTypeNav();
  renderSourceNav();
  renderSummary();
  renderChips();
  renderHeading();
  renderGrid();
}

function tokensMarkup(asset) {
  if (!(asset.tokens || []).length) return `<p>完成页面分析后补充尺寸、颜色、字体和响应式参数。</p>`;
  return `<table class="token-table"><tbody>${asset.tokens.map(([name, value]) => `<tr><th>${escapeHtml(name)}</th><td>${escapeHtml(value)}</td></tr>`).join("")}</tbody></table>`;
}

function evidenceMarkup(asset) {
  const sourceRow = [["来源页面", asset.source.url], ...(asset.evidence || [])];
  return `<ul class="evidence-list">${sourceRow.map(([name, value]) => `<li><strong>${escapeHtml(name)}</strong><span>${escapeHtml(value)}</span></li>`).join("")}</ul>`;
}

function detailPreviewMarkup(asset) {
  if (!asset.preview) {
    return `<div class="preview-frame pending-preview">${icon("info")}<div><h3>已记录，等待组件分析</h3><p>${escapeHtml(asset.implementation)}</p></div></div>`;
  }
  return `<div class="preview-frame" id="previewFrame"><iframe src="${escapeHtml(asset.preview)}" title="${escapeHtml(asset.title)} 实时预览" sandbox="allow-scripts allow-same-origin"></iframe></div>`;
}

function codeMarkup(asset) {
  if (!asset.code || !Object.values(asset.code).some(Boolean)) return "";
  return `<section class="detail-section">
    <div class="section-heading"><div><h3>组件代码</h3><p>复制后可按项目技术栈继续封装</p></div></div>
    <div class="code-workbench">
      <div class="code-toolbar">
        ${["html", "css", "js"].map((tab) => `<button class="code-tab ${activeCodeTab === tab ? "active" : ""}" data-code-tab="${tab}" type="button">${tab.toUpperCase()}</button>`).join("")}
        <button class="copy-button" data-copy-code type="button">${icon("copy")}复制代码</button>
      </div>
      <pre><code id="codeOutput"></code></pre>
    </div>
  </section>`;
}

function openDetail(id) {
  const asset = assets.find((item) => item.id === id);
  if (!asset) return;
  recordAssetView(id);
  activeAssetId = id;
  activeCodeTab = "html";
  els.panel.innerHTML = `
    <header class="detail-header">
      <a class="source-link" href="${safeUrl(asset.source.url)}" target="_blank" rel="noopener noreferrer"><span>${escapeHtml(asset.source.name)} · ${escapeHtml(asset.source.host)}</span>${icon("external")}</a>
      <button class="icon-button" data-close-detail type="button" aria-label="关闭详情">${icon("x")}</button>
    </header>
    <div class="detail-content">
      <div class="detail-title-row">
        <div><p class="detail-type">${escapeHtml(labelForType(asset.type).toUpperCase())}</p><h2>${escapeHtml(asset.title)}</h2><p class="detail-lead">${escapeHtml(asset.description)}</p></div>
        <span class="detail-status ${asset.status === "pending" ? "pending" : ""}">${asset.status === "ready" ? "可直接调用" : "等待分析"}</span>
      </div>
      <div class="tag-list">${(asset.tags || []).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
      <section class="detail-section">
        <div class="section-heading"><div><h3>实时预览</h3><p>${asset.preview ? "预览运行在独立环境中" : "当前仅保存原始记录"}</p></div>${asset.preview ? `<div class="viewport-toggle"><button class="viewport-button active" data-viewport="desktop" type="button">桌面</button><button class="viewport-button" data-viewport="mobile" type="button">移动</button></div>` : ""}</div>
        ${detailPreviewMarkup(asset)}
      </section>
      <section class="detail-section detail-grid">
        <div class="prose-block"><h3>设计内容</h3><p>${escapeHtml(asset.implementation)}</p></div>
        <div class="token-block"><h3>设计参数</h3>${tokensMarkup(asset)}</div>
      </section>
      <section class="detail-section prose-block"><h3>适用场景</h3><p>${escapeHtml(asset.usage)}</p></section>
      <section class="detail-section"><div class="section-heading"><div><h3>分析依据</h3><p>记录本次分析所依据的页面、截图与结构信息</p></div></div>${evidenceMarkup(asset)}</section>
      ${asset.referenceImage ? `<section class="detail-section"><div class="section-heading"><div><h3>原始参考截图</h3><p>用于复现比对与后续迭代</p></div></div><figure class="reference-image"><img src="${escapeHtml(asset.referenceImage)}" alt="${escapeHtml(asset.title)} 原始参考截图"></figure></section>` : ""}
      ${codeMarkup(asset)}
    </div>`;
  updateCodeOutput(asset);
  els.overlay.classList.add("open");
  els.panel.classList.add("open");
  els.panel.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeDetail() {
  els.overlay.classList.remove("open");
  els.panel.classList.remove("open");
  els.panel.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  activeAssetId = null;
}

function updateCodeOutput(asset) {
  const output = $("#codeOutput", els.panel);
  if (output) output.textContent = asset.code?.[activeCodeTab] || `// 该组件没有 ${activeCodeTab.toUpperCase()} 代码。`;
}

function switchCodeTab(tab) {
  const asset = assets.find((item) => item.id === activeAssetId);
  if (!asset) return;
  activeCodeTab = tab;
  els.panel.querySelectorAll("[data-code-tab]").forEach((button) => button.classList.toggle("active", button.dataset.codeTab === tab));
  updateCodeOutput(asset);
}

async function copyCurrentCode(button) {
  const asset = assets.find((item) => item.id === activeAssetId);
  const value = asset?.code?.[activeCodeTab] || "";
  if (!value) { showToast("当前标签没有代码"); return; }
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }
  button.innerHTML = `${icon("check")}已复制`;
  setTimeout(() => { button.innerHTML = `${icon("copy")}复制代码`; }, 1500);
  showToast(`${activeCodeTab.toUpperCase()} 代码已复制`);
}

function toggleFavorite(id) {
  assets = assets.map((asset) => asset.id === id ? { ...asset, favorite: !asset.favorite } : asset);
  saveAssets();
  renderAll();
}

function setViewport(mode) {
  const frame = $("#previewFrame", els.panel);
  if (!frame) return;
  frame.classList.toggle("mobile", mode === "mobile");
  els.panel.querySelectorAll("[data-viewport]").forEach((button) => button.classList.toggle("active", button.dataset.viewport === mode));
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => els.toast.classList.remove("show"), 2100);
}

els.typeNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-type]");
  if (!button) return;
  activeType = button.dataset.type;
  activeTag = "全部";
  renderAll();
});

els.sourceNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-source]");
  if (!button) return;
  activeSource = button.dataset.source;
  activeTag = "全部";
  renderAll();
});

els.chips.addEventListener("click", (event) => {
  const button = event.target.closest("[data-tag]");
  if (!button) return;
  activeTag = button.dataset.tag;
  renderChips();
  renderHeading();
  renderGrid();
});

els.grid.addEventListener("click", (event) => {
  const favorite = event.target.closest("[data-favorite-id]");
  if (favorite) {
    event.stopPropagation();
    toggleFavorite(favorite.dataset.favoriteId);
    return;
  }
  const card = event.target.closest("[data-asset-id]");
  if (card) openDetail(card.dataset.assetId);
});

els.grid.addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-asset-id]")) {
    event.preventDefault();
    openDetail(event.target.dataset.assetId);
  }
});

els.panel.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-detail]")) closeDetail();
  const codeTab = event.target.closest("[data-code-tab]");
  if (codeTab) switchCodeTab(codeTab.dataset.codeTab);
  const copy = event.target.closest("[data-copy-code]");
  if (copy) copyCurrentCode(copy);
  const viewport = event.target.closest("[data-viewport]");
  if (viewport) setViewport(viewport.dataset.viewport);
});

els.overlay.addEventListener("click", closeDetail);
els.search.addEventListener("input", () => { renderHeading(); renderGrid(); });
els.sort.addEventListener("change", renderGrid);

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    els.search.focus();
  }
  if (event.key === "Escape" && els.panel.classList.contains("open")) closeDetail();
});

saveAssets();
renderAll();
