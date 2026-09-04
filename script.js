const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const themeBtn = document.getElementById("themeBtn");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "light") {
  document.body.classList.add("light");
  themeBtn.textContent = "☀";
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const light = document.body.classList.contains("light");
  localStorage.setItem("portfolio-theme", light ? "light" : "dark");
  themeBtn.textContent = light ? "☀" : "☾";
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
