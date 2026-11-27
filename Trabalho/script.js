let botaoAbrir = document.querySelector(".botao-abrir")
let menuDeslize = document.querySelector(".nav")
let slide = document.querySelector(".carrossel-slides")

botaoAbrir.addEventListener("click", function(){
    menuDeslize.classList.toggle("ativado")
})

function passarSlide(){
    slide.style.transition = "transform 0.7s ease-in-out"
    slide.style.transform = "translateX(-100%)"

    slide.addEventListener("transitionend", () => {
        slide.style.transition = "none"
        slide.appendChild(slide.firstElementChild)
        slide.style.transform = "translateX(0)"
    }, {once: true})
}

setInterval(passarSlide, 3000)
