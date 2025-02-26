// Arquivo dom.js 
let imagem = document.getElementById("imagem")

imagem.addEventListener("mouseover" , function () {
    imagem. setAttributeNS("src","wall.png")

})

imagem.addEventListener("mouseover" , function () {
    imagem. setAttributeNS("src","morumbi.jpg")

})

// ----------------------------------------------------------
let lista = document.getElementById("lista")
let adicionar = document.getElementById("adicionar")
let remover = document.getElementById("remover")

adicionar.addEventListener("click", function(){
    let novoItem = document.createElement("li")
    novoItem.innerText = "Novo Item"
    lista.appendChild(novoItem)
})
remover.addEventListener("click", function(){    
    if(lista.child) {
        lista.removeChild(lista.lastChild)
    }
})