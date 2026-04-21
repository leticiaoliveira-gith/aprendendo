//como eu faco uma lista
function listaNumero(...numero){
    //(set)tirar numeros duplicados
    const listalimpa = [...new Set(numero)]
// serve para ordenar da forma correta, sem isso 10 vai pra frente
    listalimpa.sort((a,b) => a-b)
// somar numeros da lista
    const somaTotal = listalimpa.reduce((acc,curr)=> acc+curr,0)

    return{
        lista: listalimpa,//[,]obrigatoria pra total n da erro
        total: somaTotal
    }
}

console.log(listaNumero(7,8,9,8,6,8,8,3,10));
