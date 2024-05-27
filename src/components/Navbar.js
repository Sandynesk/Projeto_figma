import React from 'react';
import './CSS/Navbar.css';
import imgLogo from '../Fotos/BichoStore.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-custom">
        <div className="container-fluid">
          <img src={imgLogo} className="Logo" alt="Logo" /> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Tela incial</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Saiba mais!</a>
              </li>
              <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Serviços
    </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" href="#">Serviço 1</a></li>
        <li><a className="dropdown-item" href="#">Serviço 2</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Outro Serviço</a></li>
    </ul>
</li>
            </ul>
            <a className="btn btn-custom" href="#" role="button" style={{ fontWeight: 'bold' }}>Saiba seus direitos!</a>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;
