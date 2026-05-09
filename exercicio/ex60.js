//validador simples
function validarCadastro(usuario) {
    // 1. Verifica se o nome está vazio ou tem apenas espaços
    if (usuario.nome.trim() === "") {
        console.log("Erro: O nome é obrigatório.");
        return false;
    }

    // 2. Verifica se a senha tem pelo menos 6 caracteres
    if (usuario.senha.length < 6) {
        console.log("Erro: A senha deve ter no mínimo 6 dígitos.");
        return false;
    }

    return true;
}

// Testes:
console.log(validarCadastro({ nome: "Leticia", senha: "123" }));    // false (senha curta)
console.log(validarCadastro({ nome: "  ", senha: "1234567" }));   // false (nome vazio)
console.log(validarCadastro({ nome: "Leticia", senha: "strong123" })); // true