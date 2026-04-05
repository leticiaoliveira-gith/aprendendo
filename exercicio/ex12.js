const texto = "JavaScript é massa, JavaScript é funcional, JavaScript é onipresente";

const contagem = texto
  .toLowerCase()
  .match(/\b\w+\b/g)
  .reduce((acc, palavra) => {
    acc[palavra] = (acc[palavra] || 0) + 1;
    return acc;
  }, {});

console.table(contagem);