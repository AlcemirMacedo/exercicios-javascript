console.log(typeof console)
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Taco'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Executando')
    }
}

const obj2 = new Obj('Copo')
const obj3 = new Obj('Faca')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()