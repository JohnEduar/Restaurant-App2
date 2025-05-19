import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Define las demás rutas */}
        {/* <Route path="/buscar" element={<Buscar />} /> */}
        {/* <Route path="/nuevo" element={<Nuevo />} /> */}
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
