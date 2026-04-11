let  pedido = "hamburgue"

function fazerPedido(pedir){
    switch (pedir.toLowerCase()){
        case "coxinha" :
            console.log (`Coxinha 5 R$`)
            break
        case "batata" :
            console.log(`Batata frita 10 R$`)
            break
        case "pastel" :
            console.log(`Pastel 5 R$`)
            break
        default :
            console.log(`Não tem cardapio`)
            break
    }
}
fazerPedido(pedido)