// LOCALSTORAGE -> SCRIPT.JS

// QUANDO CARREGAR A PÁGINA, MOSTRA O QUE JÁ ESTAVA NO LOCAL STORAGE

// SALVAR QUANDO CLICAR NO BOTÃO

window. onload = function() {
const textoSalvo = localStorage. getItem("minhaAnotacao")
if(textoSalvo) {    
document.getElementById("anotacao") . value = textoSalvo
}   
}

// SALVAR QUANDO CLICAR NO BOTÃO

function salvarAnotacao() {
const texto = document.getElementById("anotacao").value
localStorage.setItem("minhaAnotacao", conteudo )
alert("Nota salva com sucesso")
}