var links = document.querySelector
let bi = document.querySelector(".bi")
let menuMobile = document.querySelector(".menu-mobile")
let menuBurguer = document.querySelector(".menu-burguer")


menuBurguer.addEventListener('click', () => {
    if (menuBurguer.classList.contains("activeMenu")) {
        menuBurguer.classList.remove("bi-three-dots")
        menuBurguer.classList.add("bi-x")
        menuMobile.classList.toggle("active")
        menuBurguer.classList.remove("activeMenu")
    }
    else {
        menuBurguer.classList.remove("bi-x")
        menuBurguer.classList.add("bi-three-dots")
        menuMobile.classList.toggle("active")
        menuBurguer.classList.add("activeMenu")
    }
})

