
//selecionando tag ul
let menu = document.querySelector('nav ul')

//selecionando classe (menu-icon)
let menuIcon = document.querySelector('.menu-icon')

function abrirMenu() {  

    /* toggle = se tiver a classe "open" remova
    Se não tiver adiciona */

    menu.classList.toggle('open')
}