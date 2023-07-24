const header = document.querySelector("#header");
const menu = document.querySelector(".menu");
const aboutSection = document.querySelector("#about");
const toggleContainer = document.querySelector(".menu-toggle__container");

window.addEventListener("scroll", function () {
  const aboutSectionTop = aboutSection.getBoundingClientRect().top;

  if (aboutSectionTop <= 0) header.classList.add("fixed");
  else header.classList.remove("fixed");
});

document.addEventListener("click", (e) => {
  const { target } = e;

  if (target.closest(".menu-toggle__container")) {
    menu.classList.toggle("translate-0");
  }
});
