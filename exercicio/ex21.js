function checarPerigo(ladoA, humanoPresente) {
    let lobo = ladoA.includes("lobo");
    let ovelha = ladoA.includes("ovelha");
    let alface = ladoA.includes("alface");

    if (!humanoPresente) {
        if (lobo && ovelha) {
            return "ERRO: O lobo jantou a ovelha!";
        }
        if (ovelha && alface) {
            return "ERRO: A ovelha jantou a alface!";
        }
    }
    return "Tudo seguro por enquanto...";
}

// Teste: Lobo e Ovelha sozinhos no Lado A
console.log(checarPerigo(["ovelha", "alface"], false));
