const token = "Bearer 4e8b5ccf15e108ada37b3117bf67c112";
import axios from "axios";
import Swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

const videoURL = `https://api.vimeo.com/videos?query=824804225`;
const countVideoFrames = 8;

const mainSwiper = new Swiper("#main-swiper", {
  slidesPerView: 4,
  initialSlide: 0,
  speed: 850,
  loop: true,
  modules: [Navigation],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// const modalSwiper = new Swiper("#modal-swiper", {
//   slidesPerView: 4,
//   initialSlide: 0,
//   speed: 850,
//   loop: true,
//   modules: [Pagination],
//   pagination: {
//     el: '.modal-swiper-pagination',
//   },
// });

const options = {
  headers: {
    Authorization: token,
    "Content-Type": "application/json",
  },
};

async function getVideo() {
  try {
    let response = await axios.get(videoURL, options);
    if (response.status === 200) {
      response = response.data.data[0];
      console.log(response);

      const videoContainer = document.querySelector(".swiper-wrapper");

      let htmlToInsert = "";
      const slideStartTag = "<div class='swiper-slide'>";
      const slideEndTag = "</div>";
      for (let i = 1; i <= countVideoFrames; i++) {
        htmlToInsert +=
          slideStartTag +
          `<img
          class="slide-img"
          id="${i}"
          src="${response.pictures.base_link}"
          width=300
          height=300>` +
          slideEndTag;
      }
      videoContainer.insertAdjacentHTML("afterbegin", htmlToInsert);
      const slides = document.querySelectorAll(".slide-img");

      slides.forEach((slide) => {
        slide.addEventListener("click", () => {
          const modal = document.getElementById("myModal");
          modal.style.display = "block";

          window.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
              modal.style.display = "none";
            }
          });

          modal.addEventListener("click", (e) => {
            if (e.target === modal) {
              modal.style.display = "none";
            }
          });

          const closeBtn = document.querySelector(".close");
          closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
          });
        });
      });
    } else {
      printError(response.status);
    }
  } catch (error) {
    printError(error);
  }
}

getVideo();

function printError(error) {
  console.error("Error occurred:", error);
}
