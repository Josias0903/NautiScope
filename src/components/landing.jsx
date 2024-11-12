import React from 'react';
import './landingPage.css';
import { useNavigate } from 'react-router-dom';
import minhaImagem from "../images/2.png"

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/home');
  };

  return (
    <div className="landing-container">
      {/* Cabeçalho */}
      <header className="header">
      <img className="img-logo" src={minhaImagem} alt="Nautiscope Logo" />

        <nav className="nav-menu">
          <a href="#home">Início</a>
          <a href="#features">Recursos</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
        </nav>
      </header>

      {/* Seção Hero */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Explore o Azul Profundo com o Nautiscope</h1>
          <p>Desvende os mistérios do oceano com dados batimétricos precisos para descobrir o que está nas profundezas mais profundas.</p>
          <button className="cta-button" onClick={handleGetStartedClick}>Comece Agora</button>
        </div>
      </section>

      {/* Seção de Recursos */}
      <section id="features" className="features-section">
        <h2>Principais Recursos</h2>
        <div className="features-container">
          <div className="feature">
            <h3>Mapas Oceânicos Detalhados</h3>
            <p>Acesse mapas de alta qualidade do fundo do oceano, incluindo dados batimétricos e geofísicos.</p>
          </div>
          <div className="feature">
            <h3>Dados Científicos</h3>
            <p>Descubra dados coletados cientificamente para aprimorar seu conhecimento sobre ambientes marinhos.</p>
          </div>
          <div className="feature">
            <h3>Comunidade Colaborativa</h3>
            <p>Colabore com outros pesquisadores e entusiastas do oceano para expandir a exploração oceânica.</p>
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section id="about" className="about-section">
        <h2>Sobre o Nautiscope</h2>
        <p>O Nautiscope é uma plataforma dedicada a explorar e compartilhar dados batimétricos sobre o oceano. Nosso objetivo é fornecer uma visão clara das profundezas do oceano para pesquisa, educação e descoberta.</p>
      </section>

      {/* Seção de Contato */}
      <section id="contact" className="contact-section">
        <h2>Entre em Contato</h2>
        <p>Email: contact@nautiscope.com</p>
        <p>Telefone: (11) 99999-9999</p>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <p>&copy; 2024 Nautiscope. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
