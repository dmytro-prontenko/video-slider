import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";

const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  initialSlide:-1,
  spaceBetween: 10,
  speed: 800,
  // autoHeight:true,
  clickable: true,
  // watchOverflow: true,
  centeredSlides:false,
  loop: true,
  // lazyPreloadPrevNext:4,
  // effect: "creative",

  modules: [Navigation],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  lazy: {
    loadPrevNext: true, // pre-loads the next image to avoid showing a loading placeholder if possible
    loadPrevNextAmount: 4, //or, if you wish, preload the next 2 images
  },
});

swiper.autoplay()