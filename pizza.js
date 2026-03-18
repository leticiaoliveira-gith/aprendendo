// --- Lógica do Carrinho ---
let cart = [];
let total = 0;

function updateCartUI() {
    const count = document.getElementById('cart-count');
    if(count) count.innerText = cart.length;
}

function addToCart(nome, preco) {
    cart.push({ nome, preco });
    total += preco;
    updateCartUI();
}

function openCart() {
    const modal = document.getElementById('cart-modal');
    const list = document.getElementById('cart-items');
    if(!modal) return;

    list.innerHTML = '';
    cart.forEach(item => {
        list.innerHTML += `<li>${item.nome} - R$ ${item.preco.toFixed(2).replace('.', ',')}</li>`;
    });

    document.getElementById('total-price').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
    modal.style.display = 'flex';
}

function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

function finishOrder() {
    if(cart.length === 0) return alert("Seu carrinho está vazio!");
    const texto = `Olá! Gostaria de pedir: ${cart.map(i => i.nome).join(', ')}. Total: R$ ${total.toFixed(2)}`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(texto)}`);
}

// --- Inicialização ---
document.addEventListener('DOMContentLoaded', () => {
    // Revelar elementos
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 200 * index);
    });

    // Configurar cliques nas pizzas
    const cards = document.querySelectorAll('.menu-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const nome = card.querySelector('h3').innerText;
            const preco = parseFloat(card.querySelector('.price').innerText.replace('R$ ', '').replace(',', '.'));
            addToCart(nome, preco);
            
            // Feedback visual
            card.style.transform = "scale(0.95)";
            setTimeout(() => card.style.transform = "scale(1.03)", 100);
        });
    });

    // Abrir carrinho
    const btnCheckout = document.getElementById('btn-checkout');
    if(btnCheckout) btnCheckout.onclick = openCart;
});

// Parallax da Pizza (Home)
document.addEventListener('mousemove', (e) => {
    const img = document.querySelector('#pizza-img');
    if(!img) return;
    const x = (window.innerWidth / 2 - e.pageX) / 30;
    const y = (window.innerHeight / 2 - e.pageY) / 30;
    img.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${x}deg)`;
});