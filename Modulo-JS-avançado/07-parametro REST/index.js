// function incentivarQuester(mensagem, ...nomesQuesters){
//     nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
// }

// incentivarQuester("Parabens por ter chegado até aqui,", 'Bruno', 'Rodrigo', 'Lucas')

let incentivarQuester = (mensagem, ...nomesQuesters) =>
nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))


incentivarQuester("Parabens por ter chegado até aqui,", 'Bruno', 'Rodrigo', 'Lucas')