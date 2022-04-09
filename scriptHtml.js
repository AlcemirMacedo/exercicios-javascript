entrar => {
    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome');

    if(texto == '' || texto == null){
        alert('Você deve digitar seu nome: ');
        area.innerHTML = 'Tente novamente: ' ;
    }else{
        area.innerHTML = 'Seja bem vindo ' + texto;
    }
}

//Spread operator
function cadastroPessoa(info){
    let novosDados = {
        ...info,
        cargo: 'Programador',
        status: 1,
        codigo: '165235'
    }
    return novosDados;
}
console.log(cadastroPessoa({nome: 'Alcemir', sobrenome:'Macedo'}))


// Rest operator
function cadastrar(usuarios, ...novosUsuarios){
    let totalusuarios = [
        ...usuarios,
        ...novosUsuarios
    ]
    return console.log(totalusuarios)
}

let usuarios = ["Maria", "Beatriz"];
let novosUsuarios = cadastrar(usuarios, "Alcemir", "Macedo");

//Operação em Array
const lista = [1,2,3,4,5,6];

const novaLista = lista.map(function(item, index){
    return item + index;
})

console.log(novaLista);

// Reduce

const soma = lista.reduce((total, proximo) => total + proximo);

console.log(soma)