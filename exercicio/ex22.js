let l1 = 4
let l2 = 4
let l3 = 2
//-------informações-------------
let altura = 7
let base = 10

if (l1 ==l2 && l2==l3){
    console.log(`É um triangulo equilatero`)
    let areaE = (l1 ** 2 * Math.sqrt(3)) / 4
    console.log(`E sua Área é; ${areaE.toFixed(2)}`)

} else if(l1!=l2 && l2 != l3 && l1!=l3){
    console.log(`É e um triangulo escaleno`)
    let areaE = (base*altura)/ 2
    console.log(`E sua Área é; ${areaE.toFixed(2)}`)
} else {
    console.log(`É um triangulo isósceles `)
    let areaE = (base*altura)/ 2
    console.log(`E sua Área é; ${areaE.toFixed(2)}`)
}