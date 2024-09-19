const elementChange = document.querySelector('.banner-home_content');

function setScale() {
    if (window.innerWidth < elementChange.clientWidth + 80) {
        let zoom = window.innerWidth / 1024;
        elementChange.style.zoom = zoom
    }
}
setScale();
document.addEventListener("DOMContentLoaded", setScale);
window.addEventListener("resize", setScale);
window.addEventListener("load", setScale);

