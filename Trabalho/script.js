let botaoAbrir = document.querySelector(".botao-abrir")
let botaoFechar = document.querySelector(".botao-fechar")
let menuDeslize = document.querySelector(".nav")

botaoAbrir.addEventListener("click", function(){
    menuDeslize.classList.toggle("ativado")
})
