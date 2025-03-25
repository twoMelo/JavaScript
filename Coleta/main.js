//main.js

//Funções Matemáticas
let num = 4.7

//Arredondar numeros
console.log(Math.round(num)) // Inteiro mais próximo
console.log(Math.floor(num)) // Arrerda para baixo
console.log(Math.ceil(num)) // Arredonda para cima
// Numero aleatório
console.log(Math.random()) // Numero aleatório entre 0 e 1
console.log(Math.random() * 10) // Numero aleatório entre 0 e 10

// Funções de String
let texto = "Eu amo javaScript"
// Manipular String
console.log(texto.toUpperCase()) // Deixa tudo em maiúsculo
console.log(texto.toLowerCase()) // Deixa tudo em minúsculo
console.log(texto.trim()) // Remove espaços antes e depois do texto
// Localizar texto
console.log(texto.charAt(5)) //Mostrar a letra que está nessa posição
console.log(texto.includes("javaScript")) // Verificar se tem essa palavra
// Trocar textos
console.log(texto.replace("amo","adoro"))

// Funções Numéricas
let numero = "42.85"
console.log(parseInt(numero)) // converte String para número inteiro
console.log(parseFloat(numero)) // converte String para número decimal
console.log(Number(numero).toFixed(1)) // Define quantas casas decimais vai mostrar
console.log(isNaN("abc"))
console.log(isNaN(123))