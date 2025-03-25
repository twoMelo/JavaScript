let jogadorEscolha = 0
let jogadorPontos = 0
let computadorEscolha = 0
let computadorPontos = 0
let ganhador = -1

function jogar(escolha) {
    jogadorEscolha = escolha
    computadorEscolha = Math.floor(Math.random() * (3-1+1))+1
    // gera um número aleatório entre 1 e 3

    // 1 - Pedra    0 = Empate
    // 2 - Papel    1 = Jogador Ganhou
    // 3 - Tesoura  2 = Computador Ganhou

    if (jogadorEscolha == 1 && computadorEscolha == 1) {
        ganhador = 0;
    } else if (jogadorEscolha == 1 && computadorEscolha == 2) {
        ganhador = 2;
    } else if (jogadorEscolha == 1 && computadorEscolha == 3) {
        ganhador = 1;
    } else if (jogadorEscolha == 2 && computadorEscolha == 1) {
        ganhador = 1;
    } else if (jogadorEscolha == 2 && computadorEscolha == 2) {
        ganhador = 0;
    } else if (jogadorEscolha == 2 && computadorEscolha == 3) {
        ganhador = 2;
    } else if (jogadorEscolha == 3 && computadorEscolha == 1) {
        ganhador = 2;
    } else if (jogadorEscolha == 3 && computadorEscolha == 2) {
        ganhador = 1;
    } else if (jogadorEscolha == 3 && computadorEscolha == 3) {
        ganhador = 0;
    }
}    