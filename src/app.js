// Navigation toggle
const navToggleBtn = document.querySelector(".mobile-nav-toggle");
const navList = document.querySelector(".menu-nav");
navToggleBtn.addEventListener("click", () => {
  navList.toggleAttribute("aria-expanded");
});

//swiper

const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },

    900: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-un",
    prevEl: ".swiper-button-prev-un",
  },
});
