function listaNome(lista, termo){
    const nomeLImpo = termo.toLowerCase()
    return lista.filter(nome => {
        // Transforme o nome atual em minúsculo e veja se ele começa com a busca
        return nome.toLowerCase().startsWith(nomeLImpo);
    });
}
const contatos = ["Ana", "Beto", "André", "Carla", "amanda"];
console.log(listaNome(contatos, "An"));