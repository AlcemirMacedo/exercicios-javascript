let estaATivo = false
console.log(estaATivo)

estaATivo = true
console.log(estaATivo)

estaATivo = 1
console.log(!!estaATivo)
console.log(!estaATivo)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(estaATivo = true))


console.log('Os Falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(estaATivo = false))
console.log('pra finalizar...')