// let videoGame = {
// 	nome: 'xbox',
// 	valor: 3000,
// 	jogos: [
//         { nome: 'Call of duty' }, 
//         { nome: 'Farcry' }
//     ]
// };

// let jogo3 = {
// 	nome: 'Fallout',
// };

// videoGame.jogos.push(jogo3);

// console.log(videoGame);

let cliente = {
    nome: 'Bruno',
    ultimoPedido: {
        produto: 'xbox',
        valor: 3000,
        jogos: [
            { nome: 'farcry'},
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[0].nome)
