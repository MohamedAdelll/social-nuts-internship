const descriptionAnimationTime = 1000;
const totalDescriptionTime = 5000;

const pageNumber = document.querySelector(".page-number");
const swiperOptions = {
  // modules: [Navigation, Autoplay, EffectFade],/
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
let lastActiveIndex = null;

swiper.on("slideChange", (data) => {
  const activeSlide = document.querySelector(".swiper-slide-active");
  if (!activeSlide) return;
  const index = +activeSlide.dataset.swiperSlideIndex;
  if (lastActiveIndex === index) return;

  //   // const activeDescription = activeSlide.querySelector(".slide-description");
  //   // activeDescription.classList.add("translateY-0");

  //   // setTimeout(
  //   //   () => {
  //   //     activeDescription.classList.remove("translateY-0");
  //   //   },

  //   //   4000
  //   // );
  pageNumber.textContent = `0${index + 1}`;
  lastActiveIndex = index;
});
