const alunos = [
    { nome: "Leticia", nota: 9.5 },
    { nome: "Rodrigo", nota: 5.0 },
    { nome: "Ana", nota: 8.2 },
    { nome: "Beto", nota: 6.8 }
];

function gerarRelatorio(lista) {
    return lista
        .filter(aluno => aluno.nota >= 7)
        .map(aluno => `Aluno ${aluno.nome} aprovado com ${aluno.nota}`);
}

console.log(gerarRelatorio(alunos));
// Resultado esperado: ["Aluno Leticia aprovado com 9.5", "Aluno Ana aprovado com 8.2"]