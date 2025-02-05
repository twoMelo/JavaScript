// Questao 1
let idade = prompt("Qual sua idade?")
if (idade < 12) {
    console.log("Criança")
} else if (idade < 17) {
    console.log("Adolescente")
} else if (idade < 59) {
    console.log("Adulto")
} else {
    console.log("Idoso")
}

// Questao 2
let temp = prompt("Qual a temperatura em graus Celsius?")
if (temp < 10) {
    console.log("Muito Frio")
} else if (temp < 20) {
    console.log("Frio")
} else if (temp < 30) {
    console.log("Agradável")
} else {
    console.log("Muito Quente")
}

// Questao 3
let turno = prompt("Qual seu turno? (M/V/N)")
if (turno == "M") {
    console.log("Bom dia!")
} else if (turno == "V") {
    console.log("Boa tarde!")
} else if (turno == "N") {
    console.log("Boa noite!")
} else {
    console.log("Turno inválido")
}

// Questao 4
let valor = prompt("Qual o valor da compra?")
if (valor <= 100) {
    console.log("Desconto de 5%")
} else if (valor <= 200) {
    console.log("Desconto de 10%")
} else {
    console.log("Desconto de 15%")
}

// Questao 5
let nota = prompt("Qual a nota?")
if (nota > 90) {
    console.log("A")
} else if (nota > 80) {
    console.log("B")
} else if (nota > 70) {
    console.log("C")
} else if (nota > 60) {
    console.log("D")
} else {
    console.log("F")
}

// Questao 6
