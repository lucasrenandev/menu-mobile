
let btnMenu = document.querySelector(".menu-btn i")

let ul = document.querySelector("nav ul")

function menuMobile() {

    if (ul.classList.contains('open')) {
        ul.classList.remove('open')
    }
    else {
        ul.classList.add('open')
    }
}