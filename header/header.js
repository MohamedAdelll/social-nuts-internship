const header = document.getElementById("header");
const aboutSection = document.getElementById("about");

window.addEventListener("scroll", function () {
  const aboutSectionTop = aboutSection.getBoundingClientRect().top;

  if (aboutSectionTop <= 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});
