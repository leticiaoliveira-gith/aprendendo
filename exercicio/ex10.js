const base = 3;
const limiteExpoente = 15;
let resultado = 1;
console.log(`Potências de base ${base}:`);

for (let expoente = 0; expoente <= limiteExpoente; expoente++) {
    console.log(`${base} elevado a ${expoente} = ${resultado}`);
 
    resultado *= base;
}