// Cores para o terminal (ANSI escape codes)
const VERDE = "\x1b[32m";
const RESET = "\x1b[0m";

// Caracteres que vão cair
const caracteres = "0123456789ABCDEFGHIJKLMNOPQRSTUVXYZ@#$%&*";

// Largura da tela (ajustável)
const largura = process.stdout.columns || 40;

// Array para guardar a posição vertical de cada coluna
let colunas = Array(largura).fill(0);

function desenhar() {
    // Cria uma linha de texto baseada nas posições das colunas
    let linha = colunas.map((pos, i) => {
        // Decide aleatoriamente se vai desenhar um caractere ou espaço vazio
        if (Math.random() > 0.9) {
            const charAleatorio = caracteres[Math.floor(Math.random() * caracteres.length)];
            return VERDE + charAleatorio + RESET;
        } else {
            return " ";
        }
    }).join("");

    console.log(linha);
}

// Executa a função a cada 50 milissegundos
setInterval(desenhar, 50);