var nome = '';

if(typeof localStorage.nome == 'undefined'){
    localStorage.nome = prompt("Digite seu nome");

}

nome = localStorage.nome
document.getElementById("nome").innerHTML = nome