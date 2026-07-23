const experiments = [
  {
    title: "Mixboard",
    description: "An AI-powered concepting board designed to help you explore, expand and refine your ideas.",
    image: "../../assets/components/google-labs-carousel/mixboard.webp",
    action: "Try It Now",
    categories: ["create", "develop"]
  },
  {
    title: "Pomelli",
    description: "An AI-powered marketing tool designed to build scalable, on-brand content and connect with your audience faster.",
    image: "../../assets/components/google-labs-carousel/pomelli.webp",
    action: "Try It Now",
    categories: ["create", "develop"]
  },
  {
    title: "Google Flow Music",
    description: "A new agentic creative partner for writing lyrics, refining a melody, or inventing entirely new genres.",
    image: "../../assets/components/google-labs-carousel/flow-music.webp",
    action: "Try It Now",
    categories: ["create", "learn"]
  },
  {
    title: "Project Genie",
    description: "An experimental research prototype that lets you create and explore infinitely diverse worlds.",
    image: "../../assets/components/google-labs-carousel/genie.webp",
    action: "Learn More",
    categories: ["create", "explore"]
  }
];

const themes = {
  all: { accent: "#e7b6ff", soft: "#f7e9ff", shape: "#dcb3ff", form: 3, heading: "Be the first to experiment" },
  create: { accent: "#f3a8ef", soft: "#fff5fe", shape: "#ffbdf9", form: 0, heading: "Be the first to create" },
  develop: { accent: "#7fe6aa", soft: "#effcf4", shape: "#48f08b", form: 1, heading: "Be the first to develop" },
  explore: { accent: "#f5cd55", soft: "#fff9e7", shape: "#fcc934", form: 3, heading: "Be the first to explore" },
  learn: { accent: "#8ab6ff", soft: "#edf4ff", shape: "#5e9bff", form: 2, heading: "Be the first to learn" }
};

const shapePaths = [
  "M132.896 7.432C149.932-2.477 170.922-2.477 187.958 7.432L293.323 68.722C310.359 78.632 320.854 96.947 320.854 116.766V239.346C320.854 259.166 310.359 277.48 293.323 287.39L187.958 348.68C170.922 358.59 149.932 358.59 132.896 348.68L27.531 287.39C10.495 277.48 0 259.166 0 239.346V116.766C0 96.947 10.495 78.632 27.531 68.722L132.896 7.432Z",
  "M160.545 0C249.211 0 321.09 71.879 321.09 160.545S249.211 321.09 160.545 321.09 0 249.211 0 160.545 71.879 0 160.545 0Z",
  "M0 59.762C0 26.752 26.752 0 59.762 0h201.33c33.01 0 59.762 26.752 59.762 59.762v201.33c0 33.01-26.752 59.762-59.762 59.762H59.762C26.752 320.854 0 294.102 0 261.092V59.762Z",
  "M89.848 0c29.54 0 55.749 14.172 72.124 36.049.51.681 1.538.681 2.048 0C180.396 14.173 206.605.002 236.145.002c49.619 0 89.844 39.986 89.844 89.312 0 29.936-14.818 56.431-37.56 72.636-.713.509-.713 1.578 0 2.086 22.743 16.205 37.563 42.701 37.563 72.639 0 49.325-40.225 89.311-89.845 89.311-29.541 0-55.752-14.173-72.128-36.053-.51-.681-1.538-.681-2.048 0-16.375 21.88-42.585 36.054-72.126 36.054C40.225 325.987 0 286.001 0 236.676c0-29.939 14.82-56.436 37.564-72.641.713-.508.713-1.577 0-2.086C14.822 145.744.004 119.249.004 89.312.004 39.986 40.228 0 89.848 0Z"
];

function shapeMarkup(activeForm) {
  const transforms = ["translate(19.5 1.5)", "translate(19 19)", "translate(19.5 19.5)", "translate(17 17)"];
  return `<svg class="background-shape" viewBox="0 0 360 360" fill="none" focusable="false">
    ${shapePaths.map((path, index) => `<path class="shape-path${index === activeForm ? " is-active" : ""}" fill="currentColor" transform="${transforms[index]}" d="${path}"/>`).join("")}
  </svg>`;
}

