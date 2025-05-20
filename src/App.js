import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import New from './pages/New';


function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Define las demás rutas */}
        {/* <Route path="/buscar" element={<Buscar />} /> */}
        <Route path="/New" element={<New />} /> 
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
