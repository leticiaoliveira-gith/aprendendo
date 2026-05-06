const pedidos = [
    { id: 101, endereco: "Rua das Flores, 50", status: "entregue" },
    { id: 102, endereco: "Av. Central, 1200", status: "em preparo" },
    { id: 103, endereco: "Rua 15 de Novembro, 88", status: "em preparo" },
    { id: 104, endereco: "Rua Mariz e Barros, 10", status: "cancelado" }
];

function listarParaEntregador(lista) {
    return lista
        .filter(p => p.status === "em preparo")
        .map(p => `Pedido #${p.id}: Enviar para ${p.endereco}`);
}

console.log("Fila de Entrega:");
console.log(listarParaEntregador(pedidos));
