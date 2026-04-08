let n = 10;
let antes = 0;
let atual = 1;
console.log(`------fibonacci-----`)

console.log(antes); 
console.log(atual); 

for (let x = 2; x <= n; x++) {
    let proximo = antes + atual; 
    console.log(`f(${x}) = ${proximo}`);        

    antes = atual;
    atual = proximo;
}