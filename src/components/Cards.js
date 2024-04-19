import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import furao from './furao.jpeg'; // Corrija o caminho de importação para o diretório correto onde a imagem está localizada
import './Home.css';
import Bico from './Bico.png';
import Bixo from './Bixo.png';

function Cards() {
  return (
    <div className="cards-container">
      {/* Primeiro card */}
      <div className="card" style={{ width: '18rem' }}>
        <img src={furao} className="card-img-top" alt="furãozinho" /> {/* Use a variável furao como o src */}
        <div className="card-body">
          <h5 className="card-title">Furão (Europeu Clássico, de pelo curto)</h5>
          <p className="card-text">Fêmea ID 900263000165595 R$5.000,00 R$4.500,00</p>
          <a href="#" className="btn btn-custom">Comprar</a>
        </div>
      </div>

      {/* Segundo card */}
      <div className="card" style={{ width: '18rem' }}>
      <img src={Bico} className="card-img-top" alt="bicozinho" /> {/* Use a variável furao como o src */}
        <div className="card-body">
          <h5 className="card-title">Tucano (Ramphastos toco)</h5>
          <p className="card-text">Fêmea ID 006267000115545 R$7.500,00 R$4.500,00</p>
          <a href="#" className="btn btn-custom">Comprar</a>
        </div>
      </div>

      {/* Terceiro card */}
      <div className="card" style={{ width: '18rem' }}>
      <img src={Bixo} className="card-img-top" alt="bixozinho" /> {/* Use a variável furao como o src */}
        <div className="card-body">
          <h5 className="card-title">Iguana ( Iguana iguana)</h5>
          <p className="card-text">Fêmea ID 008887666115541 R$8.500,00 R$6.500,00</p>
          <a href="#" className="btn btn-custom">Comprar</a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
