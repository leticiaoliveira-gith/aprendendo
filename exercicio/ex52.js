const tarefas = [
    { titulo: "Estudar React", concluida: true },
    { titulo: "Fazer exercícios de JS", concluida: false },
    { titulo: "Academia", concluida: false },
    { titulo: "Limpar o quarto", concluida: true },
    { titulo: "Pagar contas", concluida: true }
];

function resumoTarefas(lista) {
    const prontas = lista.filter(t => t.concluida).length;
    const pendentes = lista.filter(t => !t.concluida).length;

    return {
        total: lista.length,
        concluidas: prontas,
        faltam: pendentes
    };
}

console.log(resumoTarefas(tarefas));
// Resultado esperado: { total: 5, concluidas: 3, faltam: 2 }