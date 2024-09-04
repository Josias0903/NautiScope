import React from 'react';
import "./styles.css"

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">Sobre esse projeto</h1>
      <p className="about-description">
        O NautiScope é uma plataforma inovadora que visa simplificar a leitura de mapas batimétricos do Oceano Atlântico Sul, 
        abordando as áreas de Geografia e Biologia Marinha. O problema central da pesquisa é a dificuldade em interpretar mapas topográficos do fundo do oceano, 
        especialmente para não especialistas. Os objetivos do projeto incluem a criação de uma plataforma interativa que 
        facilite o acesso a informações sobre a topografia oceânica, promovendo, desse modo, a compreensão dos ambientes marinhos e 
        contribuindo para a conservação dos oceanos. A plataforma busca fornecer atualizações em tempo real, interação com assistentes virtuais 
        especializados em batimetria e acesso a notícias relevantes sobre estudos batimétricos. Além disso, pretende-se orientar os usuários 
        na utilização da aplicação e garantir a colaboração eficaz entre o Pesquisador Batimétrico e o Sistema NautiScope. 
        Com foco na pesquisa aplicada e na integração da oceanografia com a tecnologia da informação, 
        o NautiScope tem o potencial de impactar positivamente a pesquisa oceanográfica e a conservação dos ecossistemas marinhos, 
        atendendo às demandas de simplificação e acessibilidade na leitura de mapas batimétricos.
      </p>
    </div>
  );
}

export default About;
