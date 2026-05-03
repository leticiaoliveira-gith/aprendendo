const tarefas = [
    { titulo: "Estudar React", concluida: true },
    { titulo: "Fazer exercícios de JS", concluida: false },
    { titulo: "Academia", concluida: false },
    { titulo: "Limpar o quarto", concluida: true }
];

function listarPendencias(lista) {
    return lista
        .filter(t => t.concluida === false) // Ou apenas !t.concluida
        .map(t => `Pendente: ${t.titulo}`);
}

console.log(listarPendencias(tarefas));
