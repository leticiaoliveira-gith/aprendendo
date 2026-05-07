// 1. Classe Base (O molde geral)
class Notificacao {
    enviar(mensagem) {
        console.log(`Enviando notificação geral: ${mensagem}`);
    }
}

// 2. Subclasses (Especializações usando Herança)
class Email extends Notificacao {
    enviar(mensagem) {
        console.log(`📧 E-mail enviado: ${mensagem}`);
    }
}

class SMS extends Notificacao {
    enviar(mensagem) {
        console.log(`📱 SMS enviado: ${mensagem}`);
    }
}

class WhatsApp extends Notificacao {
    enviar(mensagem) {
        console.log(`🟢 WhatsApp enviado: ${mensagem}`);
    }
}

// 3. A função que demonstra o Polimorfismo
// Ela não precisa saber o tipo exato da notificação, apenas que ela tem o método .enviar()
function comunicarCliente(listaDeCanais, texto) {
    console.log("--- Iniciando disparos de mensagens ---");
    
    listaDeCanais.forEach(canal => {
        canal.enviar(texto); // Aqui acontece o polimorfismo!
    });
    
    console.log("--- Todos os avisos foram enviados ---\n");
}

// --- Testando o sistema ---

// Criamos uma lista com diferentes tipos de notificações
const meusCanais = [
    new Email(),
    new SMS(),
    new WhatsApp()
];

// Chamamos a função passando a lista e a mensagem
comunicarCliente(meusCanais, "Sua pizza Bella Pizza saiu para entrega!");