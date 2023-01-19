// const calcularAnoNasc = function (idade, mesNasc, imprimir){
//     const mesAtual = 5
//     let anoNasc = 2022 - idade
//     if(mesNasc > mesAtual) anoNasc --
//     imprimir(anoNasc)
// }

// let imprimirAnoNasc = anoNasc => {
//     console.log('Seu ano de nascimento é: ' + anoNasc)
// }

// calcularAnoNasc(23, 9, imprimirAnoNasc)

///////////////////////////////////////////////////////////

function multuplicar(multiplicador){
    return function(num){
        return num * multiplicador
    }
}

let dobrar = multuplicar(2)
let triplicar = multuplicar(3)
let quadruplicar = multuplicar(4)

console.log(dobrar(5))
console.log(triplicar(5))
console.log(quadruplicar(5))
