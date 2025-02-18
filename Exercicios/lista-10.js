// Exercicio 1 

for(let i = 1; i <= 30; i++) {
    console.log(i)
}

// Exercicio 2

for(let i = 30; i >= 1; i--) {
    console.log(i)
}

// Exercicio 3 

for (let i = 0; i < 5; i++) {
    let numero = prompt("Digite um número:")
    if (numero >= 50) {
        console.log("ACIMA DA MÉDIA")
    } else {
        console.log("ABAIXO DA MÉDIA")
    }
}

// Exercicio 4

let numero = prompt("Digite um número:")
for(let mult = 1; mult <= 10; mult++) {
    let resultado = mult * numero
    console.log(numero, "x", mult, "=", resultado)
}

// Exercicio 5

let patinhos = prompt("Digite o número inicial de patinhos: ")
for (let num1 = patinhos; num1 > 0; num1--) {
    console.log(num1 + " patinho(s) foram passear")
    console.log("Além das montanhas")
    console.log("Para brincar")
    console.log("A mamãe gritou: Quá, quá, quá, quá")
    console.log("Mas só ", (num1 - 1), " patinho(s) voltaram de lá.")
    console.log("A mamãe patinha foi procurar")
    console.log("Além das montanhas")
    console.log("Na beira do mar")
    console.log("A mamãe gritou: Quá, quá, quá, quá")
    console.log("E os patinhos voltaram de lá.")
}

// Exercicio 6

let i = prompt("Digite sua idade: ")
for (let i = 0; i < 10; i++) {
    let idade = prompt("Digite sua idade: ")
    if (idade >= 18) {
        console.log("MAIOR DE IDADE")
    } else {
        console.log("MENOR DE IDADE")
    }
}

// Exercicio 7 

let voto = prompt("Digite seu voto (1-6): ")
for (let voto = 0; voto < 5; voto++) {
    let voto = parseInt(prompt("Digite seu voto (1-6): "))
    switch (voto) {
        case 1:
            console.log("Voto para o candidato 1")
            break
        case 2:
            console.log("Voto para o candidato 2")
            break
        case 3:
            console.log("Voto para o candidato 3")
            break
        case 4:
            console.log("Voto para o candidato 4")
            break
        case 5:
            console.log("Voto nulo")
            break
        case 6:
            console.log("Voto em branco")
            break
        default:
            console.log("Voto inválido")
            break
    }
}