let fervendoAgua = (chaleiraNoFogao, fogaoLigado) => {
    return new Promise((resolve, reject)=>{
        if(chaleiraNoFogao && fogaoLigado){
            console.log('Fervendo agua')
            resolve()
        }else{
            console.log('ligue o fogao e/ou coloque chjaleira no fogao')
            reject()
        }
    })
}

let passarCafe = (aguaFervida) => {
    return new Promise((resolve)=>{
        console.log('passando café')
        resolve(true)
    })
} 

let tomarCafe = (cafePassado) => {
    return new Promise((resolve)=>{
        console.log('Tomando café')
        resolve(true)
    })
} 

let lavarXicara = (cafeTomado) => {
    return new Promise((resolve)=>{
        console.log('lavando xícara')
        resolve(true)
    })
} 

let chaleiraNoFogao = true
let fogaoLigado = true



// fervendoAgua(chaleiraNoFogao, fogaoLigado)
//     .then(()=>{
//         return passarCafe()
//     })
//     .then(()=>{
//         return tomarCafe()
//     })
//     .then(()=>{
//         return lavarXicara()
//     })
//     .then(()=>{
//         console.log('bora trabalhar')
//     })

async function iniciarProcessoDoCafe(){
    const aguaFervida = await fervendoAgua(chaleiraNoFogao, fogaoLigado)
    const cafePassado = await passarCafe(aguaFervida)
    const cafeTomado = await tomarCafe(cafePassado)
    const xicaraLavada = await lavarXicara(cafeTomado)
    if(xicaraLavada) console.log('bora trabalhar')
}

iniciarProcessoDoCafe()