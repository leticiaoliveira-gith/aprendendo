
let numeros = [3,2,5]

const soma = numeros.reduce((acumulador, numeroAtual) => {
    return acumulador + numeroAtual;
}, 0);

console.log(soma);