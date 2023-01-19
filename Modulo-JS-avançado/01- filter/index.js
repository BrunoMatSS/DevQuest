let pessoas = [
    {nome: 'Bruno', idade: 23},
    {nome: 'Tteu', idade: 23},
    {nome: 'Gabriel', idade: 22}
]

// let pessoasCom23Anos = []

// for(let i = 0; i < pessoas.length; i++){
//     if(pessoas[i].idade === 23){
//         pessoasCom23Anos.push(pessoas[i])
//     }
// }

let pessoasCom23Anos = pessoas.filter((pessoa) => pessoa.idade === 23)