
const menu = document.querySelector(".menu")
const nav = document.querySelector("nav ul")

menu.addEventListener('click', openMenu) 

function openMenu() {

    nav.classList.toggle('active')
}

