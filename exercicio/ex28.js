// 1. Nossa "Base de Dados" (Array de Objetos)
const carrinho = [
    { nome: 'Teclado Mecânico', preco: 250, categoria: 'Periféricos' },
    { nome: 'Mouse Gamer', preco: 150, categoria: 'Periféricos' },
    { nome: 'Monitor 144hz', preco: 1200, categoria: 'Hardware' },
    { nome: 'Cabo HDMI', preco: 30, categoria: 'Acessórios' },
    { nome: 'Headset RGB', preco: 400, categoria: 'Periféricos' }
];

// 2. Filtrar apenas produtos da categoria 'Periféricos'
const perifericos = carrinho.filter(item => item.categoria === 'Periféricos');

// 3. Calcular o valor total do carrinho usando .reduce()
const totalBruto = carrinho.reduce((acumulador, item) => acumulador + item.preco, 0);

// 4. Função para aplicar desconto de 10% se o total for maior que 1000
function aplicarDesconto(valor) {
    if (valor > 1000) {
        return valor * 0.9; // Retorna 90% do valor
    }
    return valor;
}

const totalComDesconto = aplicarDesconto(totalBruto);

// 5. Exibir os resultados formatados
console.log("--- RESUMO DA COMPRA ---");
console.log(`Itens na categoria Periféricos:`, perifericos.map(p => p.nome).join(', '));
console.log(`Total Bruto: R$ ${totalBruto.toFixed(2)}`);
console.log(`Total com Desconto (se aplicável): R$ ${totalComDesconto.toFixed(2)}`);

// 6. Verificação rápida: Algum item custa mais de R$ 1000?
const temItemCaro = carrinho.some(item => item.preco > 1000);
console.log(`Possui item de luxo? ${temItemCaro ? "Sim" : "Não"}`);