async function inserirPost(){
    document.getElementById("postagens").innerHTML = "Carregando..."

    let req = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify({
            title: 'Testanto Título',
            body: 'Escrevendo no corpo',
            userId: 4
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let json = await req.json()

    console.log(json)
}