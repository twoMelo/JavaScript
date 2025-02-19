// Exercicio 1

function javaScript() {
  console.log("Eu gosto de JavaScript");
}
javaScript();

// Exercicio 2

function contarAte5() {
    for (let i = 1; i <= 5; i++) {
      console.log(i);
    }
  }
  contarAte5();

// Exercicio 3

nome = prompt ("Digite seu nome: ")
function saudacao(nome) {
    console.log("Ola, " + nome + '! Seja bem vindo (a)!')
}
saudacao(nome)

// Exercicio 4

function multiplicar(a,b) {
    let resultado = a * b
    return resultado
  }
  console.log(multiplicar(5,3))

  // Exercicio 5

  function verificaIdade(idade) {
    if (idade >= 18) {
        console.log("MAIOR DE IDADE")
    } else {
      console.log("MENOR DE IDADE")
    }
  }
  verificaIdade(18)

  // Exercicio 6

function somar(a, b) {
    return a + b;
  }
  console.log(somar(2, 3))

  // Exercicio 7

function calcularAreaRetangulo(largura, altura) {
    return largura * altura;
}
console.log(calcularAreaRetangulo(5, 10))

// Exercicio 8

function compararIdade (idade1, idade2)
{
    if (idade1 > idade2) {
        console.log("A primeira pessoa é mais velha")
    } else if (idade2 > idade1) {
        console.log("A segunda pessoa é mais velha")
    } else {
        console.log("As duas pessoas têm a mesma idade")
    }
}
compararIdade(15, 30)