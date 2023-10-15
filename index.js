// Nessa linha estamos pegando todos os elementos //
var elementosDuvidas = document.querySelectorAll('.duvida')

// 2º Estamos querendo executar uma função para cada elemento duvida que pegamos na 1º linha //

// E dentro da função vamos adicionar eventos de 'click', e o evento de 'click' vai executar o elemento da 3º linha //


elementosDuvidas.forEach(function(duvida) {
    duvida.addEventListener('click', function() {
        duvida.classList.toggle('ativa')
    })
}) 