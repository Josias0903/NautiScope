// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Poligono.css';

// function Polygon1Content() {
//   const navigate = useNavigate();

//   return (
//     <div className="polygon-content">
//       <div className="polygon-card">
//         <h2>Cadeia Dorsal do Atlântico Sul, </h2>
//       </div>

//       <div className="polygon-card">
//         <img src="/images/polygon-placeholder1.png" alt="Formação da Cadeia Vitória-Trindade" className="polygon-image" />
//         <p className="polygon-description">
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, esse sequi, hic, excepturi enim voluptates totam eaque cumque nisi illum laudantium nemo inventore repudiandae! Sequi quae nulla ratione veniam ex?
//         </p>
//       </div>

//       <div className="polygon-card">
//         <img src="/images/polygon-placeholder2.png" alt="Dados Batimétricos da Cadeia Vitória-Trindade" className="polygon-image" />
//         <p className="polygon-description">
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis voluptates illo dolores non fugit quod perferendis nam? Optio, animi! Repellendus, dicta quos autem ratione earum maiores possimus perferendis dolores?
//         </p>
//       </div>

//       <div className="polygon-card">
//         <p className="polygon-description">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut autem eos reiciendis recusandae, repellat quaerat mollitia dolor, modi assumenda asperiores, necessitatibus architecto rerum earum. Magni neque numquam eius excepturi nisi.
//         </p>
//       </div>

//       <div className="polygon-card">
//         <img src="/images/polygon-placeholder3.png" alt="Biodiversidade Marinha da Cadeia Vitória-Trindade" className="polygon-image" />
//         <p className="polygon-description">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sequi, nobis et harum, repellendus dolorum culpa nihil soluta quae molestiae nesciunt voluptatum, obcaecati error molestias explicabo debitis iure. Aspernatur, earum.
//         </p>
//       </div>

//       <div className="polygon-card">
//         <p className="polygon-description">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti enim, aperiam nostrum dicta veniam sunt ad atque delectus hic maxime. Sapiente nostrum, corporis magnam distinctio minima necessitatibus. Modi, autem.
//         </p>
//       </div>


//       <button className="back-button" onClick={() => navigate('/data')}>
//         Voltar ao Mapa
//       </button>
//     </div>
//   );
// }

// export default Polygon1Content;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Poligono.css'; // Importando o CSS

const PORT = 3009;

const Polygono1Content = () => {
    const [polygonData, setPolygonData] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3009/api/pullData2`)
            .then(response => {
                setPolygonData(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar dados do banco de dados', error);
            });
    }, []);

    if (!polygonData) {
        return <p>Carregando...</p>;
    }

    if (!polygonData.data || !Array.isArray(polygonData.data)) {
        return <p>Nenhum dado encontrado ou dados inválidos.</p>;
    }

    return (
        <div className="polygon-content">
            <h1>Cadeia Dorsal Mesoatlântoica</h1>
            {polygonData.data.map((polygon, index) => (
                <div key={index} className="polygon-card">
                    <h3>{polygon.title}</h3>
                    <img 
                        src={polygon.image_url} 
                        alt={polygon.title} 
                    />
                    <p className="polygon-description">{polygon.description}</p>
                </div>
            ))}
            <a href="/" className="back-button">Voltar</a>
        </div>
    );
};

export default Polygono1Content;

