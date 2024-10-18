const express = require('express');
const multer = require('multer');
const mysql = require('mysql');
const app = express();
const PORT = 3005;

// Configuração do MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sua_senha',
  database: 'nome_do_banco_de_dados'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados MySQL');
  }
});

// Configuração do multer para salvar arquivos localmente
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Diretório onde os arquivos serão salvos
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Garante um nome único
  }
});
const upload = multer({ storage: storage });

// Middleware para aceitar JSON no Express
app.use(express.json());

// Endpoint para buscar todos os dados do banco
app.get('/api/pullData3', (req, res) => {
  const query = "SELECT * FROM Files";
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Erro ao buscar dados', err });
    }
    res.status(200).json({ success: true, data: results });
  });
});

// Endpoint POST para fazer upload e salvar no banco de dados
app.post('/api/upload/arquive', upload.single('file'), (req, res) => {
  const { titulo, resumo } = req.body;
  const file = req.file;

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

// Inicializar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
