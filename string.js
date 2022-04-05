const escola = "Code3r"
console.log(escola.charAt(2)) // mostra o caractere dentro do índice
console.log(escola.charAt(5)) // se passar, mostra o último
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('d'))
console.log(escola.substring(1))
console.log(escola.substring(0, 3))
console.log(escola.replace(3, 'yyy'))

const up = texto => texto.toUpperCase()
console.log(`EI... ${up('cuidado')} `)