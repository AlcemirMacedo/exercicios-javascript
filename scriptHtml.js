function entrar(){
    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome');

    if(texto == '' || texto == null){
        alert('Você deve digitar seu nome: ');
        area.innerHTML = 'Tente novamente: ' ;
    }else{
        area.innerHTML = 'Seja bem vindo ' + texto;
    }
}