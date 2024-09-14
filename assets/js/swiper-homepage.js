const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 3500,
    },

    navigation: {
        nextEl: '.swiper_btn_next',
        prevEl: '.swiper_btn_prer',
    },
})