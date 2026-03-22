function contar(){
    var inici = document.getElementById(`nicio`)
    var final = document.getElementById(`nufim`)
    var pass = document.getElementById(`icre`)
    var res = document.getElementById(`res`)
    

    if (inici.value.length == 0 || final.value.length == 0 || pass.value.length == 0){
        window.alert (`ERRO FALTAM DADOS`)
        res.innerHTML = `Impossivel contar`
    } else {
        res.innerHTML =`Contando: <br> `
        var i = Number (inici.value)
        var f = Number (final.value)
        var p = Number (pass.value)

        if (p <=0){
            window.alert (`passo {0} invalido! considerando passo 1`)
            p =1
        }

        if (i < f){//contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F352}`
            }
        } else {// contagem regressiva
            for(var c = i; c >= f; c-=p){
                res.innerHTML += `${c} \u{1F352}`
            }
        }
    }
}

function createCherry() {
    const cherry = document.createElement('div');
    cherry.classList.add('cherry');
    
    // Define o caractere da cereja
    cherry.innerText = '🍁';
    
    // Posição horizontal aleatória
    cherry.style.left = Math.random() * 100 + "vw";
    
    // Tamanho aleatório para dar profundidade
    cherry.style.fontSize = Math.random() * 20 + 10 + "px";
    
    // Duração da queda aleatória (entre 3 e 7 segundos)
    const duration = Math.random() * 4 + 3;
    cherry.style.animationDuration = duration + "s";
    
    document.body.appendChild(cherry);

    // Remove a cereja depois que ela cair para não pesar o PC
    setTimeout(() => {
        cherry.remove();
    }, duration * 1000);
}

// Cria uma cereja a cada 300 milissegundos
setInterval(createCherry, 300);