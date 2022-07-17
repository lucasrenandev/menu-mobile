
let list = document.querySelector('nav ul')

let menu = document.querySelector('#menu')

menu.addEventListener('click', OpenMenu)

function OpenMenu() {

    if(list.classList.contains('open')) {
        list.classList.remove('open')
    }
    else{
        list.classList.add('open')
    }
}