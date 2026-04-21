//como eu faco uma lista
function listaNumero(...numero){
    const listalimpa = [...new Set(numero)]
    return listalimpa ;
}

console.log(listaNumero(7,8,9,8,6,8,8,3));
