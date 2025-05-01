document.addEventListener("DOMContentLoaded", function () {
    new Swiper("#swiper_about", {
        slidesPerView: "auto",
        loop: true,
        speed: 800, 
        autoplay: {
            delay: 3000, 
            disableOnInteraction: false, 
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        
    });
});
