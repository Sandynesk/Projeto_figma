import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import furao from './furao.jpeg'; // Corrija o caminho de importação para o diretório correto onde a imagem está localizada
import './Home.css';
import Bico from './Bico.png';
import Bixo from './Bixo.png';
import imgGato from './Gato.jpg';
import imgDog from './Cachorro.webp';
import imgCoelho from './coelho.webp';

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

      {/* Quarto card */}
      <div className="card" style={{ width: '18rem' }}>
        <img src={imgGato} className="card-img-top" alt="gatinho" /> {/* Use uma variável para o src */}
        <div className="card-body">
          <h5 className="card-title">Gato Siamês (Felis catus)</h5>
          <p className="card-text">Macho ID 001234567890123 R$1.200,00 R$900,00</p>
          <a href="#" className="btn btn-custom">Comprar</a>
        </div>
      </div>

      {/* Quinto card */}
      <div className="card" style={{ width: '18rem' }}>
        <img src={imgDog} className="card-img-top" alt="unicorniozinho" /> {/* Use uma variável para o src */}
        <div className="card-body">
          <h5 className="card-title">Unicórnio (Equus unicornis)</h5>
          <p className="card-text">Fêmea ID 987654321098765 R$15.000,00 R$12.000,00</p>
          <a href="#" className="btn btn-custom">Comprar</a>
        </div>
      </div>

      {/* Sexto card */}
      <div className="card" style={{ width: '18rem' }}>
        <img src={imgCoelho} className="card-img-top" alt="dragaozinho" /> {/* Use uma variável para o src */}
        <div className="card-body">
          <h5 className="card-title">Dragão de Fogo (Draco ignis)</h5>
          <p className="card-text">Macho ID 876543210987654 R$20.000,00 R$18.000,00</p>
          <a href="#" className="btn btn-custom">Comprar</a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
