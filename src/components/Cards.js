import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import furao from './furao.jpeg'; // Corrija o caminho de importação para o diretório correto onde a imagem está localizada
import './Home.css';
import Bico from './Bico.png';
import Bixo from './Bixo.png';
import imgQuatro from './cobra-cascavel.webp';
import imgCinco from './coelho.webp';
import imgSeis from './Gato.jpeg';
import imgSete from './Pequeno.jpg';
import imgOito from './Burro.jpg';
import imgNove from './scooby.jpg';

function Cards() {
  return (
    <div>
      <div className="cards-container">
        {/* Primeiro card */}
        <div className="card" style={{ width: '18rem' }}>
          <img src={furao} className="card-img-top" alt="furãozinho" />
          <div className="card-body">
            <h5 className="card-title">Furão (Europeu Clássico, de pelo curto)</h5>
            <p className="card-text">Fêmea ID 900263000165595 R$5.000,00 R$4.500,00</p>
            <a href="#" className="btn btn-custom">Comprar</a>
          </div>
        </div>

        {/* Segundo card */}
        <div className="card" style={{ width: '18rem' }}>
          <img src={Bico} className="card-img-top" alt="bicozinho" />
          <div className="card-body">
            <h5 className="card-title">Tucano (Ramphastos toco)</h5>
            <p className="card-text">Fêmea ID 006267000115545 R$7.500,00 R$4.500,00</p>
            <a href="#" className="btn btn-custom">Comprar</a>
          </div>
        </div>

        {/* Terceiro card */}
        <div className="card" style={{ width: '18rem' }}>
          <img src={Bixo} className="card-img-top" alt="bixozinho" />
          <div className="card-body">
            <h5 className="card-title">Iguana ( Iguana iguana)</h5>
            <p className="card-text">Fêmea ID 008887666115541 R$8.500,00 R$6.500,00</p>
            <a href="#" className="btn btn-custom">Comprar</a>
          </div>
        </div>
      </div>
      <div className="cards-container">
        {/* Quarto card */}
        <div className="card" style={{ width: '18rem' }}>
          <img src={imgQuatro} className="card-img-top" alt="imagem-quatro" />
          <div className="card-body">
            <h5 className="card-title">Nome do Quarto Bicho</h5>
            <p className="card-text">Descrição do Quarto Bicho</p>
            <a href="#" className="btn btn-custom">Comprar</a>
          </div>
        </div>

        {/* Quinto card */}
        <div className="card" style={{ width: '18rem' }}>
          <img src={imgCinco} className="card-img-top" alt="imagem-cinco" />
          <div className="card-body">
            <h5 className="card-title">Nome do Quinto Bicho</h5>
            <p className="card-text">Descrição do Quinto Bicho</p>
            <a href="#" className="btn btn-custom">Comprar</a>
          </div>
        </div>

        {/* Sexto card */}
        <div className="card" style={{ width: '18rem' }}>
          <img src={imgSeis} className="card-img-top" alt="imagem-seis" />
          <div className="card-body">
            <h5 className="card-title">Nome do Sexto Bicho</h5>
            <p className="card-text">Descrição do Sexto Bicho</p>
            <a href="#" className="btn btn-custom">Comprar</a>
          </div>
        </div>

        {/* Sétimo card */}
        <div className="card" style={{ width: '18rem' }}>
          <img src={imgSete} className="card-img-top" alt="imagem-sete" />
          <div className="card-body">
            <h5 className="card-title">Nome do Sétimo Bicho</h5>
            <p className="card-text">Descrição do Sétimo Bicho</p>
            <a href="#" className="btn btn-custom">Comprar</a>
          </div>
        </div>

        {/* Oitavo card */}
        <div className="card" style={{ width: '18rem' }}>
          <img src={imgOito} className="card-img-top" alt="imagem-oito" />
          <div className="card-body">
            <h5 className="card-title">Nome do Oitavo Bicho</h5>
            <p className="card-text">Descrição do Oitavo Bicho</p>
            <a href="#" className="btn btn-custom">Comprar</a>
          </div>
        </div>

        {/* Nono card */}
        <div className="card" style={{ width: '18rem' }}>
          <img src={imgNove} className="card-img-top" alt="imagem-nove" />
          <div className="card-body">
            <h5 className="card-title">Nome do Nono Bicho</h5>
            <p className="card-text">Descrição do Nono Bicho</p>
            <a href="#" className="btn btn-custom">Comprar</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
