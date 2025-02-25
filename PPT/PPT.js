// Jogo pedra, papel, tesoura
// Variáveis para armazenar os pontos do jogador e do PC

let placarJogador = 0;
let placarPC = 0;

// Variável para armazenar a quantidade de rodadas
let rodadas = Number(prompt("Digite a quantidade de rodadas:"));

// Laço de repetição que fará as rodadas
for (let i = 0; i < rodadas; i++) {
    const escolhaJogador = prompt("Escolha pedra, papel ou tesoura:");
    // Solicita que o usuário informe qual ele quer 

    const escolhaPC = ["pedra", "papel", "tesoura"][Math.floor(Math.random() * 3)];
    // Gera uma escolha aleatória para o computador
    // Criamos um array com as opções e usamos o random para escolher uma de forma aleatória

    alert(`Você escolheu: ${escolhaJogador}`);
    alert(`O computador escolheu: ${escolhaPC}`);
    // Mostrando qual foi a nossa escolha e qual foi a escolha do computador

    // Compara se a nossa escolha foi a do computador
    if (escolhaJogador === escolhaPC) {
        alert("Empate");
    } else if (escolhaJogador === "pedra" && escolhaPC === "tesoura") { 
        // Criamos a primeira verificação
        alert("Você venceu");
        placarJogador++;
    } else if (escolhaJogador === "tesoura" && escolhaPC === "papel") { 
        // Criamos a segunda verificação
        alert("Você venceu");
        placarJogador++;
    } else if (escolhaJogador === "papel" && escolhaPC === "pedra") { 
        // Criamos a terceira verificação
        alert("Você venceu");
        placarJogador++;
    } else {
        alert("Você perdeu");
        placarPC++;
    }
    // Mostramos o placar atual
    console.log(`Placar: Jogador: ${placarJogador}`);
    console.log(`Placar: Computador: ${placarPC}`);
}

// Mostramos o placar final
alert(`Fim de jogo! Placar final: Jogador: ${placarJogador} x Computador: ${placarPC}`);