//bgm
// const bgAudio = new Audio()
// bgAudio.autoplay = false;
// bgAudio.loop = true;
// bgAudio.src = ''
// let bgAudiOff = true
const musicBtn = document.getElementById('btn-music')
const mspa = document.getElementById('JS-mspa')
const mpb = document.getElementById('js-music-play')
// bgAudio.pause()
// musicBtn.addEventListener('click', function () {
//     if (bgAudiOff == true) {
//         bgAudio.play()
//         bgAudiOff = false
//         musicBtn.classList.remove("off")
//         musicBtn.classList.add('pm')
//         mspa.classList.remove("hide")
//         console.log("Play Music", bgAudiOff)
//     } else {
//         bgAudio.pause()
//         bgAudiOff = true
//         musicBtn.classList.add("off")
//         musicBtn.classList.remove('pm')
//         mspa.classList.add("hide")
//         console.log("Pause Music", bgAudiOff)
//     }
// })
// const audioHoKS5 = new Audio()
// audioHoKS5.autoplay = true;
// audioHoKS5.loop = true;
// audioHoKS5.src = 'assets/music/hok-season5.mp3'
const openMenu = document.getElementById('open-menu')
const closeMenu = document.getElementById('close-menu')
const mobileMenu = document.querySelector('.mobile-down-nav')
function displayMenu() {
    openMenu.classList.add('hide')
    closeMenu.classList.remove('hide')
    mobileMenu.classList.add('ds')
}
function hideMenu() {
    openMenu.classList.remove('hide')
    closeMenu.classList.add('hide')
    mobileMenu.classList.remove('ds')
}
// Video Banner
const mainClip = document.getElementById('js-main-clip')
mainClip.src = 'https://drive.google.com/uc?export=download&id=150_VIrM8FnenNRdFrQbflTmenEMYkvCv'
mainClip.poster = 'https://vgvdpatchglobal.files.wordpress.com/2024/01/coverbanner.jpg'


// CSS Post
const centerBox = document.querySelector('.center-box')
const contentBox = document.querySelector('.container-box')
if (centerBox.style.display == 'none') {
    contentBox.classList.remove('uppost')
}


// Img Side
var bigImgSide = document.querySelectorAll('.hp-imgbig');
var bigTitleSide = document.querySelectorAll('.hp-big');
var smallImgSide = document.querySelectorAll('.hp-imgsmall');
var smallTitleSide = document.querySelectorAll('.hp-small');

function ConvertDateFormat(date) {
    let parts = date.split('/');

    let formattedDate = parts[1] + '/' + parts[0] + '/' + parts[2];

    return formattedDate;
}
const thumbContentLastest = document.querySelectorAll(".thumb-content-lastest")
const titleContentLastest = document.querySelectorAll(".title-content-lastest")
const tagSkinLastest = document.querySelectorAll(".lastest-contentbox i")
const dateRealTime = ConvertDateFormat((new Date()).toLocaleDateString());
fetch('https://script.google.com/macros/s/AKfycbz-V3Acodgu-QF-4qYy0Vsp3GfrGKIAUho6SujvtcQMwlLBIS0AV1FVIwG4IVKkukAi/exec')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        thumbContentLastest.forEach((item, index) => {
            item.src = "https://vgvdpatchglobal.wordpress.com/wp-content/uploads" + data.data[index].bigImg;
            item.alt = data.data[index].nameSkinVN;
        })
        titleContentLastest.forEach((item, index) => {
            item.innerText = data.data[index].nameHeroVN + "_" + data.data[index].nameSkinVN;
        })
        tagSkinLastest.forEach((item, index) => {
            item.style.background = "url('" + data.data[index].tagSkin + "') 0 0 /100% 100% no-repeat"
        })
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });