import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Poligono.css'; // Importando o CSS

const Polygono2Content = () => {
    const [polygonData, setPolygonData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3005/api/pullData')
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
            <h1>Cadeia Vitória Trindade</h1>
            {polygonData.data.map((polygon, index) => (
                <div key={index} className="polygon-card">
                    <h3>{polygon.title}</h3>
                    <img 
                        src={polygon.image_url} 
                        alt={polygon.title} 
                        className="polygon-image"
                    />
                    <p className="polygon-description">{polygon.description}</p>
                </div>
            ))}
            <a href="/" className="back-button">Voltar</a>
        </div>
    );
};

export default Polygono2Content;
