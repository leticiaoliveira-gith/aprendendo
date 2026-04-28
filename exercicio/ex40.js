const alunos = [
  { nome: "Ana", notas: [] },
  { nome: "Bruno", notas: [] },
  { nome: "Carla", notas: [] }
];

function analisarTurma(listaAlunos) {
  // Processa os dados de cada aluno
  const resultadosAlunos = listaAlunos.map(aluno => {
    const soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
    const media = Number((soma / aluno.notas.length).toFixed(2));
    
    return {
      nome: aluno.nome,
      media: media,
      status: media >= 7 ? "Aprovado" : "Reprovado"
    };
  });

  // Calcula a média geral da turma
  const somaDasMedias = resultadosAlunos.reduce((acc, aluno) => acc + aluno.media, 0);
  const mediaGeral = Number((somaDasMedias / resultadosAlunos.length).toFixed(2));

  return {
    desempenhoIndividual: resultadosAlunos,
    mediaGeralDaTurma: mediaGeral
  };
}

// Execução e Exibição
const relatório = analisarTurma(alunos);

console.log("--- Relatório de Desempenho ---");
console.log(relatório.desempenhoIndividual);
console.log(`Média Geral da Turma: ${relatório.mediaGeralDaTurma}`);