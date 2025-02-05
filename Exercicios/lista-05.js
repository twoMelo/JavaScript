// Questão 1
let idade = prompt("Qual sua idade?")
if (idade < 18) {
    console.log("Você não pode dirigir")
} else { 
    console.log("Você pode dirigir")
}

// Questão 2
let anosTrabalho = prompt("Quantos anos você trabalhou na empresa?")
let projetos = prompt("Quantos projetos você realizou?")
if (anosTrabalho >= 5 || projetos > 10) {
    console.log("Você está elegível para promoção")
} else {
    console.log("Você não está elegível para promoção")
}

// Questão 3
let idade1 = prompt("Qual sua idade?")
if (idade1 >= 18 && idade1 <= 30) {
    console.log("Você pode entrar no evento")
} else {
    console.log("Você não pode entrar no evento")
}

// Questão 4
let idade2 = prompt("Qual sua idade?")
if (idade2 > 21) {
    console.log("Você foi aceito para a vaga")
} else {
    console.log("Você não foi aceito para a vaga")
}

// Questão 5
let nome = prompt("Qual o seu username?")
let senha = prompt("Digite a senha")
if (nome == "admin" && senha == "1234") { 
    console.log("Login bem-sucedido")
} else {
    console.log("Nome de usuário ou senha incorretos")
}

// Questão 6
let numero = prompt("Digite um número")
if (numero > 10 && numero <= 20) {
    console.log("O número está dentro do intervalo entre 10 e 20")
} else if (numero >= 30 && numero <= 50) {
    console.log("O número está dentro do intervalo entre 30 e 50")
} else {
    console.log("O número não está nos intervalos especificados")
}

// Questão 7
let num = prompt("Digite um número")
if (num < 10 || num > 100 || num == 50) {
    console.log("O número é aceito")
} else {
    console.log("O número não é aceito")
}
