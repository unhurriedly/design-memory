const canvases = [...document.querySelectorAll("canvas[data-size]")];
const stage = document.querySelector(".orb-stage");
const stateButtons = [...document.querySelectorAll("[data-state]")];
const themeButtons = [...document.querySelectorAll("[data-orb-theme]")];
const pauseButton = document.querySelector("#orbPause");
const modeCode = document.querySelector("#modeCode");
const statusLabel = document.querySelector("#statusLabel");
const stateName = document.querySelector("#stateName");
const description = document.querySelector("#statusDescription");
const algorithmNote = document.querySelector("#algorithmNote");
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

const STATES = {
  working: { mode: "orbits", label: "Working", description: "多组倾斜轨道与运动粒子表达持续执行中的任务。", note: "12 orbits · ghost paths · depth-sorted particles" },
  searching: { mode: "globe", label: "Searching", description: "扫描经线扫过点阵经纬球，表示正在检索和定位信息。", note: "lat/long globe · moving scan meridian" },
  solving: { mode: "rubik", label: "Solving", description: "球面分带执行确定性的四分之一转，先打乱再逆序复原。", note: "quarter turns · scramble → reverse solve" },
  listening: { mode: "wave", label: "Agent listening", description: "两组不同频率的波穿过球面环带，模拟输入被持续感知。", note: "dual-frequency waves · responsive rings" },
  composing: { mode: "ribbon", label: "Thinking", description: "点阵球体上穿过多轨波动丝带，表达内容正在组织和生成。", note: "ghost sphere · five-lane dotted ribbon" },
  shaping: { mode: "morph", label: "Agent shaping", description: "等距点阵轮廓在圆、三角与方形之间重采样变形。", note: "circle → triangle → square · arc-length resampling" }
};

const PRESETS = {
  orbits: { 64: [1.885, 1, 1], 20: [3.9, .238, 2.4] },
  globe: { 64: [2.015, .42, 1.15], 20: [2.665, .105, 1.75] },
  rubik: { 64: [1.82, .35, 1.05], 20: [1.95, .088, 1.9] },
  wave: { 64: [4.388, .341, 1], 20: [3.998, .105, 1.6] },
  ribbon: { 64: [2.34, .25, .85], 20: [3.12, .051, 1.073] },
  morph: { 64: [2.405, .54, .395], 20: [2.08, .53, 1.011] }
};

let activeState = "working";
let paused = false;
let animationFrame = 0;
let frozenTime = 0;

function hashD(a, b) {
  const h = Math.sin(a * 12.9898 + b * 78.233) * 43758.5453;
  return h - Math.floor(h);
}

function fibDir(i, n) {
  const golden = Math.PI * (3 - Math.sqrt(5));
  const y = 1 - (2 * (i + .5)) / n;
  const radius = Math.sqrt(1 - y * y);
  const angle = i * golden;
  return [radius * Math.cos(angle), y, radius * Math.sin(angle)];
}

function angleDelta(a, b) { return Math.atan2(Math.sin(a - b), Math.cos(a - b)); }
function smooth(value) { return value * value * (3 - 2 * value); }
function radiusScale(size, power = .6) { return (size / 300) ** power; }

function makeProj(yaw, tilt, cx, cy, scale) {
  const st = Math.sin(tilt), ct = Math.cos(tilt), sy = Math.sin(yaw), cyw = Math.cos(yaw);
  return (x, y, z) => {
    const x1 = x * cyw + z * sy;
    const z1 = -x * sy + z * cyw;
    const y1 = y * ct - z1 * st;
    const z2 = y * st + z1 * ct;
    return [cx + x1 * scale, cy - y1 * scale, z2];
  };
}

