//bgm
const bgAudio = new Audio()
bgAudio.autoplay = true;
bgAudio.loop = true;
bgAudio.src = 'assets/music/DQ_Skin.mp3'
let bgAudiOff = true
const musicBtn = document.getElementById('btn-music')
const mspa = document.getElementById('JS-mspa')
const mpb = document.getElementById('js-music-play')
bgAudio.pause()
musicBtn.addEventListener('click', function () {
    if (bgAudiOff == true) {
        bgAudio.play()
        bgAudiOff = false
        musicBtn.classList.remove("off")
        musicBtn.classList.add('pm')
        mspa.classList.remove("hide")
        console.log("Play Music", bgAudiOff)
    } else {
        bgAudio.pause()
        bgAudiOff = true
        musicBtn.classList.add("off")
        musicBtn.classList.remove('pm')
        mspa.classList.add("hide")
        console.log("Pause Music", bgAudiOff)
    }
})

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

let count = 0
let i = 0
const a = "png"
const b = "heroimg"
const c = "hk-img"
const d = "titlehk"
const hkBoxs = document.getElementsByClassName('hkbox')
const iRoles = document.getElementsByClassName(c)
const tRoles = document.getElementsByClassName('titlehk')
const imgRoles = document.getElementsByClassName('center-rotb')

function removeRole() {
    for (let iRole of iRoles) {
        iRole.classList.remove('hkbox-touch')
    }
    for (let tRole of tRoles) {
        tRole.classList.remove('black')
        tRole.classList.add('noside')
    }
}
for (let hkBox of hkBoxs) {
    hkBox.addEventListener('click', function () {
        i = parseInt(hkBox.id.slice(7,))
        for (let imgRole of imgRoles) {
            imgRole.classList.add('imgout')
            setTimeout(function () {
                imgRole.classList.add('hide')
                imgRole.classList.remove('imgout')
                imgRole.classList.remove('imgin')
            }, 1000)
        }
        setTimeout(function () {
            document.getElementById(hkBox.id + a).classList.remove('hide')
            document.getElementById(hkBox.id + a).classList.add('imgin')
        }, 1000)
        removeRole()
        hkBox.querySelector('.hk-img').classList.add('hkbox-touch')
        hkBox.querySelector('.titlehk').classList.add('black')
        hkBox.querySelector('.titlehk').classList.remove('noside')
    })
}

// Loop Auto Img
setInterval(function () {
    document.getElementById(b + i + a).classList.add('imgout')
    setTimeout(function () {
        document.getElementById(b + i + a).classList.add('hide')
        document.getElementById(b + i + a).classList.remove('imgout')
        document.getElementById(b + i + a).classList.remove('imgin')
    }, 1000)
    i++
    if (i > 5) {
        i = 0
    }
    setTimeout(function () {
        document.getElementById(b + i + a).classList.remove('hide')
        document.getElementById(b + i + a).classList.add('imgin')
    }, 1000)
    removeRole()
    iRoles[i].classList.add('hkbox-touch')
    document.getElementById(d + i).classList.add('black')
    document.getElementById(d + i).classList.remove('noside')
}, 6000)
}