import React from 'react';
import BannerImage from '../Fotos/Banner.png'; // Caminho relativo correto
import './CSS/Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <img src={BannerImage} alt="Banner" />
    </div>
  );
}

export default Banner;
