const elementChange = document.querySelector('.banner-home_content');
const scaleChange = 0.8943231441048035;

function setScale() {
    if (window.innerWidth < elementChange.clientWidth + 80) {
        console.log("small")
        let zoom = window.innerWidth / 1024;
        elementChange.style.zoom = zoom
    }
}
setScale();
document.addEventListener("DOMContentLoaded", setScale);
window.addEventListener("resize", setScale);
window.addEventListener("load", setScale);

