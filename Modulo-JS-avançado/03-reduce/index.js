let ordens = [
    {cliente: 'Bruno', tipo: 'compra', quantidade: 56, ativo: 'NFLX34'},
    {cliente: 'Tteu', tipo: 'compra', quantidade: 76, ativo: 'AAPL34'},
    {cliente: 'Gabriel', tipo: 'venda', quantidade: 21, ativo: 'GOGL34'}
]

// let quantidadeDeOrdens = 0

// for(let i = 0; i < ordens.length; i++){
//     quantidadeDeOrdens += ordens[i].quantidade
// }


let somadeDeOrdens = ordens.reduce(function(somaDeOrdens, ordem){
    return somaDeOrdens + ordem.quantidade
},0)


console.log(somadeDeOrdens)