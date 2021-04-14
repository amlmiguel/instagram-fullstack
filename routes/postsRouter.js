const express = require('express');
const router = express.Router();
const usuariosControllers = require('../controllers/postsControllers')


/* GET users listing. */
router.get('/', usuariosControllers.index);
router.post('/', usuariosControllers.create);
router.put('/:id?', usuariosControllers.update);
router.delete('/:id?', usuariosControllers.deleta);



module.exports = router;