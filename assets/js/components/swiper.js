document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".swipers", {
        slidesPerView: "auto", 
        spaceBetween: 24, 
        loop: false,
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