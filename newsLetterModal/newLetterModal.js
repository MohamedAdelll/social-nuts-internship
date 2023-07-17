const newsLetter = document.querySelector(".newsletter-modal");

const closeModalButton = document.querySelector("#closeModal");
const video = document.querySelector("video");
const mouseAnimator = document.querySelector(".mouse-animation");

header.classList.remove("hide");

closeModalButton.addEventListener("click", () => {
  newsLetter.classList.add("hide");
  document.body.classList.remove("inert");
  mouseAnimator.classList.remove("hide");
  video.play();
});
