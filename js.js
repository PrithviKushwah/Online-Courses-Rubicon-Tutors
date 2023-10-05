


var swiper = new Swiper(".mySwiper1", {
    // slidesPerView: a,
    breakpoints: {
        // When window width is >= 768px
        320: {
            slidesPerView: 2.5,
        },
        // When window width is >= 992px
        425: {
            slidesPerView: 3.5,
        },
        // When window width is >= 1200px
        768: {
            slidesPerView: 4.5,
        },
    },
    spaceBetween: 30,
    loop: true,
    infinite: true, // Enable infinite looping


    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
        // reverseDirection: true,
        infinite: true,
        loop: true,

    },

});
var swiper = new Swiper(".mySwiper2", {
    // slidesPerView: b,
    breakpoints: {
        // When window width is >= 768px
        320: {
            slidesPerView: 2.5,
        },
        // When window width is >= 992px
        425: {
            slidesPerView: 3.5,
        },
        // When window width is >= 1200px
        768: {
            slidesPerView: 4.5,
        },
    },
    spaceBetween: 30,
    loop: true,

    infinite: true, // Enable infinite looping

    autoplay: {
        delay: 1500,
        disableOnInteraction: false,

        // reverseDirection: true,

    },

});
// window.addEventListener('resize', () => {
//     swiper.update();
// });


