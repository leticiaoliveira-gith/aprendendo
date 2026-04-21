function contarVotos(lista) {
    const contagem = {}

    for (let nome of lista) {
        if (contagem[nome]) {
            // Se o nome já está no objeto, aumenta 1
            contagem[nome] = contagem[nome] + 1;
        } else {
            // Se o nome não está lá, começa com 1
            contagem[nome] = 1
        }
    }

    return contagem
}

const votos = ["Ana", "Beto", "Ana", "Carla", "Ana", "Beto"];
console.log(contarVotos(votos))