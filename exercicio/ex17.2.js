let nome = (`roma`)
let inverti = nome.split(``).reverse().join(``)
console.log(`nome : ${nome}`)

if (nome !== inverti){
    console.log(`Não e palindromo`)
}

let tamanho = nome.length
let meio =Math.floor(tamanho/2)

if (tamanho%2 != 0 && nome === inverti){
    console.log(`Nome é impar, e as lertras do centro e "${nome[meio]}"`)
} else if (nome === inverti){
    console.log(`Nome é par, e as lertras do centro e "${nome[meio-1]}${nome[meio]}"`)
}