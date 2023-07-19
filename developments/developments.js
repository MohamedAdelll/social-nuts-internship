// import
import { Swiper } from "swiper";
import { Navigation, Autoplay, EffectFade } from "swiper";
// import { Navigation, Pagination } from "swiper/modules";
const descriptionAnimationTime = 1000;
const totalDescriptionTime = 5000;

const pageNumber = document.querySelector(".page-number");
const swiperOptions = {
  modules: [Navigation, Autoplay, EffectFade],
  slidesPerView: 1,
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: totalDescriptionTime,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
};

const swiper = new Swiper(".swiper", swiperOptions);

const firstDescription = document.querySelector(
  `.slide-description[data-index="0"]`
);
firstDescription.classList.add("translateY-0");
let lastActiveIndex = 0;

swiper.on("slideChange", (data) => {
  const index = data.activeIndex % 3 === 0 ? 3 : data.activeIndex % 3;
  if (lastActiveIndex === index) return;
  console.log({
    index,
  });
  const newActiveDescriptions = document.querySelectorAll(
    `.slide-description[data-index="${index - 1}"]`
  );
  newActiveDescriptions.forEach((newActiveDescription) =>
    newActiveDescription?.classList.add("translateY-0")
  );

  setTimeout(
    () => {
      const currentActiveDescriptions = document.querySelectorAll(
        `.slide-description[data-index="${index - 1}"]`
      );
      currentActiveDescriptions.forEach((currentActiveDescription) =>
        currentActiveDescription?.classList.remove("translateY-0")
      );
    },

    4000
  );
  pageNumber.textContent = `0${index}`;
  lastActiveIndex = index;
});
