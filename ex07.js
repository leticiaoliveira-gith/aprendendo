console.log(`soma dos números pares entre 1 a 500`)
let soma = 0

for (let n= 1; n <= 500; n++){
    if(n%2==0){
    console.log(`o numero e par ${n}`)
    soma += n
    } 
    
}
console.log(`a soma dos número pares é : ${soma}`)

