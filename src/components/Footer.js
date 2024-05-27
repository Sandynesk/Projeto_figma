import React from 'react';
import '../components/CSS/Footer.css';
import './CSS/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Links Úteis</h5>
            <ul className="list-unstyled">
              <li><a href="#">Página Inicial</a></li>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Produtos</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Inscreva-se na Newsletter</h5>
          </div>
          <div className="col-md-4">
            <h5>Contato</h5>
            <ul className="list-unstyled">
              <li>Endereço: Rua Exemplo, 123</li>
              <li>Telefone: (99) 9999-9999</li>
              <li>Email: exemplo@example.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
