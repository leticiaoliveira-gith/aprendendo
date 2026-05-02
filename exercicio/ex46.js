const precoEmReais = 59.90;
const taxaCambio = 5.20; // Exemplo: 1 dólar = 5.20 reais

const precoEmDolar = precoEmReais / taxaCambio;

console.log("--- Relatório da Pizzaria ---");
console.log(`Preço da Pizza: R$ ${precoEmReais.toFixed(2)}`);
console.log(`Preço em Dólares: US$ ${precoEmDolar.toFixed(2)}`);

if (precoEmDolar > 10) {
    console.log("Status: Pizza cara para padrões internacionais!");
} else {
    console.log("Status: Pizza com preço competitivo.");
}
// Exercício: Simulador de Carrinho de Pizzas
const carrinho = [
    { nome: "Calabresa", preco: 45.00, quantidade: 2 },
    { nome: "Mussarela", preco: 40.00, quantidade: 1 },
    { nome: "Frango com Catupiry", preco: 55.00, quantidade: 1 }
];

let totalGeral = 0;

console.log("--- Detalhes do Pedido ---");

carrinho.forEach(item => {
    const subtotal = item.preco * item.quantidade;
    totalGeral += subtotal;
    console.log(`${item.quantidade}x Pizza de ${item.nome} - Subtotal: R$ ${subtotal.toFixed(2)}`);
});

console.log("--------------------------");
console.log(`TOTAL DO PEDIDO: R$ ${totalGeral.toFixed(2)}`);

if (totalGeral > 100) {
    console.log("Parabéns! Você ganhou um refrigerante grátis pela compra acima de R$ 100!");
}