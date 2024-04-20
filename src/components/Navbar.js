import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-custom mx-auto">
            
            <div className="container-fluid justify-content-center">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        
                    </li>
                </ul>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><strong>Animais</strong></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"><strong>Quem somos ?</strong></a>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><strong>Politica da empresa</strong></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><strong>Abrigo</strong></a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
    <ul className="navbar-nav">
    <li className="nav-item" align="right">
        <a id="btnCadastro" className="nav-link" href="#" style={{ color: 'rgb(13, 48, 13)' }}>Cadastro</a>
    </li>
    <li className="nav-item" align="right">
        <a id="btnLogin" className="nav-link" href="#" style={{ color: 'rgb(13, 48, 13)' }}>Login</a>
    </li>
    </ul>
</div>



        </nav>
    )
}

export default Navbar;