function paint(ctx, dots, dark, rMin = .3) {
  dots.sort((a, b) => a.z - b.z);
  for (const dot of dots) {
    const alpha = dot.a ?? 1;
    if (alpha < .02) continue;
    const white = Math.min(1, Math.max(0, dot.white));
    const gray = Math.round((dark ? 1 - white : white) * 255);
    ctx.fillStyle = `rgba(${gray},${gray},${gray},${alpha})`;
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, Math.max(rMin, dot.r), 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawOrbits(ctx, size, t, dark, countScale, sizeScale) {
  const radius = size / 2 * .82;
  const project = makeProj(t * .12, .3, size / 2, size / 2, 1);
  const rs = radiusScale(size) * sizeScale;
  const orbitN = Math.max(1, Math.round(12 * countScale));
  const ghostN = Math.max(3, Math.round(40 * countScale));
  const dots = [];
  for (let orbit = 0; orbit < orbitN; orbit++) {
    const h1 = hashD(orbit, 1.7), h2 = hashD(orbit, 5.2), h3 = hashD(orbit, 8.9);
    const orbitRadius = radius * (.45 + .52 * h1);
    const theta = h1 * 2 * Math.PI, phi = Math.acos(2 * h2 - 1);
    const nx = Math.sin(phi) * Math.cos(theta), ny = Math.cos(phi), nz = Math.sin(phi) * Math.sin(theta);
    let ux = -ny, uy = nx;
    const length = Math.max(1e-6, Math.hypot(ux, uy));
    ux /= length; uy /= length;
    const vx = -nz * uy, vy = nz * ux, vz = nx * uy - ny * ux;
    const orbitSpeed = (.25 + .55 * h3) * (h3 > .5 ? 1 : -1);
    for (let k = 0; k < ghostN; k++) {
      const angle = k / ghostN * 2 * Math.PI;
      const [x, y, z] = project((ux * Math.cos(angle) + vx * Math.sin(angle)) * orbitRadius, (uy * Math.cos(angle) + vy * Math.sin(angle)) * orbitRadius, vz * Math.sin(angle) * orbitRadius);
      const depth = (z / orbitRadius + 1) / 2;
      dots.push({ x, y, z, r: .9 * rs, white: .72, a: .5 * (.4 + .6 * depth) });
    }
    for (let particle = 0; particle < 3; particle++) {
      const angle = t * orbitSpeed + particle / 3 * 2 * Math.PI + h2 * 6;
      const [x, y, z] = project((ux * Math.cos(angle) + vx * Math.sin(angle)) * orbitRadius, (uy * Math.cos(angle) + vy * Math.sin(angle)) * orbitRadius, vz * Math.sin(angle) * orbitRadius);
      const depth = (z / orbitRadius + 1) / 2;
      dots.push({ x, y, z, r: (1.2 + 1.6 * depth) * rs, white: .3 - .22 * depth });
    }
  }
  paint(ctx, dots, dark);
}

function latticeCounts(baseA, baseB, countScale) {
  const scale = Math.sqrt(countScale);
  return [Math.max(3, Math.round(baseA * scale)), Math.max(5, Math.round(baseB * scale))];
}

function drawGlobe(ctx, size, t, dark, countScale, sizeScale) {
  const radius = size / 2 * .82, spin = .5;
  const project = makeProj(t * spin, .4 + .06 * Math.sin(t * .35), size / 2, size / 2, radius);
  const scanMul = size === 20 ? 4.335 : 4.08;
  const scan = t * (spin + (1.7 - spin) * scanMul);
  const rs = radiusScale(size) * sizeScale;
  const [latRings, lonDensity] = latticeCounts(17, 44, countScale);
  const dots = [];
  for (let li = 0; li <= latRings; li++) {
    const lat = -Math.PI / 2 + li / latRings * Math.PI, cosLat = Math.cos(lat), sinLat = Math.sin(lat);
    const lonCount = Math.max(1, Math.round(Math.abs(cosLat) * lonDensity));
    for (let lj = 0; lj < lonCount; lj++) {
      const lon = lj / lonCount * 2 * Math.PI;
      const [x, y, z] = project(cosLat * Math.cos(lon), sinLat, cosLat * Math.sin(lon));
      const depth = (z + 1) / 2;
      const delta = angleDelta(lon + t * spin, scan);
      const boost = Math.exp(-(delta * delta) / .18) * Math.max(0, z);
      dots.push({ x, y, z, r: (.6 + 1.7 * depth + boost) * rs, white: .62 - .54 * depth, a: .45 + .55 * Math.min(1, boost) });
    }
  }
  paint(ctx, dots, dark);
}

function makeMoves(count) {
  return Array.from({ length: count }, (_, index) => {
    const axis = Math.min(2, Math.floor(hashD(index, 2.3) * 3));
    const lo = -1 + .5 * Math.min(3, Math.floor(hashD(index, 5.9) * 4));
    return { axis, lo, hi: lo + .5, angle: (hashD(index, 7.7) < .5 ? 1 : -1) * Math.PI / 2 };
  });
}

function solveCycle(time, count) {
  const slotDuration = .42, rest = 1.2, cycle = 2 * count * slotDuration + rest, current = time % cycle;
  const amount = new Array(count).fill(0); let active = -1;
  if (current < 2 * count * slotDuration) {
    const slot = Math.floor(current / slotDuration), progress = (current - slot * slotDuration) / slotDuration;
    const eased = 1 - (1 - Math.min(1, progress / .7)) ** 3;
    if (slot < count) {
      for (let i = 0; i < slot; i++) amount[i] = 1;
      amount[slot] = eased; active = slot;
    } else {
      const undo = 2 * count - 1 - slot;
      for (let i = 0; i < undo; i++) amount[i] = 1;
      amount[undo] = 1 - eased; active = undo;
    }
  }
  return { amount, active };
}

function applyMoves(point, moves, cycle) {
  let [x, y, z] = point, inActive = false;
  for (let i = 0; i < moves.length; i++) {
    if (cycle.amount[i] <= 0) continue;
    const move = moves[i], coordinate = move.axis === 0 ? x : move.axis === 1 ? y : z;
    if (coordinate < move.lo || coordinate >= move.hi) continue;
    if (i === cycle.active) inActive = true;
    const angle = move.angle * cycle.amount[i], ca = Math.cos(angle), sa = Math.sin(angle);
    if (move.axis === 0) { const y2 = y * ca - z * sa; z = y * sa + z * ca; y = y2; }
    else if (move.axis === 1) { const x2 = x * ca + z * sa; z = -x * sa + z * ca; x = x2; }
    else { const x2 = x * ca - y * sa; y = x * sa + y * ca; x = x2; }
  }
  return [x, y, z, inActive];
}

function drawRubik(ctx, size, t, dark, countScale, sizeScale) {
  const radius = size / 2 * .82;
  const project = makeProj(t * .55, .35 + .1 * Math.sin(t * .9), size / 2, size / 2, radius);
  const rs = radiusScale(size) * sizeScale;
  const [latRings, lonDensity] = latticeCounts(15, 40, countScale);
  const moves = makeMoves(14), cycle = solveCycle(t, moves.length), dots = [];
  for (let li = 0; li <= latRings; li++) {
    const lat = -Math.PI / 2 + li / latRings * Math.PI, cosLat = Math.cos(lat), sinLat = Math.sin(lat);
    const lonCount = Math.max(1, Math.round(Math.abs(cosLat) * lonDensity));
    for (let lj = 0; lj < lonCount; lj++) {
      const lon = lj / lonCount * 2 * Math.PI;
      const [x, y, z, active] = applyMoves([cosLat * Math.cos(lon), sinLat, cosLat * Math.sin(lon)], moves, cycle);
      const [px, py, depthZ] = project(x, y, z), depth = (depthZ + 1) / 2;
      dots.push({ x: px, y: py, z: depthZ, r: (.6 + 1.7 * depth + (active ? .3 : 0)) * rs, white: .62 - .54 * depth - (active ? .14 : 0) });
    }
  }
  paint(ctx, dots, dark);
}

function drawWave(ctx, size, t, dark, countScale, sizeScale) {
  const radius = size / 2 * .874;
  const project = makeProj(t * .18, .38, size / 2, size / 2, 1);
  const rs = radiusScale(size) * sizeScale;
  const [rings, lonDensity] = latticeCounts(15, 40, countScale), dots = [];
  for (let ring = 0; ring <= rings; ring++) {
    const lat = -Math.PI / 2 + ring / rings * Math.PI, cosLat = Math.cos(lat), sinLat = Math.sin(lat);
    const wave = .62 * Math.sin(t * 2.1 - ring * .52) + .38 * Math.sin(t * 1.27 + ring * .83);
    const ringRadius = radius * (.88 + .105 * wave);
    const lonCount = Math.max(1, Math.round(Math.abs(cosLat) * lonDensity));
    for (let lonIndex = 0; lonIndex < lonCount; lonIndex++) {
      const lon = lonIndex / lonCount * 2 * Math.PI;
      const [x, y, z] = project(cosLat * Math.cos(lon) * ringRadius, sinLat * ringRadius, cosLat * Math.sin(lon) * ringRadius);
      const depth = (z / radius + 1) / 2, crest = Math.max(0, wave);
      dots.push({ x, y, z, r: (.6 + 1.7 * depth) * (1 + .4 * crest) * rs, white: .66 - .56 * depth - .1 * crest });
    }
  }
  paint(ctx, dots, dark);
}

function drawRibbon(ctx, size, t, dark, countScale, sizeScale) {
  const radius = size / 2 * .79, project = makeProj(0, .34, size / 2, size / 2, 1);
  const rs = radiusScale(size) * sizeScale, dots = [];
  const ghostN = Math.max(24, Math.round(150 * countScale));
  for (let i = 0; i < ghostN; i++) {
    const [dx, dy, dz] = fibDir(i, ghostN);
    const [x, y, z] = project(dx * radius, dy * radius, dz * radius);
    const depth = (z / radius + 1) / 2;
    dots.push({ x, y, z, r: (.75 + .8 * depth) * rs, white: .7 - .32 * depth, a: .3 });
  }
  const laneScale = Math.sqrt(countScale), lanes = Math.max(2, Math.round(5 * laneScale)), segments = Math.max(20, Math.round(88 * laneScale));
  for (let lane = 0; lane < lanes; lane++) {
    const laneOffset = (lane - (lanes - 1) / 2) * radius * .09;
    for (let segment = 0; segment < segments; segment++) {
      const progress = segment / (segments - 1), x0 = (progress * 2 - 1) * radius * 1.05;
      const envelope = Math.sin(progress * Math.PI) ** .7;
      const wave = Math.sin(progress * Math.PI * 3.9 - t * 2.4 + lane * .3);
      const y0 = laneOffset + wave * radius * .2 * envelope;
      const z0 = Math.cos(progress * Math.PI * 2 + t * .8) * radius * .42;
      const [x, y, z] = project(x0, y0, z0), depth = (z / radius + 1) / 2;
      dots.push({ x, y, z, r: (1.1 + 1.7 * depth) * rs, white: .6 - .54 * depth, a: .9 });
    }
  }
  paint(ctx, dots, dark);
}

function polygonPoint(vertices, progress) {
  const scaled = progress * vertices.length, index = Math.floor(scaled) % vertices.length, local = scaled - Math.floor(scaled);
  const a = vertices[index], b = vertices[(index + 1) % vertices.length];
  return [a[0] + (b[0] - a[0]) * local, a[1] + (b[1] - a[1]) * local];
}

const CIRCLE = Array.from({ length: 120 }, (_, index) => {
  const angle = index / 120 * Math.PI * 2 - Math.PI / 2;
  return [Math.cos(angle), Math.sin(angle)];
});
const TRIANGLE_VERTICES = [[0, -1], [.866, .5], [-.866, .5]];
const SQUARE_VERTICES = [[-.78, -.78], [.78, -.78], [.78, .78], [-.78, .78]];

function shapePoint(shape, progress) {
  if (shape === "circle") return CIRCLE[Math.floor(progress * CIRCLE.length) % CIRCLE.length];
  return polygonPoint(shape === "triangle" ? TRIANGLE_VERTICES : SQUARE_VERTICES, progress);
}

function drawMorph(ctx, size, t, dark, countScale, sizeScale) {
  const sequence = ["circle", "triangle", "square", "circle"], hold = 1.4, morph = .9, segmentDuration = hold + morph;
  const cycle = t % (segmentDuration * 3), segment = Math.floor(cycle / segmentDuration), local = cycle - segment * segmentDuration;
  const blend = local < hold ? 0 : smooth(Math.min(1, (local - hold) / morph));
  const from = sequence[segment], to = sequence[segment + 1];
  const count = Math.max(20, Math.round(90 * countScale)), spread = 1.45;
  const radius = size / 2 * .58 * spread, dotRadius = Math.max(.25, size * .021 * sizeScale), dots = [];
  for (let i = 0; i < count; i++) {
    const progress = i / count, pointA = shapePoint(from, progress), pointB = shapePoint(to, progress);
    const x = size / 2 + (pointA[0] + (pointB[0] - pointA[0]) * blend) * radius;
    const y = size / 2 + (pointA[1] + (pointB[1] - pointA[1]) * blend) * radius;
    const pulse = .5 + .5 * Math.sin(t * 1.8 + i * .18);
    dots.push({ x, y, z: pulse, r: dotRadius * (.82 + .25 * pulse), white: .18 + .42 * (1 - pulse) });
  }
  paint(ctx, dots, dark, .25);
}

const DRAWERS = { orbits: drawOrbits, globe: drawGlobe, rubik: drawRubik, wave: drawWave, ribbon: drawRibbon, morph: drawMorph };

function drawCanvas(canvas, time) {
  const size = Number(canvas.dataset.size), dpr = Math.min(2, devicePixelRatio || 1), dark = stage.dataset.theme === "dark";
  if (canvas.width !== size * dpr || canvas.height !== size * dpr) { canvas.width = size * dpr; canvas.height = size * dpr; }
  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, size, size);
  const state = STATES[activeState], [speed, countScale, sizeScale] = PRESETS[state.mode][size];
  DRAWERS[state.mode](ctx, size, time * speed, dark, countScale, sizeScale);
}

function frame(now) {
  frozenTime = reducedMotion ? .6 : now / 1000;
  canvases.forEach(canvas => drawCanvas(canvas, frozenTime));
  if (!paused && !reducedMotion) animationFrame = requestAnimationFrame(frame);
}

function restart() {
  cancelAnimationFrame(animationFrame);
  if (paused || reducedMotion) canvases.forEach(canvas => drawCanvas(canvas, reducedMotion ? .6 : frozenTime));
  else animationFrame = requestAnimationFrame(frame);
}

function setState(state) {
  activeState = state;
  const details = STATES[state];
  stateButtons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.state === state)));
  modeCode.textContent = `${state} / ${details.mode}`;
  statusLabel.textContent = details.label;
  stateName.textContent = state;
  description.textContent = details.description;
  algorithmNote.textContent = details.note;
  canvases.forEach(canvas => canvas.setAttribute("aria-label", `${details.label} ${canvas.dataset.size}px 动效图标`));
  restart();
}

stateButtons.forEach(button => button.addEventListener("click", () => setState(button.dataset.state)));
themeButtons.forEach(button => button.addEventListener("click", () => {
  stage.dataset.theme = button.dataset.orbTheme;
  themeButtons.forEach(item => item.setAttribute("aria-pressed", String(item === button)));
  restart();
}));
pauseButton.addEventListener("click", () => {
  paused = !paused;
  pauseButton.setAttribute("aria-pressed", String(paused));
  pauseButton.setAttribute("aria-label", paused ? "继续动画" : "暂停动画");
  pauseButton.textContent = paused ? "▶" : "Ⅱ";
  restart();
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden) cancelAnimationFrame(animationFrame);
  else restart();
});

restart();
