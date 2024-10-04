const { Router } = require('express');
const router = Router();

const { getConteudo } = require('../controller/usersController');

router.get('/pullData', polygonData); //

module.exports = router;