// Exercicio 1

document.getElementById('botao').addEventListener('click', function() {
    var paragrafo = document.getElementById('meuParagrafo');
    paragrafo.style.color = paragrafo.style.color === 'red' ? 'black' : 'red';
});

// Exercicio 2

document.getElementById('botao').addEventListener('click', function() {
    var botao = document.getElementById('botao');
    botao.style.backgroundColor = botao.style.backgroundColor === 'blue' ? 'green' : 'blue';
});