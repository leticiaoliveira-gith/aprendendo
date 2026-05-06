const contatos = [
    { nome: "Ana Silva", online: true },
    { nome: "Beto Oliveira", online: false },
    { nome: "Carla Souza", online: true },
    { nome: "Daniel Lima", online: true }
];

function filtrarOnline(lista) {
    return lista
        .filter(c => c.online) // Pega só quem é true
        .map(c => {
            // .split(" ") divide o nome nos espaços e [0] pega a primeira palavra
            const primeiroNome = c.nome.split(" ")[0];
            return `🟢 ${primeiroNome} está disponível`;
        });
}

console.log("Contatos Ativos:");
console.log(filtrarOnline(contatos));