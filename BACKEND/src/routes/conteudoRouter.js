const { Router } = require('express');
const router = Router();

const { getConteudo } = require('../controller/usersController');

router.get('/pullData', getConteudo); 

module.exports = router;