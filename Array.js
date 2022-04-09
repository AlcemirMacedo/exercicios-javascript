const valores = [7.7, 8.9, 8.5]
console.log(valores[0], valores[3])

valores[10] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[1]
console.log(valores)

// desconstruindo objetos

let nomes = ['Alcemir', 'Alcinete', 'André'];
let {0:brother1, 1:brother2} = nomes

