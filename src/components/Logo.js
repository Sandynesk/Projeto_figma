import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgLogo from './BichoStore.png' 

function Logo(){
    return(
        <nav className="navbar navbar-expand-lg bg-custom mx-auto">
            <div className="container-fluid justify-content-center">
                <div className="logo" style={{ position: 'fixed', left: '50%', transform: 'translateX(-50%)' }}>
                    <img src={imgLogo} alt="logo" />
                </div>
                {/* Restante do seu código */}
            </div>
        </nav>
    )
}

export default Logo;
