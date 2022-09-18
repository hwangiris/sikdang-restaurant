$(function() {
  var swiperAbout = new Swiper(".swiper-about", {
    slidesPerView: 1,
    spaceBetween: 0,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: ".swiper-about-button-next",
      prevEl: ".swiper-about-button-prev",
    },
  });
  var swiperDish = new Swiper(".swiper-dish", {
    slidesPerView: 1,
    spaceBetween: 20,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-dish-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-dish-button-next",
      prevEl: ".swiper-dish-button-prev",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
  var swiperFeedback = new Swiper(".swiper-feedback", {
    slidesPerView: 1,
    spaceBetween: 40,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-feedback-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
});
