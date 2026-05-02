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