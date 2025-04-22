// POO -> script.js
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
}

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

const pessoa1 = new Pessoa('Murilo', 17)
aluno1.apresentar();
// aluno1.apresentar()

class Carro {
    constructor(marca, modelo, ano) {

this.marca = marca
this.modelo = modelo
this.ano = ano
}
exibirInfo () {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`)
}
}
const meuCarro = new Carro('Toyota', 'Corolla', 2020)
meuCarro.exibirInfo()
// meuCarro.exibirInfo()

class Aluno {
    constructor(nome, nota) {
        this.nome = nome
        this.nota = nota
    }
    verificarAprovacao() {
        if (this.nota >= 6) {
            console.log(`${this.nome} foi aprovado`)
        }else{
            console.log(`${this.nome} foi reprovado`)
        }
        }
}
const aluno = new Aluno('João', 7)
aluno.verificarAprovacao()
const aluno2 = new Aluno('Maria', 5)
aluno2.verificarAprovacao()