import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css.css';

function Home() {
  const [cards, setCards] = useState([]);
  const [formData, setFormData] = useState({
    titulo: '',
    resumo: '',
    file: null,
  });
  const [message, setMessage] = useState('');

  // Buscar dados do banco de dados na montagem do componente
  useEffect(() => {
    axios.get('http://localhost:3005/api/pullData3') // Ajuste o endpoint para o seu backend
      .then(response => {
        setCards(response.data.data); // Assumindo que a resposta contém um objeto com a chave `data`
      })
      .catch(error => {
        console.error('Erro ao buscar dados do banco de dados', error);
      });
  }, []);

  // Manipuladores do Formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Usar FormData para enviar dados multipart (incluindo o arquivo)
    const data = new FormData();
    data.append('titulo', formData.titulo);
    data.append('resumo', formData.resumo);
    data.append('file', formData.file);

    // Enviar dados para o backend via POST
    axios.post('http://localhost:3005/api/upload/arquive', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        // Atualizar a lista de cartões com o novo dado retornado do servidor
        setCards([...cards, response.data.data]);
        // Resetar o formulário após o upload
        setFormData({ titulo: '', resumo: '', file: null });
        setMessage('Arquivo enviado com sucesso!');
      })
      .catch(error => {
        console.error('Erro ao enviar dados para o banco de dados', error);
        setMessage('Erro ao enviar o arquivo. Tente novamente.');
      });
  };

  return (
    <div className="home">
      {/* Título da página inicial */}
      <h1>Arquivos do Nautiscope</h1>

      {/* Descrição curta da plataforma */}
      <p>Explore arquivos e resumos detalhados sobre as profundezas do oceano, com nossas visualizações abrangentes de dados batimétricos.</p>

      {/* Formulário para upload de arquivos */}
      <form className="upload-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={formData.titulo}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="resumo"
          placeholder="Resumo"
          value={formData.resumo}
          onChange={handleInputChange}
          required
        />
        <input
          type="file"
          onChange={handleFileChange}
          required
        />
        <button type="submit">Enviar Arquivo</button>
      </form>

      {/* Mensagem de Feedback */}
      {message && <p className="feedback-message">{message}</p>}

      {/* Renderizar cartões dinâmicos */}
      <div className="card-container">
        {cards.length > 0 ? (
          cards.map((card, index) => (
            <div key={card.id} className="card">
              <h3 className="card-title">{card.titulo}</h3>
              <p className="card-content">{card.resumo}</p>
              {card.file_url && (
                <a href={card.file_url} className="card-link" target="_blank" rel="noopener noreferrer">
                  Visualizar Arquivo
                </a>
              )}
            </div>
          ))
        ) : (
          <p>Nenhum arquivo disponível no momento.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
