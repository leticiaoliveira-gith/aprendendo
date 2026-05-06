function verificarValidade(dataValidadeStr) {
    const hoje = new Date(); // Pega a data e hora exata de agora
    const dataValidade = new Date(dataValidadeStr); // Converte a string em data

    if (dataValidade > hoje) {
        return "✅ Cupom válido! Pode usar.";
    } else {
        return "❌ Ops, este cupom já expirou.";
    }
}

// Testes:
console.log(verificarValidade("2026-12-31")); // Uma data no futuro
console.log(verificarValidade("2023-01-01")); // Uma data no passado