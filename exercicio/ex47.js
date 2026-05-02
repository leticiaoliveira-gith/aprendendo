function aplicarDesconto(valorPedido, cupom) {
    const cuponsValidos = {
        "PIZZA10": 0.10, // 10% de desconto
        "PIZZA20": 0.20, // 20% de desconto
        "ESTUDANTE": 0.50 // 50% de desconto (O sonho!)
    };

    // Converte para maiúsculo para evitar erro se o usuário digitar "pizza10"
    const cupomFormatado = cupom.toUpperCase();

    if (cuponsValidos[cupomFormatado]) {
        const desconto = cuponsValidos[cupomFormatado];
        const valorFinal = valorPedido * (1 - desconto);
        console.log(`✅ Cupom ${cupomFormatado} aplicado!`);
        console.log(`Valor com desconto: R$ ${valorFinal.toFixed(2)}`);
    } else {
        console.log(`❌ Cupom "${cupom}" é inválido ou expirou.`);
        console.log(`Valor original: R$ ${valorPedido.toFixed(2)}`);
    }
}

// Testando o sistema
console.log("--- Sistema de Checkout ---");
aplicarDesconto(100, "PIZZA10");
aplicarDesconto(80, "estudante");
aplicarDesconto(50, "PROMO_FAKE");