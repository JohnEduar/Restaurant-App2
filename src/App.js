import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import New from './pages/New';
import Search from './pages/Search';


function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Define las demás rutas */}
        {/* <Route path="/buscar" element={<Buscar />} /> */}
        <Route path="/New" element={<New />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
