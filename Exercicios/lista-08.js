// Questao 1

let contador = 0 
while(contador <= 10) { 
    console.log(contador) 
     contador++ 
}

// Questao 2 

let numeru = prompt("Escolha um número de 1 a 10:")
let mutiplicador = 1 
while (mutiplicador <= 10) {
    let resultado = numeru * mutiplicador
    console.log(numeru, "x", mutiplicador, "=", resultado)
    mutiplicador += 1
}
// Questao 3 

let contagem = 10
while (contagem >= 1) {
  console.log(contagem)
  contagem--
}

// Questao 4 

let senha
do {
  senha = prompt("Digite a senha:")
} while (senha != "12345")
console.log("Senha correta!")

// Questao 5 

let contador2 = 50
while (contador2 <= 100) {
  console.log(contador2)
  contador2++
}

// Questao 6

let num = 0
while (num <= 100) {
  console.log(num)
  num += 5
}

// Questao 7 

let repeticao = 0
while (repeticao < 5) {
  console.log("Eu gosto de JavaScript")
  repeticao++
}

// Questao 8 

let name = prompt ("Escreva seu nome")
let numero = prompt ("Escreva um numero")
while (numero >= 1){
    console.log (name)
    numero --
}