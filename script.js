const menuBtn=document.getElementById("menuBtn");
const nav=document.getElementById("nav");
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const themeBtn=document.getElementById("themeBtn");
const saved=localStorage.getItem("portfolio-theme");
if(saved==="light") document.body.classList.add("light");
themeBtn.textContent=document.body.classList.contains("light")?"☾":"☼";
themeBtn.addEventListener("click",()=>{
  document.body.classList.toggle("light");
  const light=document.body.classList.contains("light");
  localStorage.setItem("portfolio-theme",light?"light":"dark");
  themeBtn.textContent=light?"☾":"☼";
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.getElementById("year").textContent=new Date().getFullYear();
