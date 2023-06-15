var links = document.querySelector
let bi = document.querySelector(".bi")
let menuMobile = document.querySelector(".menu-mobile")
let menuBurguer = document.querySelector(".menu-burguer")
var btn_signup = document.querySelector(".register");

menuBurguer.addEventListener('click', () => {
    if (menuBurguer.classList.contains("activeMenu")) {
        menuBurguer.classList.remove("bi-list")
        menuBurguer.classList.add("bi-x")
        menuMobile.classList.toggle("active")
        menuBurguer.classList.remove("activeMenu")
    }
    else {
        menuBurguer.classList.remove("bi-x")
        menuBurguer.classList.add("bi-list")
        menuMobile.classList.toggle("active")
        menuBurguer.classList.add("activeMenu")
    }
})
btn_signup.addEventListener("click", () => {
    window.location.href = "sign.html";
});
