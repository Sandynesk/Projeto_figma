
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Logo from './components/Logo';
import Barra from './components/Barra'
import Blocao from './components/Blocao';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Logo/>
     <Banner/>
     <Barra/>
     <Cards/>
     <Blocao />
     <Footer/>
    </div>
  );
}

export default App;
