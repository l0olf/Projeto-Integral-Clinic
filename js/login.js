var email = document.querySelector("#email");
var senha = document.querySelector("#senha");
var btn_login = document.querySelector("#btn_1");
var erro = document.querySelector(".erro");
var btn_signup = document.querySelector(".btn-2");

btn_login.addEventListener("click", () => {
    if (email.value == "doctor.fran@gmail.com" && senha.value == "12345678") {
        window.open("arearRestrita.html");
    } else{
        erro.classList.add("erro_auth");
    }
});

btn_signup.addEventListener("click", () => {
    window.open("sign.html");

});