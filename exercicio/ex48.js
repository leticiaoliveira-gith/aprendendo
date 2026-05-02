// Exercício: Filtro de Cardápio
const cardapio = [
    { nome: "Calabresa", categoria: "Salgada", vegetariana: false },
    { nome: "Quatro Queijos", categoria: "Salgada", vegetariana: true },
    { nome: "Chocolate com Morango", categoria: "Doce", vegetariana: true },
    { nome: "Marguerita", categoria: "Salgada", vegetariana: true },
    { nome: "Portuguesa", categoria: "Salgada", vegetariana: false }
];

console.log("--- Opções Vegetarianas ---");
const vegetarianas = cardapio.filter(pizza => pizza.vegetariana);
vegetarianas.forEach(p => console.log(`🌱 ${p.nome}`));

console.log("\n--- Pizzas Doces ---");
const doces = cardapio.filter(pizza => pizza.categoria === "Doce");
doces.forEach(p => console.log(`🍫 ${p.nome}`));