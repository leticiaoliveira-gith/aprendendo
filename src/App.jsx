import './pizza.css';

function App() {
  return (
    <>
      {/* Barra de Navegação */}
      <nav id="navbar">
        <div className="logo">Teste<span>Pizza</span></div>
        <ul>
          <li><a href="#cardapio">Cardápio</a></li>
          <li><a href="#sobre">Sobre</a></li>
          {/* Botão de pedido ajustado para JSX */}
          <li>
            <button className="btn-pedido">Fazer Pedido</button>
          </li>
        </ul>
      </nav>

      {/* Seção Principal (Hero) */}
      <section className="hero">
        <div className="hero-content">
          {/* Removi a classe 'reveal' para o texto aparecer direto */}
          <h1>A Melhor Pizza <br /><span>da Cidade.</span></h1>
          <p>Massa artesanal, ingredientes selecionados e o toque italiano que você merece.</p>
          <button className="btn-main">Ver Cardápio</button>
        </div>

        <div className="hero-image">
          {/* Caminho buscando da pasta public/imagens/ */}
          <img src="/imagens/pizza.png" alt="Pizza" id="pizza-img" />
        </div>
      </section>
{/*teste*/}
      {/* Seção do Cardápio Atualizada */}
      <section id="cardapio" className="cardapio-section">
        <h2>Nosso <span>Cardápio</span></h2>
        <div className="cardapio-grid">
          {/* Pizza 1 */}
          <div className="pizza-card">
            <img src="/imagens/pizzai.png" alt="Margherita" />
            <h3>Margherita Clássica</h3>
            <p>Molho de tomate, mozzarella de búfala e manjericão.</p>
            <span className="preco">R$ 45,00</span>
          </div>

          {/* Pizza 2 */}
          <div className="pizza-card">
            <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80" alt="Calabresa" />
            <h3>Calabresa Gourmet</h3>
            <p>Calabresa defumada, cebola roxa e azeitonas.</p>
            <span className="preco">R$ 48,00</span>
          </div>

          {/* Pizza 3 */}
          <div className="pizza-card">
            <img src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=500&q=80" alt="Quatro Queijos" />
            <h3>Quatro Queijos</h3>
            <p>Mozzarella, provolone, parmesão e gorgonzola.</p>
            <span className="preco">R$ 52,00</span>
          </div>

          {/* Pizza 4 (Doce) */}
          <div className="pizza-card">
            <img src="/imagens/pizzapng2.png" alt="Chocolate Suíço" />
            <h3>Chocolate Suíço</h3>
            <p>Chocolate suíço, morango e biscoito maizena.</p>
            <span className="preco">R$ 52,00</span>
          </div>
        </div>
      </section>

      {/* Seção Sobre / História */}
      <section id="sobre" className="sobre-section">
        <div className="sobre-container">
          <h2>Nossa <span>História</span></h2>
          <p>
            Desde ontem à noite (numa terça às 23h), a Teste Pizza mantém a tradição da massa fermentada naturalmente. 
            Cada pizza é uma obra de arte feita à mão, assada em forno a lenha.
          </p>

          <div className="container-musica">
            {/* Imagem do Gatinho */}
            <img className="tig" src="/imagens/cat-pizza.gif" alt="Gatinho Pizzaiolo" />
            
            <h1 className="music">Pizzaria da <span>Gatinha</span></h1>
            <p>
              A pizzaria da gatinha<br />
              Faz a massa mais fofinha!<br />
              Com tomate, gorgonzola,<br />
              Mussarela e azeitoninha.<br />
              Tarã! Pizzaria!
            </p>
          </div>
        </div>
      </section>

      {/* Rodapé simples para marcar o fim da página */}
      <footer style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
        <p>© 2026 Teste Pizza - Aprendendo React com Sucesso! 🚀</p>
      </footer>
    </>
  );
}

export default App;