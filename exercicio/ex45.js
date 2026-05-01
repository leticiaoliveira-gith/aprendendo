function processarBrinde(...precos) {
    // 1. Checar se tem algum item de luxo (> 500)
    const temLuxo = precos.some(p => p > 500);

    if (temLuxo) {
        console.log("Ganhou brinde!");
        // 2. Retorne um NOVO array com os preços + o brinde (0)
        return [...precos, 0];
    } else {
        return precos;
    }
}

// Teste 1: Com produto caro
console.log(processarBrinde(100, 600, 50)); 
// Resultado esperado: [100, 600, 50, 0]

// Teste 2: Sem produto caro
console.log(processarBrinde(100, 200, 50)); 
// Resultado esperado: [100, 200, 50]