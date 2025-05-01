document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('#swiper-jorney', {
      slidesPerView: 4,
      spaceBetween: 0,
      initialSlide: 0,
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.3,
        },
        640: {
          slidesPerView: 2.2,
        },
        1300: {
          slidesPerView: 3.2,
        },
       1700: {
          slidesPerView: 4.2,
        },
      },
      on: {
        slideChange: function () {
          const slides = document.querySelectorAll('.timeline-slide');
          slides.forEach((slide, index) => {
            if (index === this.activeIndex) {
              slide.classList.add('active');
            } else {
              slide.classList.remove('active');
            }
          });
        },
        init: function() {
          const slides = document.querySelectorAll('.timeline-slide');
          slides[0].classList.add('active');
        }
      }
    });
  });