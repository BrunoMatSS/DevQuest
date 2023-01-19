const pessoas = ['Bruno', 'Rodrigo', 'Gabriel']
console.log(...pessoas)

//CONCATENAR DOIS ARRAYS//

let pessoas1 = ['Bruno', 'Rodrigo', 'Gabriel']
let pessoas2 = ['Tteu', 'Julia', 'Lucas']

pessoas1 = [...pessoas1, ...pessoas2 ]
console.log(pessoas1)

//CLONAR OBJETOS//

const pessoa1 = {nome: 'Bruno', idade: 23, sobrenome: 'Silva'}

const objetoClonado = {...pessoa1}
console.log(objetoClonado)
console.log(pessoa1)