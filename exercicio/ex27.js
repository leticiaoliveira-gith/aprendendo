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
console.log(calcularPreco("vip", true)); 
