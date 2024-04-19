
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
     <Navbar/>
     <Cards/>
     <Footer/>
    </div>
  );
}

export default App;
