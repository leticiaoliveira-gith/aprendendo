const inputProduto = document.querySelector(`#nomeProduto`);
const inputQuantidade =document.querySelector(`#qtdProduto`);
const botao = document.querySelector(`#btnAdicionar`);
const lista = document.querySelector(`#listaEstoque`)
//função para adicionar
function adicionarItem (){
    const Produto = inputProduto.value;
    const quantidade = Number(inputQuantidade.value);
// evitar nomes vazios ou quantidades invalidas
    if (Produto ===`` || isNaN(quantidade)){
        alert("Por favor, preencha os campos corretamente.");
        return;
    }
    //criando elemento "li" na memória do navegador
    const novoProduto = document.createElement(`li`);

    if (quantidade < 5){
        novoProduto.classList.add(`alerta-estoque`);
    }
    //inserinmos o texto usando templates literals
    novoProduto.innerHTML =`<span><strong>${Produto}</strong>-${quantidade} unidades</span> <button class = "btn-remover">Excluir</button>
    `;
    //evento de remoção
    novoProduto.querySelector(`.btn-remover`).onclick = function(){
        novoProduto.remove();
    };
    //colocando `li`dentro da `lu` no html
    lista.appendChild(novoProduto);
    //limpeza, resetar o fomulario para o proximo item
    inputProduto.value = ``;
    inputQuantidade.value = ``;
    inputProduto.focus();
}
botao.addEventListener(`click`, adicionarItem)