let pessoas = [
    {nome: 'Bruno', idade: 23},
    {nome: 'Tteu', idade: 23},
    {nome: 'Gabriel', idade: 22}
]

// let nomeDasPessoas = []

// for(let i = 0; i < pessoas.length; i++){
//     nomeDasPessoas.push(pessoas[i].nome)
// }

let nomeDasPessoas = pessoas.map((pessoa)=> pessoa.nome)

console.log(nomeDasPessoas)