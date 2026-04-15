
// ==========================================
// 1. CRIAÇÃO DOS ELEMENTOS (ESTRUTURA)
// ==========================================
const container = document.createElement('div');
const titulo = document.createElement('h2');
const inputNome = document.createElement('input');
const inputIdade = document.createElement('input');
const selectTipo = document.createElement('select');
const btnAdicionar = document.createElement('button');
const listaResultados = document.createElement('div');

// Configurando atributos básicos
titulo.innerText = "🎬 CineLogic Dashboard";
inputNome.placeholder = "Nome do cliente";
inputIdade.placeholder = "Idade";
inputIdade.type = "number";

// Opções do Select
const opComum = new Option("Ingresso Comum", "comum");
const opVip = new Option("Ingresso VIP", "vip");
selectTipo.add(opComum);
selectTipo.add(opVip);

btnAdicionar.innerText = "Verificar e Registrar";

// Montando a árvore do HTML
document.body.appendChild(container);
container.append(titulo, inputNome, inputIdade, selectTipo, btnAdicionar, listaResultados);

// ==========================================
// 2. ESTILIZAÇÃO (CSS DENTRO DO JS)
// ==========================================
const estilosGlobais = {
    body: {
        backgroundColor: "#0f172a",
        display: "flex",
        justifyContent: "center",
        padding: "40px",
        margin: "0"
    },
    container: {
        backgroundColor: "#1e293b",
        padding: "30px",
        borderRadius: "16px",
        width: "350px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        fontFamily: "sans-serif"
    },
    inputs: {
        width: "100%",
        padding: "12px",
        marginBottom: "15px",
        borderRadius: "8px",
        border: "1px solid #334155",
        backgroundColor: "#0f172a",
        color: "white",
        boxSizing: "border-box"
    },
    botao: {
        width: "100%",
        padding: "14px",
        backgroundColor: "#6366f1",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontWeight: "bold",
        cursor: "pointer"
    }
};

// Aplicando os estilos via Loop para ser organizado
Object.assign(document.body.style, estilosGlobais.body);
Object.assign(container.style, estilosGlobais.container);
[inputNome, inputIdade, selectTipo].forEach(el => Object.assign(el.style, estilosGlobais.inputs));
Object.assign(btnAdicionar.style, estilosGlobais.botao);

titulo.style.color = "#6366f1";
titulo.style.textAlign = "center";
titulo.style.marginBottom = "25px";

// ==========================================
// 3. LÓGICA DE PROGRAMAÇÃO
// ==========================================
function podeAssistir(idade) { return idade >= 16; }

function calcularPreco(tipo) { return tipo === "vip" ? 80 : 30; }

btnAdicionar.onclick = () => {
    const nome = inputNome.value;
    const idade = parseInt(inputIdade.value);
    const tipo = selectTipo.value;

    if (!nome || isNaN(idade)) return alert("Dados incompletos!");

    const autorizado = podeAssistir(idade);
    const preco = calcularPreco(tipo);

    // Criar o card de resultado
    const card = document.createElement('div');
    card.style.marginTop = "15px";
    card.style.padding = "15px";
    card.style.borderRadius = "8px";
    card.style.color = "white";
    card.style.fontSize = "14px";
    card.style.display = "flex";
    card.style.justifyContent = "space-between";

    if (autorizado) {
        card.style.backgroundColor = "#064e3b";
        card.style.borderLeft = "5px solid #22c55e";
        card.innerHTML = `<strong>${nome}</strong> <span>R$ ${preco},00</span>`;
    } else {
        card.style.backgroundColor = "#450a0a";
        card.style.borderLeft = "5px solid #ef4444";
        card.innerHTML = `<strong>${nome}</strong> <span>🚫 Barrado</span>`;
    }

    listaResultados.prepend(card);
    
    // Limpar campos e focar no nome
    inputNome.value = "";
    inputIdade.value = "";
    inputNome.focus();
};