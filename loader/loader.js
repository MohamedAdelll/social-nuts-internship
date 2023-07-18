const mainAnimationTime = 5000;
const fadeAnimationTime = 100;
const tick = mainAnimationTime / 100;

const sections = document.querySelectorAll("section");
const leftLine = document.querySelector(".left-line");

const loader = document.querySelector(".loader");
const counter = document.querySelector(".loader .counter");

const intervalId = setInterval(() => {
  counter.textContent = +counter.textContent + 1;
  if (+counter.textContent === 100) {
    clearInterval(intervalId);
    loader.classList.add("fade");
    setTimeout(() => {
      loader.classList.add("hide");
      sections.forEach((section) => section.classList.remove("hide"));
      leftLine.classList.remove("hide");
      newsLetter.classList.remove("hide");
    }, fadeAnimationTime);
  }
}, tick);

window.addEventListener("beforeunload", function (event) {
  header.classList.add("hide");
});
