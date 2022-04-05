// função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(3, 6)
imprimirSoma(3)

//função com retorno

function soma(a, b = 0){
    return a + b
}
console.log(soma(5, 3))
console.log(soma(2))