// Footer.jsx
export const Footer = () => {
  return (
    <footer>
      {/* Requisito: Três listas não ordenadas */}
      <ul className="footer-list">
        <li>Sobre</li>
        <li>Blog</li>
      </ul>
      
      <ul className="footer-list">
        <li>Contato</li>
        <li>Suporte</li>
      </ul>

      <ul className="footer-list">
        <li>Privacidade</li>
        <li>Termos</li>
      </ul>

      {/* Requisito: Parágrafo com símbolo de copyright */}
      <p>Copyright © 2026 - Letícia Oliveira</p>

      {/* Requisito: Três links com href="#" */}
      <div className="footer-links">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
    </footer>
  );
};