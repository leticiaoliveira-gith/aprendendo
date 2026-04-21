//como eu faco uma lista
function listaNumero(...numero){
    const listalimpa = [...new Set(numero)]
// serve para ordenar da forma correta, sem isso 10 vai pra frente
    listalimpa.sort((a,b) => a-b)
    return listalimpa ;
    
}

console.log(listaNumero(7,8,9,8,6,8,8,3,10));
