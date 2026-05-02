const usuarios = [
    { nome: "Ana Silva", idade: 25 },
    { nome: "Beto Oliveira", idade: 30 },
    { nome: "Carla Souza", idade: 22 }
];

function buscarUsuario(lista, termoBusca) {
    // 1. Converta o termo de busca para minúsculo para comparar melhor
    const termo = termoBusca.toLowerCase();

    // 2. Filtre a lista
    return lista.filter(u => {
        // Verifique se o nome do usuário (em minúsculo) inclui o termo
        return u.nome.toLowerCase().includes(termo);
    });
}

// Testes:
console.log(buscarUsuario(usuarios, "ANA"));   // Deve retornar o objeto da Ana
console.log(buscarUsuario(usuarios, "oliveira")); // Deve retornar o Beto
console.log(buscarUsuario(usuarios, "z"));      // Deve retornar uma lista vazia []