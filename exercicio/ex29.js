function calculoImc(peso, altura){
    const imc = peso/(altura*altura)
    const formatado =imc.toFixed(2)
    let classificacao = ""

    if ( imc<= 18.5){
        classificacao = "abaixo do peso"
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = "Sobrepeso"
    } else {
        classificacao = "Obesidade"
    }
    return `Seu IMC é ${formatado} (${classificacao})`
}
console.log(calculoImc(70, 1.75))
