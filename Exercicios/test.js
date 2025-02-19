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