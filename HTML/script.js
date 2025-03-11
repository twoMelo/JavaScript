// JAVASCRIPT

let texto = document.getElementById("texto")
function mudarTexto() {
    texto.innerHTML = "Texto Alterado"
} 
function mudarCor() {
    texto.style.color = "red"
    campo.style.backgroundColor = "blue"
}

function trocarFundo() {
    let campo = document.getElementById("campo")
    campo.style.backgroundColor = "yellow"
}

let imagem = document.getElementById("imagem")
function troca() {
    imagem.src = "Lucas Moura - FootyRenders (1).png"
}
function destroca () {
    imagem.src = "Lucas Moura - FootyRenders.png"
}

let mensagem = document.getElementById("mensagem")
function outroTexto() {
    mensagem.innerHTML = "Texto Alterado"
}
function voltaTexto() {
    mensagem.innerHTML = "Passe o mouse aqui"
}

function aparece () {
    let sumir = document.getElementById("sumir")
    if (sumir.style.display == "none") {
        sumir.style.display = "block"
    } else {
        sumir.style.display = "none"
    }
}

function aleatorio () {

let tamanho = document.getElementById("tamanho")
let novoTamanho = Math.floor(Math.random() * (40 - 10  + 1)) + 10
tamanho.style.fontSize = novoTamanho + "px"
}