import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import 'swiper/css';

const swiper = new Swiper(".swiper", {
  speed: 650,
  // initialSlide: ,
  slidesPerView: 3,
  spaceBetween: 25,
  // centeredSlides:true,
  loop: true,
  // lazyPreloadPrevNext:4,

  modules: [Navigation],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  lazy: {
    loadPrevNext: true, // pre-loads the next image to avoid showing a loading placeholder if possible
    loadPrevNextAmount: 4 //or, if you wish, preload the next 2 images
  },
});

const preloadNext = (n) => {
  swiper
    .slides
    .slice(swiper.activeIndex, swiper.activeIndex + n + 1)
    .map(slide => Array.from(slide.querySelectorAll('iframe'))) // Преобразуем NodeList в массив
    .flat() // Преобразуем массив массивов iframe в один массив
    .forEach(iframe => iframe.setAttribute('loading', 'eager')); // Устанавливаем атрибут loading='eager' для каждого iframe
};

// preload the next 2 images immediately
preloadNext(2);

// preload the next 2 images after changing slides
swiper.on('slideChange', () => preloadNext(2));
