async function loadPost(){
    document.getElementById('post').innerHTML = 'Carregando...'


    let req = await fetch('https://jsonplaceholder.typicode.com/comments');
    let json = await req.json();
    montarBlog(json)


    //sem o wait
    /*fetch('https://jsonplaceholder.typicode.com/comments')
        .then(function(resultado){
            return resultado.json();
        })
        .then(function(json){
            
        })
        .catch(function(error){
            console.log("Deu problema");
        })*/
}

function montarBlog(lista){
    let html = '';
    for(let i in lista){
        html +='<h2>'+lista[i].email+'</h2>';
        html +='<p>'+lista[i].body+'</p>';
        html +='<hr>';
    }
    document.getElementById('post').innerHTML = html;
}