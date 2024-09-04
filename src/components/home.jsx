import React from 'react';
import './styles.css';
import Card from './card'; // Importa o componente de cartão para exibição das informações

function Home() {
  return (
    <div className="home">
      {/* Título da página inicial */}
      <h1>Bem-vindo ao Nautiscope</h1>

      {/* Descrição curta da plataforma */}
      <p>Explore as profundezas do oceano com nossas visualizações abrangentes de dados batimétricos.</p>

      {/* Adicionar cartões amplos para notícias recentes */}
      {/* Cada Card representa uma notícia ou informação importante */}
      
      {/* Primeiro cartão: Novas descobertas nas profundezas do mar */}
      <Card
        title="Novas Descobertas nas Profundezas do Mar"
        content="Cientistas descobriram recentemente uma nova espécie de criaturas das profundezas no Oceano Atlântico, revelando a rica biodiversidade do oceano profundo."
        link="https://www.example.com/noticias/descobertas-profundezas-do-mar"
      />

      {/* Segundo cartão: Impacto das mudanças climáticas nos oceanos */}
      <Card
        title="Impacto das Mudanças Climáticas nos Oceanos"
        content="Estudos recentes mostram que as mudanças climáticas estão afetando drasticamente as correntes e temperaturas dos oceanos, causando impactos significativos na vida marinha e nos ecossistemas."
        link="https://www.example.com/noticias/impacto-climatico-oceanos"
      />

      {/* Terceiro cartão: Esforços para limpeza dos oceanos */}
      <Card
        title="Esforços para Limpeza dos Oceanos"
        content="Projetos inovadores de limpeza dos oceanos estão fazendo progressos na redução da quantidade de poluição plástica nos oceanos do mundo, visando um futuro mais sustentável."
        link="https://www.example.com/noticias/limpeza-dos-oceanos"
      />
    </div>
  );
}

export default Home;
