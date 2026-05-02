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