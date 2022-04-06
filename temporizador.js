
function acao(){
    document.write("Executando...<br>")
}

var temporizador =  setInterval(acao, 1000)

function parar(){
    clearInterval(temporizador)
}




