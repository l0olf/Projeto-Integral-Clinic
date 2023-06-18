var btnOpen = document.querySelector(".open")
var popUp1 = document.querySelector('.pop-up')
var all = document.querySelector('.tudo')

function popUp() {
    popUp1.classList.toggle("fechado")
    all.classList.toggle('aberto')
}

var checkArea = document.querySelectorAll('.btn-area');

function select(event) {
    var button = event.target;
    button.classList.toggle("selecionado");
}