const root = document.querySelector(".labs-carousel");
const track = document.querySelector("#orbitTrack");
const heading = document.querySelector(".labs-heading");
const status = document.querySelector(".position-status");
const categoryButtons = [...document.querySelectorAll("[data-category]")];
const directionButtons = [...document.querySelectorAll("[data-direction]")];
const carouselWindow = document.querySelector(".carousel-window");
const shapeSlots = [...document.querySelectorAll(".bg-shapes__slot")];

let category = "create";
let items = experiments;
let position = 0;
let resetTimer;
let shapeRotation = 0;
let morphTimer;

function modulo(value, length) { return ((value % length) + length) % length; }

function cardMarkup(item, slot) {
  return `<div class="orbit-item" data-slot="${slot}" style="--slot:${slot}">
    <a class="experiment-card" href="#${item.title.toLowerCase().replaceAll(" ", "-")}" tabindex="${slot === position ? "0" : "-1"}">
      <div class="card-media"><img src="${item.image}" alt="${item.title}"></div>
      <div class="card-copy"><h2>${item.title}</h2><p>${item.description}</p><span>${item.action}</span></div>
    </a>
  </div>`;
}

function renderCards() {
  const cards = [];
  for (let slot = -10; slot <= 10; slot++) cards.push(cardMarkup(items[modulo(slot + 1, items.length)], slot));
  track.innerHTML = cards.join("");
  updateTrack(false);
}

function updateTrack(announce = true) {
  track.style.setProperty("--position", position);
  [...track.querySelectorAll(".orbit-item")].forEach(item => {
    const centered = Number(item.dataset.slot) === position;
    item.classList.toggle("is-center", centered);
    item.querySelector("a").tabIndex = centered ? 0 : -1;
  });
  const active = items[modulo(position + 1, items.length)];
  if (announce) status.textContent = `${active.title}，第 ${modulo(position, items.length) + 1} 张，共 ${items.length} 张`;
  clearTimeout(resetTimer);
  if (position > 5 || position < -5) {
    resetTimer = setTimeout(() => {
      position -= Math.sign(position) * items.length;
      track.classList.add("no-transition");
      updateTrack(false);
      requestAnimationFrame(() => track.classList.remove("no-transition"));
    }, 760);
  }
}

function move(direction) {
  position += direction;
  updateTrack();
}

function setCategory(nextCategory) {
  category = nextCategory;
  const filtered = nextCategory === "all" ? experiments : experiments.filter(item => item.categories.includes(nextCategory));
  items = filtered.length ? filtered : experiments;
  position = 0;
  const theme = themes[nextCategory];
  root.dataset.theme = nextCategory;
  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--accent-soft", theme.soft);
  root.style.setProperty("--shape-color", theme.shape);
  root.style.backgroundColor = theme.soft;
  heading.textContent = theme.heading;
  categoryButtons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.category === nextCategory)));
  shapeRotation += 180;
  root.style.setProperty("--shapes-rot", `${shapeRotation}deg`);
  shapeSlots.forEach(slot => slot.classList.add("is-morphing"));
  window.setTimeout(() => {
    shapeSlots.forEach(slot => {
      slot.querySelectorAll(".shape-path").forEach((path, index) => path.classList.toggle("is-active", index === theme.form));
    });
  }, 360);
  clearTimeout(morphTimer);
  morphTimer = window.setTimeout(() => shapeSlots.forEach(slot => slot.classList.remove("is-morphing")), 920);
  renderCards();
  status.textContent = `${buttonLabel(nextCategory)} 分类，共 ${items.length} 张卡片`;
}

function buttonLabel(value) { return value.charAt(0).toUpperCase() + value.slice(1); }

directionButtons.forEach(button => button.addEventListener("click", () => move(Number(button.dataset.direction))));
categoryButtons.forEach(button => button.addEventListener("click", () => setCategory(button.dataset.category)));
carouselWindow.addEventListener("keydown", event => {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    move(event.key === "ArrowLeft" ? -1 : 1);
  }
});

shapeSlots.forEach(slot => { slot.innerHTML = shapeMarkup(themes.create.form); });
renderCards();
