import React, { useState } from 'react';
import axios from 'axios';
import './css.css';

function UploadArquivo() {
  const [formData, setFormData] = useState({
    titulo: '',
    resumo: '',
    file: null,
  });
  const [message, setMessage] = useState('');

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
    axios.post(`http://localhost:3009/api/upload/arquivo`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        setMessage('Arquivo armazenado com sucesso!');
        console.log('Resposta do servidor:', response.data);
        // Resetar o formulário após o upload
        setFormData({ titulo: '', resumo: '', file: null });
      })
      .catch(error => {
        console.error('Erro ao enviar dados para o banco de dados', error);
        setMessage('Erro ao enviar o arquivo. Tente novamente.');
      });
  };

  return (
    <div className="upload-container">
      <h1>Enviar Arquivo</h1>

      {/* Mensagem de feedback ao usuário */}
      {message && <p className="feedback-message">{message}</p>}

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
    </div>
  );
}

export default UploadArquivo;
