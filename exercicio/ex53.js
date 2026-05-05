const produtos = [
    { nome: "Monitor", preco: 900 },
    { nome: "Teclado", preco: 150 },
    { nome: "Mouse", preco: 80 },
    { nome: "Webcam", preco: 300 }
];

function organizarProdutos(lista) {
    // O sort altera o array original, então usamos o spread [...] para criar uma cópia antes!
    return [...lista].sort((a, b) => {
        if (a.nome < b.nome) return -1;
        if (a.nome > b.nome) return 1;
        return 0;
    });
}

console.log("Produtos Ordenados:", organizarProdutos(produtos));