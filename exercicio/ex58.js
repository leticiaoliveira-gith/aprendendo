const clientes = [
    { nome: "Letícia", tel: "11988884444" },
    { nome: "João", tel: "21977773333" },
    { nome: "Maria", tel: "11966662222" }
];

function mascararTelefones(lista) {
    return lista.map(cliente => {
        // Pegamos apenas os 4 últimos números
        const ultimosDigitos = cliente.tel.slice(-4);
        
        // Criamos a versão "escondida"
        const telMascarado = "****-****" + ultimosDigitos;

        // Retornamos um novo objeto mantendo o nome, mas trocando o tel
        return {
            ...cliente,
            tel: telMascarado
        };
    });
}

console.log("Lista de Clientes (Protegida):");
console.log(mascararTelefones(clientes));
/* 
Resultado esperado:
{ nome: "Letícia", tel: "****-****4444" }, ...
*/