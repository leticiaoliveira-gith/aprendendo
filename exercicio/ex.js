const { stdin: input, stdout: output } = require('node:process');
const readline = require('node:readline/promises');

async function executar() {
  const rl = readline.createInterface({ input, output });

  console.log("--- GERADOR DE TABUADA ---");
  const num = await rl.question("Digite um número: ");
  const n = Number(num);

  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }

  rl.close();
}

executar();