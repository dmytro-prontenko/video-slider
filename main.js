import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";

const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  initialSlide:0,
  // spaceBetween: 10,
  // speed: 250,
  // // clickable: true,
  // // watchOverflow: true,
  // centeredSlides:true,
  loop: true,


  modules: [Navigation],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  lazy: {
    loadPrevNext: true, // pre-loads the next image to avoid showing a loading placeholder if possible
    // loadPrevNextAmount: 1, //or, if you wish, preload the next 2 images
  },
});

// swiper.autoplay()