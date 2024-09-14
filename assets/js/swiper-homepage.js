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

const tagSkinLastest = document.querySelectorAll(".swiper-slide-content i")
const thumbContentLastest = document.querySelectorAll(".swiper-slide-content img")
const titleContentLastest = document.querySelectorAll(".swiper-slide-content p")