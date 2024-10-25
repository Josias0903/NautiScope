const { Router } = require('express');
const router = Router();
const upload = require('../multer');

const { getData1, getData2, getData3, storeArquive } = require('../controller/usersController');

/**
 * @swagger
 * /api/pullData:
 *   get:
 *     summary: Obter dados do conjunto 1.
 *     responses:
 *       200:
 *         description: Lista de dados retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       description:
 *                         type: string
 */
router.get('/pullData', getData1);

/**
 * @swagger
 * /api/pullData2:
 *   get:
 *     summary: Obter dados do conjunto 2.
 *     responses:
 *       200:
 *         description: Lista de dados retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       value:
 *                         type: string
 */
router.get('/pullData2', getData2);

/**
 * @swagger
 * /api/pullData3:
 *   get:
 *     summary: Obter dados do conjunto 3.
 *     responses:
 *       200:
 *         description: Lista de dados retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       detail:
 *                         type: string
 */
router.get('/pullData3', getData3);

/**
 * @swagger
 * /api/upload/arquivo:
 *   post:
 *     summary: Fazer upload de um arquivo.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: O título do arquivo.
 *               resumo:
 *                 type: string
 *                 description: Resumo ou descrição do arquivo.
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Arquivo armazenado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     titulo:
 *                       type: string
 *                     resumo:
 *                       type: string
 *                     file_url:
 *                       type: string
 *                     tipo_arquivo:
 *                       type: string
 *                     tamanho_arquivo:
 *                       type: integer
 *                     data_upload:
 *                       type: string
 *                       format: date-time
 */
router.post('/upload/arquivo', upload.single('file'), storeArquive);

module.exports = router;
