// Definimos o estado atual do semáforo
let estadoSemaforo = "amarelo"; 

function conferirSemaforo(cor) {
    switch (cor.toLowerCase()) {
        case "verde":
            console.log("🟢 Pode passar! O caminho está livre.");
            break;

        case "amarelo":
            console.log("🟡 Atenção! Diminua a velocidade.");
            break;

        case "vermelho":
            console.log("🔴 Pare! Não ultrapasse.");
            break;

        default:
            console.log("⚠️ Cor inválida. O semáforo pode estar quebrado.");
            break;
    }
}

// Testando o código
conferirSemaforo(estadoSemaforo);
