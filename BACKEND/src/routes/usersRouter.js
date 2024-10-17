const router = require('express').Router();
const { storeUser, loginUser } = require('../controller/usersController');

router.post('/register', storeUser);
router.post('/login', loginUser); // Nova rota para login

// /**
//  * @swagger
//  * /api/loginUser:
//  *   get:
//  *     summary: Consulta o usuário
//  *     responses:
//  *        200:
//  *           description: Faz a consulta de todos os dados do usuário pelo id
//  *           content:
//  *             application/json:
//  *               schema:
//  *                 type: array
//  *                 items:
//  *                   type: object
//  */
// router.get('/login/:id', selecionarUsuario);

// /**
//  * @swagger
//  * /api/storeUser:
//  *   put:
//  *     summary: Atualiza os dados
//  *     responses:
//  *        200:
//  *           description: Atualiza os dados do usuário
//  *           content:
//  *             application/json:
//  *               schema:
//  *                 type: array
//  *                 items:
//  *                   type: object
//  */
// router.put('/register', atualizarDados);

module.exports = router;
