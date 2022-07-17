
let ul = document.querySelector('nav ul')
let menu = document.querySelector(".menu")
let menuIcon = document.querySelector(".menu i")

menu.addEventListener('click', menuOpen)

function menuOpen() {

    if (ul.classList.contains('active')) {
        ul.classList.remove('active')
    }
    else {
        ul.classList.add('active')
    }
}