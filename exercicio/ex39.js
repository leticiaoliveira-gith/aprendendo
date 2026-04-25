function finalizarCompra(...precos) {
    const total = precos
        .filter(p => p > 0)             // Tira os brindes
        .map(p => p + 5)                // Adiciona taxa de envio por item
        .reduce((acc, curr) => acc + curr, 0); // Soma tudo

    return `O valor total da sua compra é R$ ${total}`;
}

console.log(finalizarCompra(10, 0, 20, 50)); 
console.log(finalizarCompra(100, 200));