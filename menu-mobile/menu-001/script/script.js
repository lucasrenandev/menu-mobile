
//tag ul selecionada
let ul = document.querySelector("nav ul")  

// tag i selecionada, classe (.menu-bnt)
let menu_btn = document.querySelector(".menu-btn i")  

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open')
    }
    else {
        ul.classList.add('open')
    } 
}