// Exercicio 1

function javaScript() {
    console.log("Eu gosto de JavaScript")
  }
  javaScript()
  
  // Exercicio 2
  
  function contarAte5() {
      for (let i = 1; i <= 5; i++) {
        console.log(i);
      }
  }
  contarAte5()
  
  // Exercicio 3
  
  let nome = prompt("Digite seu nome: ");
  function saudacao(nome) {
      console.log("Ola, " + nome + '! Seja bem vindo (a)!')
  }
  saudacao(nome)
  
  // Exercicio 4
  
  function multiplicar(a, b) {
      return a * b;
  }
  
  let num1 = prompt("Digite o primeiro número para MULTIPLICAR:")
  let num2 = prompt("Digite o segundo número para MULTIPLICAR :")
  console.log("Resultado:", multiplicar(num1, num2))
  
  // Exercicio 5
  
  function verificaIdade() {
      let idade = prompt("Digite sua idade:")
      if (idade >= 18) {
          console.log("MAIOR DE IDADE")
      } else {
          console.log("MENOR DE IDADE")
      }
  }
  
  verificaIdade()
  
  // Exercicio 6
  
let num3 = Number(prompt ("Digite um número"));
let num4 = Number (prompt ("Digite outro número"));
function somar(num3, num4){
    
    let resultado = num3 + num4 
    return resultado
}
console.log(somar(num3, num4))
  // Exercicio 7
  
  function calcularAreaRetangulo(largura, altura) {
      return largura * altura;
  }
  
  let largura = prompt("Digite a largura do retângulo:")
  let altura = prompt("Digite a altura do retângulo:")
  
  console.log("Área do retângulo:", calcularAreaRetangulo(largura, altura))
  
  // Exercicio 8
  
  function compararIdade(idade1, idade2) {
      if (idade1 > idade2) {
          console.log("A primeira pessoa é mais velha")
      } else if (idade2 > idade1) {
          console.log("A segunda pessoa é mais velha")
      } else {
          console.log("As duas pessoas têm a mesma idade")
      }
  }
  
  let idade1 = prompt("Digite a idade da primeira pessoa:")
  let idade2 = prompt("Digite a idade da segunda pessoa:")
  
  compararIdade(idade1, idade2)