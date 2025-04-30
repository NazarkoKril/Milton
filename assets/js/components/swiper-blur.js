document.addEventListener("DOMContentLoaded", function () {
const swiper = new Swiper('.swiper-blur', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
  });
});