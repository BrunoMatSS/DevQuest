const calcularValorPedido = require('./calcular-valor-pedido')

it('não deve cobrar valor de frete quando valor dos produtos for maior que 500', () => {
      
    ///ARRAGE
    const meuPedido = {
        itens:[
            {nome: 'Teclado', valor: 2000},
            {nome: 'Entrega', valor: 50, entrega: true}
        ]
    }

    //ACT
    const resultado = calcularValorPedido(meuPedido)

    // ASSERT
    expect(resultado).toBe(2000)
})

it('deve cobra valor de frete quando valor dos produtos for menor que 500', () => {
      
    ///ARRAGE
    const meuPedido = {
        itens:[
            {nome: 'mouse', valor: 450},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    //ACT
    const resultado = calcularValorPedido(meuPedido)

    // ASSERT
    expect(resultado).toBe(550)
})

it('deve cobra valor de frete quando valor dos produtos seja EXATAMENTE 500', () => {
      
    ///ARRAGE
    const meuPedido = {
        itens:[
            {nome: 'Monitor', valor: 1300},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    //ACT
    const resultado = calcularValorPedido(meuPedido)

    // ASSERT
    expect(resultado).toBe(1400)
})


it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja RS', () => {
    const pedidoNoEstadoRS = {
        estado: 'RS',
        itens: [
            {nome: 'gabinete', valor:500 },
            {nome: 'entrega', valor:100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(pedidoNoEstadoRS);
    
    expect(resultado).toBe(620);
})

it('deve adicionar um acrescimo de 20% no valor da entrega do pedido caso o estado seja SC', () => {
    const pedidoNoEstadoSC = {
        estado: 'SC',
        itens: [
            {nome: 'gabinete', valor:500 },
            {nome: 'entrega', valor:100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(pedidoNoEstadoSC);
    
    expect(resultado).toBe(620);
})