import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-custom mx-auto">
            <div className="container-fluid justify-content-center">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="navbar-brand" href="#">Bicho Store</a>
                    </li>
                </ul>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Animais</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Quem somos ?</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Politica da empresa</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Abrigo
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
    <ul className="navbar-nav">
        {/* Seus outros itens de navegação */}
        <li className="nav-item">
            <a id="btnCadastro" className="nav-link" href="#" style={{ color: 'rgb(13, 48, 13)' }}>Cadastro</a>
        </li>
        <li className="nav-item">
            <a id="btnLogin" className="nav-link" href="#" style={{ color: 'rgb(13, 48, 13)' }}>Login</a>
        </li>
    </ul>
</div>



        </nav>
    )
}

export default Navbar;
