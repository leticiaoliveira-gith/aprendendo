function contadorSeletivo(limite) {
    for (let i = 1; i <= limite; i++) {
        
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`Número ${i}: Fullstack`);
        } 
        else if (i % 3 === 0) {
            console.log(`Número ${i}: Programação`);
        } 
        else if (i % 5 === 0) {
            console.log(`Número ${i}: Lógica`);
        } 
        else {
            console.log(i);
        }
    }
}

// Chamando a função para rodar até 20
contadorSeletivo(20);