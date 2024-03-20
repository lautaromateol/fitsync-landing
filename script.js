const openNav = document.getElementById("open-menu")
const closeNav = document.getElementById("close-menu")
const header = document.getElementById("header")
const svg = document.querySelector(".hero-svg")

openNav.addEventListener("click", () => {
  header.classList.add("nav-open")
})

closeNav.addEventListener("click", () => {
  header.classList.remove("nav-open")
})

const links = document.querySelectorAll("a:link")

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const href = link.getAttribute("href")
    if(href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
    if(href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href)
      section.scrollIntoView({behavior: "smooth"})
    }
    if(link.classList.contains("nav-item") || link.classList.contains("btn-full")) header.classList.remove("nav-open")
  })
})

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
