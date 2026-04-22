function calcularDescontoVIP(...precos) {
    // 1. Filtra os maiores que 100
    const caros = precos.filter(p => p > 100);

    // 2. Aplica o desconto de 10% (multiplicar por 0.9)
    const comDesconto = caros.map(p => p * 0.9);

    return comDesconto;
}

console.log(calcularDescontoVIP(50, 150, 200, 80)); 
// Resultado esperado: 
