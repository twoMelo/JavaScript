// Exercicio 1

class Livro {
    constructor(titulo, autor, paginas) {

this.titulo = titulo
this.autor = autor
this.paginas = paginas
}
mostrarDetalhes () {
    console.log(`Titulo: ${this.titulo}, Autor: ${this.autor}, Paginas: ${this.paginas}`)
}
}

const livro1 = new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien', 1178)
livro1.mostrarDetalhes()


// Exercicio 2

class ContaBancaria {
    constructor (titular,saldo) {
        this.titular = titular
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor
        console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`)
    }
    sacar(valor) {
        if (valor > this.saldo) {
            console.log('Saldo insuficiente')
        } else {
            this.saldo -= valor
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$  ${this.saldo}`)
        }
    }
    verSaldo() {
        console.log(`Saldo atual: R$${this.saldo}`)
    }
}

const conta1 = new ContaBancaria('Ana')
conta1.verSaldo()
conta1.depositar(500)
conta1.sacar(200)
conta1.verSaldo()
conta1.sacar(1000)

// Exercicio 3

class Pet {
    constructor (nome, especie, idade) {
        this.nome = nome
        this.especie = especie
        this.idade = idade
    }
    falar () {
        
    }
}