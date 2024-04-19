import React from 'react';
import BannerImage from './Banner.png'; // Caminho relativo correto

const Banner = () => {
  return (
    <div className="banner">
      <img src={BannerImage} alt="Banner" />
    </div>
  );
}

export default Banner;
