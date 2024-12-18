const connection = require('../config/db');

async function storeUser(request, response) {
    const params = [
        request.body.nome,
        request.body.email,
        request.body.senha
    ];

    const query = "INSERT INTO users(name,email,password) VALUES(?,?,?);";

    connection.query(query, params, (err, results) => {
        console.log(err)
        if (results) {
            response.status(200).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Sem Sucesso",
                data: results
            });
        }
    });
}

async function loginUser(request, response) {
    const { email, senha } = request.body;

    const query = "SELECT * FROM users WHERE email = ?";

    connection.query(query, [email], (err, results) => {
        if (err) {
            response.status(500).json({
                success: false,
                message: "Erro no servidor",
                error: err
            });
        } else if (results.length > 0) {
            const user = results[0];

            if (senha === user.password) {
                response.status(200).json({
                    success: true,
                    message: "Login bem-sucedido",
                    user: {
                        id: user.id,
                        nome: user.nome,
                        email: user.email
                    }
                });
            } else {
                response.status(401).json({
                    success: false,
                    message: "Senha incorreta"
                });
            }
        } else {
            response.status(404).json({
                success: false,
                message: "Usuário não encontrado"
            });
        }
    });
}


async function getData2(request, response) {
    let query = "SELECT * FROM Polygon1Data;";

    connection.query(query, (err, results) => {
        console.log(err, results)
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: "cebolas choram e sua vitoria é celebrada",
                    data: results
                })
        }
    })
}


async function getData1(request, response) {
    let query = "SELECT * FROM Polygon2Data;";

    connection.query(query, (err, results) => {
        console.log(err, results)
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: "cebolas choram e sua vitoria é celebrada",
                    data: results
                })
        }
    })
}
async function storeArquive(request, response) {
    const { titulo, resumo } = request.body;
    const arquivo = request.file.filename;

    const params = Array(
        titulo,
        resumo,
        arquivo
    );

    console.log(params);

    const query = "INSERT INTO file(titulo,resumo,arquivo) VALUES(?,?,?);";

    connection.query(query, params, (err, results) => {
        console.log(err)
        if (results) {
            response.status(200).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response.status(400).json({
                success: false,
                message: "Sem Sucesso",
                data: results
            });
        }
    });
}



async function getData3(request, response) {
    let query = "SELECT * FROM file;";

    connection.query(query, (err, results) => {
        console.log(err, results)
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: "cebolas choram e sua vitoria é celebrada",
                    data: results
                })
        }
    })
}

// async function getData3(request, response) {
//     const query = `
//     SELECT id, 
//     FROM file
//     WHERE file.id = ?`;

//     connection.query(query,(err, results) => {
//         if (err) {
//             return response.status(500).json({
//                 success: false,
//                 message: "Erro no servidor",
//                 error: err
//             });
//         }

//         if (results.length > 0) {
//             // Inicia a construção da string HTML
//             let html = '<ul>';
//             results.forEach(row => {
//                 // variavel que recebe o return da função
//                 // Substitua 'nome_do_jogo' pela lógica correta para obter o nome do jogo a partir do id_jogo
//                 const filename = row.filename; // Ajuste isso para pegar o nome real do jogo
//                 html += `<li>${filename}</li>`;
//             });
//             html += '</ul>';

//             return response.send(html);
//         } else {
//             return response.status(404).json({
//                 success: false,
//                 message: "Request não encontrado"
//             });
//         }
//     });
// }
module.exports = {
    storeUser,
    getData2,
    getData1,
    getData3,
    storeArquive,
    loginUser
}
