const perguntas = [
  {
    pergunta: "Qual é o valor de π (pi) aproximado até duas casas decimais?",
    opcoes: ["3,12", "3,14", "3,16", "3,18"],
    correta: 1
  },
  {
    pergunta: "Quanto é 7 × 8?",
    opcoes: ["54", "56", "58", "64"],
    correta: 1
  },
  {
    pergunta: "Qual é a raiz quadrada de 81?",
    opcoes: ["7", "8", "9", "10"],
    correta: 2
  },
  {
    pergunta: "Qual é o resultado da expressão: 2 + 3 × 4?",
    opcoes: ["14", "20", "24", "18"],
    correta: 0
  },
  {
    pergunta: "Um triângulo tem lados de 3 cm, 4 cm e 5 cm. Que tipo de triângulo é?",
    opcoes: ["Isósceles", "Equilátero", "Retângulo", "Escaleno"],
    correta: 2
  },
  {
    pergunta: "Qual é o valor de 2 elevado à 5ª potência?",
    opcoes: ["16", "32", "64", "128"],
    correta: 1
  },
  {
    pergunta: "O que representa o termo \"x\" em uma equação do 1º grau?",
    opcoes: ["A incógnita", "O resultado", "O coeficiente", "O expoente"],
    correta: 0
  },
  {
    pergunta: "Qual o próximo número da sequência: 2, 4, 8, 16, ...?",
    opcoes: ["18", "24", "32", "30"],
    correta: 2
  },
  {
    pergunta: "Quanto é 100 dividido por 4?",
    opcoes: ["20", "25", "30", "40"],
    correta: 1
  },
  {
    pergunta: "Qual fórmula usamos para calcular a área de um círculo?",
    opcoes: ["2πr", "πr²", "πd", "r²"],
    correta: 1
  }
];

let perguntaAtual = 0;
let pontuacao = 0;
let erros = 0;
let opcaoSelecionada = null;

const pergunta = document.getElementById("pergunta");
const opcoes = document.getElementById("opcoes");
const botaoProxima = document.getElementById("proxima");
const quiz = document.getElementById("quiz");
const pontuacaoFinal = document.getElementById("pontuacao");
const valorPontuacao = document.getElementById("valor-pontuacao");
const botaoReiniciar = document.getElementById("reiniciar");
const errosContador = document.getElementById("erros");
const acertos = document.getElementById("acertos");

function atualizarPlacar() {
  acertos.textContent = pontuacao;
  errosContador.textContent = erros;
}

function mostrarPergunta() {
  const perguntaAtualObj = perguntas[perguntaAtual];
  pergunta.textContent = perguntaAtualObj.pergunta;
  opcoes.textContent = "";
  perguntaAtualObj.opcoes.forEach((opcao, indice) => {
    const botao = document.createElement("button");
    botao.textContent = opcao;
    botao.classList.add("opcao");
    botao.addEventListener("click", () => selecionarOpcao(indice));
    opcoes.appendChild(botao);
  });
  opcaoSelecionada = null;
  botaoProxima.disabled = true;
}

function selecionarOpcao(indice) {
  opcaoSelecionada = indice;
  const botoes = document.querySelectorAll(".opcao");
  botoes.forEach((botao, i) => {
    botao.classList.toggle("selecionada", i === indice);
  });
  botaoProxima.disabled = false;
}

function mostrarPontuacao() {
  quiz.classList.add("esconder");
  pontuacaoFinal.classList.remove("esconder");
  valorPontuacao.textContent = pontuacao;
}

botaoProxima.addEventListener("click", () => {
  if (opcaoSelecionada === perguntas[perguntaAtual].correta) {
    pontuacao++;
  } else {
    erros++;
  }
  atualizarPlacar();
  perguntaAtual++;
  if (perguntaAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarPontuacao();
  }
});

botaoReiniciar.addEventListener("click", () => {
  perguntaAtual = 0;
  pontuacao = 0;
  erros = 0;

  quiz.classList.remove("esconder");
  pontuacaoFinal.classList.add("esconder");

  atualizarPlacar();
  mostrarPergunta();
});

mostrarPergunta();
