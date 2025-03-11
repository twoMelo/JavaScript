// Exercicio 1 
function aparece() {
    let sumir = document.getElementById("sumir");
    if (sumir.style.display == "none") {
        sumir.style.display = "block";
    } else {
        sumir.style.display = "none";
    }
}

// Exercicio 2 
function TemaEscuro() {
    let body = document.body;
    let texto = document.getElementById("textoTema");
    body.style.backgroundColor = "black";
    texto.style.color = "white";
}

// Exercicio 3 
function completarTexto() {
    document.getElementById("texto").innerText = "Meu nome é Melo, tenho 16 anos, moro em Suzano, estudo no Sesi e faço o curso de T.I.";
}

// Exercicio 4 
let cores = ["green", "yellow", "blue"];
let indiceCor = 0;
function trocarCor() {
    let brasilTexto = document.getElementById("brasil");
    brasilTexto.style.color = cores[indiceCor];
    indiceCor = (indiceCor + 1) % cores.length;
}

// Exercicio 5 
function naoClicar() {
    alert("Pare de clicar no botão!");
}

// Exercicio 6 
document.getElementById("porta1").addEventListener("click", function () {
    alert("Você ganhou um carro!");
    document.getElementById("imagemPremio").src = "carro.png";
    document.getElementById("imagemPremio").style.display = "block";
});

document.getElementById("porta2").addEventListener("click", function () {
    alert("Você não ganhou nada!");
    document.getElementById("imagemPremio").src = "caixa.jpg";
    document.getElementById("imagemPremio").style.display = "block";
});

document.getElementById("porta3").addEventListener("click", function () {
    alert("Parabéns, você encontrou o tesouro!");
    document.getElementById("imagemPremio").src = "tesouro.png";
    document.getElementById("imagemPremio").style.display = "block";
});

// Exercicio 7 
function redimensionarImagem() {
    let imagem = document.getElementById("imagemRedimensionar")
    let tamanhoAleatorio = Math.floor(Math.random() * (300 - 20 + 1)) + 20
    imagem.style.width = tamanhoAleatorio + "px"
    imagem.style.height = tamanhoAleatorio + "px"
}

// Exercicio 8 
let clickCount = 0;
function mudarSemaforo() {
    clickCount++;
    if (clickCount === 1) {
        document.getElementById("sem1").style.backgroundColor = "red";
        alert("PARE");
        resetarSemaforo();
    } else if (clickCount === 2) {
        document.getElementById("sem2").style.backgroundColor = "yellow";
        alert("ATENÇÃO!");
        resetarSemaforo();
    } else if (clickCount === 3) {
        document.getElementById("sem3").style.backgroundColor = "green";
        alert("PODE IR!");
        clickCount = 0;
    }
}

function resetarSemaforo() {
    setTimeout(function () {
        document.getElementById("sem1").style.backgroundColor = "black";
        document.getElementById("sem2").style.backgroundColor = "black";
        document.getElementById("sem3").style.backgroundColor = "black";
    }, 1000);
}

// Exercicio 9 