const calcularValorPedido = pedido => {
    const valorProdutos = pedido.itens.filter(item => !item.entrega).reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0)

    const entrega = pedido.itens.filter(item => item.entrega)

    if(pedido.estado === 'RS' || pedido.estado === 'SC') {
        const acrescimoEntrega = entrega[0].valor*0.2
        entrega[0].valor += acrescimoEntrega
    }

    return (valorProdutos > 1300) ? valorProdutos : valorProdutos + entrega[0].valor
    
    // if(valorProdutos > 1300){
    //     return valorProdutos
    // }else{
    //     return valorProdutos + entrega[0].valor
    // }
}

module.exports = calcularValorPedido

