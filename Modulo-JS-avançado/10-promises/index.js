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

let chaleiraNoFogao = true
let fogaoLigado = true

fervendoAgua(chaleiraNoFogao, fogaoLigado)