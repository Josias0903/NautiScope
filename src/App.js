import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import DataVisualization from './components/DataVisu';
import About from './components/Sobre';
import Polygon1Content from './components/Polygono1Content'; 
import Polygon2Content from './components/Polygono2Content'; 
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/data">Mapa</a></li>
            <li><a href="/about">Sobre</a></li>
            <li><a href="./login/cadastro.html">Cadastro</a></li>
            <li><a href="./login/login.html">Log In</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<DataVisualization />} />
          <Route path="/about" element={<About />} />
          <Route path="/polygon1-content" element={<Polygon1Content />} /> 
          <Route path="/polygon2-content" element={<Polygon2Content />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;