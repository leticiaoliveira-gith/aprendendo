const bancoDeDados = [
  { nome: "Leticia", email: "leticia@email.com", cpf: "123.456.789-00" },
  { nome: "Ricardo", email: "ricardo.dev@provedor.br", cpf: "987.654.321-11" }
];

const dadosProtegidos = bancoDeDados.map(usuario => {
  // Pega apenas os 3 primeiros dígitos do CPF
  const cpfMascarado = usuario.cpf.substring(0, 3) + ".***.***-**";
  
  // Pega a primeira parte do email antes do @
  const [usuarioEmail, dominio] = usuario.email.split("@");
  const emailMascarado = usuarioEmail + "****@" + dominio;

  return {
    nome: usuario.nome,
    contato: emailMascarado,
    documento: cpfMascarado
  };
});

console.log("--- Visualização de Segurança ---");
console.table(dadosProtegidos);