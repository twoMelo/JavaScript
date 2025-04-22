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
    constructor(nome, especie, idade, som) {
        this.nome = nome
        this.especie = especie
        this.idade = idade
        this.som = som
    }

    apresentar() {
        console.log(` ${this.nome} ela é um ${this.especie} tem ${this.idade} anos e faz ${this.som} `)
    }
}

    const cachorro = new Pet("suzi", "golden", 5, "Au Au")
     cachorro.apresentar()

     class Pet2 {
        constructor(nome, especie, idade, som) {
            this.nome = nome
            this.especie = especie
            this.idade = idade
            this.som = som
        }
    
        apresentar() {
            console.log(` ${this.nome} ela é ${this.especie} tem ${this.idade} anos e faz ${this.som} `)
        }
    }
    
        const gato = new Pet2("lua", "persa", 2, "miau")
         gato.apresentar()

// Exercicio 4

class Filme {
    constructor(titulo, genero, duracao) {
        this.titulo = titulo;
        this.genero = genero;
        this.duracao = duracao;
    }

    exibirInfo() {
        console.log(`Você está assistindo "${this.titulo}", um filme de ${this.genero} que dura ${this.duracao} minutos.`)
    }
}
const filme = new Filme("Vingadores Guerra Infinita", "Ação, Aventura", 192);
filme.assistir()
filme.exibirInfo()


// Exercicio 5

class musica {
    constructor(nome, artista, tempo) {
        this.titulo = nome
        this.autor = artista
        this.paginas = tempo
    }

    tocar() {
        console.log(`Tocando ${this.titulo} de ${this.autor}`)
    }
}
const musica = criarMusica("Jogado Pelo Mundão", "Mc Negao Original", 2.13);
musica.tocar()