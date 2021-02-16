document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.port_testimonial_setions .swiper-container')) {
        new Swiper('.port_testimonial_setions .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            speed: 1000,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            autoplay: {
                delay: 5500,
                disableOnInteraction: false
            }
        });
    }
    if (document.querySelector('.port_responsor_setions .swiper-container')) {
        new Swiper('.port_responsor_setions .swiper-container', {
            slidesPerView: 5,
            spaceBetween: 30,
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 3500
            },

            // Responsive breakpoints
            breakpoints: {
                // when window width is <= 320px
                480: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                // when window width is <= 480px
                767: {
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                // when window width is <= 640px
                991: {
                    slidesPerView: 4,
                    spaceBetween: 30
                }
            }

        });
    }
}, false);
