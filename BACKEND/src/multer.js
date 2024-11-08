const express = require('express');
const multer = require('multer');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const PORT = process.env.PORT;

// Configuração do multer para salvar arquivos localmente
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = 'uploads/';
    cb(null, uploadPath); // Diretório onde os arquivos serão salvos
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Nome único para o arquivo
  }
});
const upload = multer({ storage: storage });

// Configuração do banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root', // Altere para a senha do seu banco de dados
  database: 'nautiscope' // Altere para o nome do seu banco de dados
});

// Verifica a conexão com o banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados MySQL');
  }
});

// Middleware para aceitar JSON e formulários no Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para servir arquivos estáticos (arquivos enviados)
// app.use('/uploads', express.static(path.join(__dirname , 'uploads')));

// Endpoint para buscar todos os dados do banco
app.get('/api/pullData3', (req, res) => {
  const query = "SELECT * FROM files"; // Altere o nome da tabela conforme necessário
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao buscar dados do banco de dados:', err);
      return res.status(500).json({ success: false, message: 'Erro ao buscar dados', err });
    }
    res.status(200).json({ success: true, data: results });
  });
});

// Endpoint POST para fazer upload e salvar no banco de dados
app.post('/api/upload/arquivo', upload.single('file'), (req, res) => {
  const { titulo, resumo } = req.body;
  const file = req.file;

  // Verificação de campos necessários
  if (!titulo || !resumo || !file) {
    return res.status(400).json({ success: false, message: "Faltam informações necessárias para o upload." });
  }

  // Inserir os dados no banco de dados
  const query = "INSERT INTO files (title, description, file_url) VALUES (?, ?, ?)";
  const queryParams = [titulo, resumo, `/uploads/${file.filename}`];

  connection.query(query, queryParams, (err, results) => {
    if (err) {
      console.error("Erro ao inserir dados no banco de dados:", err);
      return res.status(500).json({ success: false, message: "Erro ao inserir dados no banco de dados." });
    }

    res.status(201).json({
      success: true,
      message: "Dados inseridos com sucesso.",
      data: {
        id: results.insertId,
        titulo,
        resumo,
        file_url: `/uploads/${file.filename}`
      }
    });
  });
});



module.exports = upload;
