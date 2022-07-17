
const ul = document.querySelector("nav ul")
const menu = document.querySelector(".menu")
const menuImagem = document.querySelector(".menu img")

menu.addEventListener('click', menuShow)

function menuShow() {

    if (menuImagem.getAttribute('src') === 'img/menu.png') {
        menuImagem.setAttribute('src', 'img/close.png')
    }
    else {
        menuImagem.setAttribute('src', 'img/menu.png')
    }

    ul.classList.toggle('open')
}