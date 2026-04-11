function checarPerigo(ladoA, humanoPresente) {
    let lobo = ladoA.includes("lobo");
    let ovelha = ladoA.includes("ovelha");
    let alfafa = ladoA.includes("alfafa");

    if (!humanoPresente) {
        if (lobo && ovelha) {
            return "ERRO: O lobo jantou a ovelha!";
        }
        if (ovelha && alfafa) {
            return "ERRO: A ovelha jantou a alfafa!";
        }
    }
    return "Tudo seguro por enquanto...";
}

// Teste: Lobo e Ovelha sozinhos no Lado A
console.log(checarPerigo(["ovelha", "alfafa"], false));
