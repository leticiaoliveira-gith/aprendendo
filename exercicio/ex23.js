let funcionario = "kleitim"
console.log(`o funcionario ${funcionario} recebe:`)
let salarioM = 2500
let horasM = 220

let salarioH = salarioM / horasM
let resultado= salarioH.toFixed(2).replace(".", ",")

console.log("R$ " + resultado + " por hora")


