function cadastroPessoa(info){
    let novosDados = {
        ...info,
        cargo: 'Programador',
        status: 1,
        codigo: '165235'
    }
}
console.log(cadastroPessoa({nome: 'Alcemir', sobrenome:'Macedo'}))