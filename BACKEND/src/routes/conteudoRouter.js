const { Router } = require('express');
const router = Router();
const upload = require('../multer')

const { getData1, getData2, getData3, storeArquive } = require('../controller/usersController');

router.get('/pullData', getData1);
router.get ('/pullData2', getData2); 
router.get ('/pullData3', getData3);
router.post('/upload/arquivo', upload.single('file'), storeArquive);

module.exports = router;