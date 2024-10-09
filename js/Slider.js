const slider = () => {
  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
  });

  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 6,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
  });

  var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },
  });

  var swiper = new Swiper(".mySwiperMobile", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-nextMobile",
      prevEl: ".swiper-button-prevMobile",
    },
    pagination: {
      el: ".swiper-paginationMobile",
    },
    mousewheel: true,
    keyboard: true,
  });

  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    mousewheel: true,
  });
};

export default slider;
