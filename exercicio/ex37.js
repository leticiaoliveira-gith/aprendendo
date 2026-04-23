function diagnosticarRede(ping, perdaPacotes) {
    // 1. Regra Crítica: Sempre verificamos o pior cenário primeiro
    if (perdaPacotes > 5) {
        return "Cabo desconectado ou sinal muito fraco";
    } 
    
    // 2. Cenário Ideal
    if (ping <= 30 && perdaPacotes === 0) {
        return "Conexão Excelente";
    } 
    
    // 3. Cenário Instável (Ping alto E perda considerável)
    if (ping > 80 && perdaPacotes >= 2 && perdaPacotes <= 5) {
        return "Conexão Instável";
    }
    
    // 4. Cenário Bom (O que restou que não é excelente nem instável)
    if (ping <= 80 || perdaPacotes < 2) {
        return "Conexão Boa";
    }

    return "Status desconhecido"; // Segurança (Fallback)
}

// Rodando seus testes:
console.log(diagnosticarRede(25, 0));   // Saída: Conexão Excelente
console.log(diagnosticarRede(85, 3));   // Saída: Conexão Instável
console.log(diagnosticarRede(50, 10));  // Saída: Cabo desconectado ou sinal muito fraco