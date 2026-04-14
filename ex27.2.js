// --- SUAS FUNÇÕES ORIGINAIS (A Lógica) ---
function podeAssistir(idade) {
    return idade >= 16;
}

function calcularPreco(tipo, estudante) {
    let precoBase = tipo.toLowerCase() === "vip" ? 80 : 30;
    return estudante ? precoBase / 2 : precoBase;
}

// --- NOVA FUNÇÃO: INTERAÇÃO COM O SITE ---
function adicionarConvidado() {
    // 1. Pegar os valores dos campos do HTML
    const nome = document.getElementById("inputNome").value;
    const idade = parseInt(document.getElementById("inputIdade").value);
    const tipo = document.getElementById("selectIngresso").value;
    const estudante = document.getElementById("checkEstudante").checked;
    const listaHTML = document.getElementById("listaRelatorio");

    // 2. Usar a sua lógica para processar
    const autorizado = podeAssistir(idade);
    const preco = calcularPreco(tipo, estudante);

    // 3. Criar o elemento visual (um item de lista <li>)
    const novoItem = document.createElement("li");

    if (autorizado) {
        novoItem.textContent = `${nome} pagou R$ ${preco} e entrou no cinema.`;
        novoItem.style.color = "green";
    } else {
        novoItem.textContent = `${nome} (Idade: ${idade}) barrado por idade.`;
        novoItem.style.color = "red";
    }

    // 4. Adicionar na tela
    listaHTML.appendChild(novoItem);

    // Limpar o campo de nome para o próximo
    document.getElementById("inputNome").value = "";
}