function gerarHashtags(frase){
    //(split("") transforma ma frase em um array)
    const listaPalavra = frase.split(" ")
    //(map)pecorre a lista e transforma cada palavra
    const resultado = listaPalavra.map(palavra => "#"  + palavra)

    return resultado

}
console.log(gerarHashtags("estudar javascript"))