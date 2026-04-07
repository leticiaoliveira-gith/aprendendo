let n1 = 5
let n2 = 5
let n3 = 10

let resultado = (n1+n2+n3)/3
let mediaf = resultado.toFixed(1)

if (resultado > 7){
    console.log(`sua media foi ${mediaf} vc foi aprovado`)
} else {
    if(resultado = 6){
        console.log(`sua media foi ${mediaf} vc ta de recuperação`)
    } else {
         console.log(`sua media foi ${mediaf} vc fui reprovado`)
    }
}