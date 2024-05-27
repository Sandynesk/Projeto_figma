import React from 'react';
import './CSS/Blocao.css';
import gatito from '../Fotos/gatito.png';
import gatenho from '../Fotos/gatenho.png';
import cachorrinho from '../Fotos/cachorrinho.png';

function Blocao(props) {
  return (
    <div className="button-group">
      <div className='gatito'>
         <img src={gatito}/><h1 className='textoGato'>Entre</h1>
      </div>
      <div className='coisa-fofa'>
         <img src={gatenho}/><h1 className='textoGatenho'>no</h1>
      </div>
      <div className='Algum'>
        <img src={cachorrinho}/><h1 className='textoCachorro'>Abrigo</h1>
      </div>
    
  </div>
  );
}

export default Blocao;