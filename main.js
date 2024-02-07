import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";

const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  initialSlide:0,
  speed: 850,
  loop: true,


  modules: [Navigation],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  lazy: {
    loadPrevNext: true,
  },
});
