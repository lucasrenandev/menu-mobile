
const menu = document.querySelector(".menu")
const nav = document.querySelector("nav ul")

menu.addEventListener('click', openMenu) 

function openMenu() {

    if (nav.classList.contains('active')) {
        nav.classList.remove('active')
    }
    else {
        nav.classList.add('active')
    }
}

