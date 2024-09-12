let countSlide = 0;
const bannerContent = document.querySelector('.banner-content')
const numberSlide = bannerContent.childElementCount - 1

window.addEventListener('mousewheel', function (e) {
    if (e.wheelDelta < 0) {
        wDelta = 'down'
        countSlide = countSlide + 1 > numberSlide ? numberSlide : countSlide + 1
    } else {
        wDelta = 'up'
        countSlide = countSlide - 1 < 0 ? 0 : countSlide - 1
    }
    bannerContent.style.transform = 'translate(0, -' + 100 * countSlide + 'vh)'
});