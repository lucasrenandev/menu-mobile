
const menu = document.querySelector(".menu")
const nav = document.querySelector("nav ul")
const menuImage = document.querySelector('.menu img')

menu.addEventListener('click', showMenu)

function showMenu() {

    if (menuImage.getAttribute('src') === 'img/menu.png') {
        menuImage.setAttribute('src', 'img/close.png')
    }
    else {
        menuImage.setAttribute('src', 'img/menu.png')
    }
    
    nav.classList.toggle('open')
}