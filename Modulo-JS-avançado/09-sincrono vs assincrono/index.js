function ferverAgua(){
    console.log('Colocando agua pra ferver')

    setTimeout(() => {
        console.log('agua ferveu')
        passandoCafé()
    }, 4000);
}

function prepararPraPassarOCafe(){
    console.log('Pegar o pó de café')
    console.log('Pegar o filtro de café')
    console.log('Colocar o café no filtro')
    console.log('Colocar o filtro na xicara')
}

function passandoCafé(){
    console.log('passando o café')
}

ferverAgua()
prepararPraPassarOCafe()