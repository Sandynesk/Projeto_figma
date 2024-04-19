
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Banner from './components/Banner';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Cards/>
     <Footer/>
    </div>
  );
}

export default App;
