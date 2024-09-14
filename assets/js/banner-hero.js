let openImage = false
let timedelay = 6000
let indexImage = 0

const roleLanes = document.querySelectorAll(".role-lane")
const homepageImgBanners = document.querySelectorAll(".homepage-img_banner")
// Loop icon
setInterval(() => {
    for (let roleLane of roleLanes) {
        roleLane.classList.remove('active-role')
    }
    if (openImage) {
        setTimeout(() => {
            openImage = false
            indexImage = indexImage + 1 > 5 ? 0 : indexImage + 1
        }, timedelay)
    } else {
        indexImage = indexImage + 1 > 5 ? 0 : indexImage + 1
    }
    roleLanes[indexImage].classList.add('active-role')
    openImgBanner(indexImage)

}, timedelay)

// Click icon
for (let [index, roleLane] of roleLanes.entries()) {
    roleLane.addEventListener('click', () => {
        openImage = true
        for (let roleLane of roleLanes) {
            roleLane.classList.remove('active-role')
        }
        roleLane.classList.add('active-role')
        indexImage = index
        openImgBanner(indexImage)
    })
}

// Display Image
function openImgBanner(index) {
    for (let homepageImgBanner of homepageImgBanners) {
        homepageImgBanner.classList.remove('display-img-homepage')
        homepageImgBanner.classList.add('hide-img-homepage')
    }
    homepageImgBanners[index].classList.add('display-img-homepage')
}
openImgBanner(indexImage)