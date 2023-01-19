// console.log(this)
'use strict'

// console.log(window)
// console.log(window === this)

// this.name = 'Bruno'

// function saudar(){
//     console.log('this no contexto da funcao', this)
//     console.log('ola, '+ this.name)

// }

// saudar()

// let usuario = {
//     nome: 'Bruno',
//     saudar: function(){
//         console.log('this do metodo', this)

//         console.log('this.nome do metodo', this.nome)
//     }
// }

// usuario.saudar()

let comida = {
    nome: 'Brocolis',
    temperatura: 0,
    cozinhar: function(temperaturaDeCozimento) {
        console.log('this no contexto do objeto comida', this)
        this.temperatura = temperaturaDeCozimento
    }
}

console.log(comida)
comida.cozinhar(100)
console.log(comida)