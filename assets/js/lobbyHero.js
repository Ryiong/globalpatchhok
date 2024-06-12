let count = 0
let i = 0
const a = "png"
const b = "heroimg"
const c = "hk-img"
const d = "titlehk"

const hkBoxs = document.getElementsByClassName('hkbox')
const iRoles = document.getElementsByClassName('hk-img')
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
