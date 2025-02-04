// Questao 1
let idade = prompt("Qual sua idade?")
console.log("Você tem ", idade, " anos")
if (idade >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade")
}
// Questao 2
let numero = prompt("Escolha um número:")
let resultado = numero % 2 //resto
if (resultado == 0) {
    console.log("O número é par")
} else {
    console.log("O número é impar")
}
// Questao 3
let nota1 = prompt("Qual a primeira nota:")
let nota2 = prompt ("Qual a segunda nota:")
let total = (nota1 + nota2) / 2
if (total >= 7) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}
// Questao 4
