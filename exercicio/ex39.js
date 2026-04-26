function finalizarCompra(...precos) {
    const total = precos
        .filter(p => p > 0)             // Tira os brindes
        .map(p => p + 5)                // Adiciona taxa de envio por item
        .reduce((acc, curr) => acc + curr, 0); // Soma tudo

    return `O valor total da sua compra é R$ ${total}`;
}

console.log(finalizarCompra(10, 0, 20, 50)); 
console.log(finalizarCompra(100, 200));

const produtos = [
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 80 },
    { nome: "Monitor", preco: 900 },
    { nome: "Fone", preco: 50 },
    { nome: "carregador", preco: 50 }
];

function listarOfertas(lista) {
    return lista
        .filter(p => p.preco < 200)       // Passo 1: Filtra os baratos
        .map(p => p.nome.toUpperCase());  // Passo 2: Pega só o nome em MAIÚSCULO
}

console.log("Produtos em oferta:", listarOfertas(produtos));
// Resultado esperado: ["TECLADO", "MOUSE", "FONE"]