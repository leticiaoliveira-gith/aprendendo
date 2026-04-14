function podeAssistir(idade){
    if (idade >= 16){
        return true;
    } else{
        return false;
    }
}
function calcularPreco(tipo, estudante){
    let precoBase = 0
    if (tipo === "comum"){
        precoBase = 30
    } else if(tipo === "vip"){
        precoBase = 80
    }
    if (estudante === true){
       precoBase = precoBase/2
    }
    return precoBase
}
const listaConvidados = [
    { nome: "Ana", idade: 20, tipoIngresso: "vip", estudante: true },
    { nome: "Livia", idade: 14, tipoIngresso: "comum", estudante: true },
    { nome: "Marcos", idade: 17, tipoIngresso: "comum", estudante: true }
];
function gerarRelatorio(lista) {
    lista.forEach(pessoa => {
        // Aqui usamos as funções que você criou antes!
        let valor = calcularPreco(pessoa.tipoIngresso, pessoa.estudante);
        let autorizado = podeAssistir(pessoa.idade);

        if (autorizado) {
            console.log(`${pessoa.nome} pagou R$ ${valor} e entrou no cinema.`);
        } else {
            console.log(`${pessoa.nome} tem ${pessoa.idade} anos e não pode entrar.`);
        }
    });
}

// Para executar:
gerarRelatorio(listaConvidados);
