const agendamentos = [
  { cliente: "Alice", dataISO: "2026-05-15" },
  { cliente: "Marcos", dataISO: "2026-05-20" },
  { cliente: "Leticia", dataISO: "2026-06-02" }
];

// O objetivo é criar um novo array que transforme os dados acima para:
// { cliente: "Alice", dataFormatada: "15/05/2026" }

const agendamentosFormatados = agendamentos.map(item => {
  const partes = item.dataISO.split("-"); // Divide a string onde tem o traço
  
  return {
    cliente: item.cliente,
    dataFormatada: `${partes}/${partes}/${partes}`
  };
});

console.log("--- Datas Convertidas ---");
console.table(agendamentosFormatados);