// Exercicio 1

let contador = 1
while (contador <= 20) {
    console.log(contador)
    contador++
}

// Exercicio 2

let usuario = "s"
do {
    usuario = prompt("Deseja continuar? (s/n)")
} while (usuario == "s" || usuario  == "S"){
    console.log("Você escolheu não continuar")
}

// Exercicio 3

let numero = prompt("Escolha um número para o final da sequência:")
let sequencia = 1
do {
    console.log(sequencia)
    sequencia++
} while (sequencia <= numero)

// Exercicio 4

let number = 1
do {
    console.log(number)
    number += 2
} while (number <= 31)

// Exercicio 5

let num = 0
do {
    let numero = prompt("Digite um número:")
    if (numero > 0) {
        console.log("NÚMERO POSITIVO")
    } else if (numero < 0) {
        console.log("NÚMERO NEGATIVO")
    } else {
        console.log("O NÚMERO É ZERO")
    }
    num++
} while (num < 5)

// Exercicio 6

let continuar = 's'
do {
    let numero1 = prompt("Digite o primeiro número:")
    let numero2 = prompt("Digite o segundo número:")
    let soma = Number(numero1) + Number(numero2)
    console.log("A soma é:", soma)
    continuar = prompt("Você deseja fazer outra conta? (s para continuar)")
} while (continuar === 's')
