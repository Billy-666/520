var swiper = new Swiper(".swiper-container-lovepby1", {
  pagination: ".swiper-pagination-lovepby1",
  paginationClickable: true,
  spaceBetween: 30,
});

var swiper = new Swiper(".swiper-container-lovepby2", {
  pagination: ".swiper-pagination-lovepby2",
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflow: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});

var swiper = new Swiper(".swiper-container-lovepby3", {
  pagination: ".swiper-pagination-lovepby3",
  effect: "flip",
  grabCursor: true,
  nextButton: ".swiper-button-next-lovepby3",
  prevButton: ".swiper-button-prev-lovepby3",
});
