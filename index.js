// Nessa linha estamos pegando todos os elementos //
var elementosDuvidas = document.querySelectorAll('.duvida')
let BackToTop = document.getElementById("buttonTop")

// 2º Estamos querendo executar uma função para cada elemento duvida que pegamos na 1º linha //

// E dentro da função vamos adicionar eventos de 'click', e o evento de 'click' vai executar o elemento da 3º linha //


elementosDuvidas.forEach(function(duvida) {
    duvida.addEventListener('click', function() {
        duvida.classList.toggle('ativa')
    })
})

BackToTop.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
window.addEventListener("scroll", function () {
    if(document.documentElement.scrollTop > 100) {
        BackToTop.style.display = "block";
    }else {
        BackToTop.style.display = "none";
    }
})