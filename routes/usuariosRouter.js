const express = require('express');
const router = express.Router();
const usuariosControllers = require('../controllers/usuariosControllers');
const validarCadastro = require('../middleware/ValidarCadastro');


/* GET users listing. */
router.get('/', usuariosControllers.index);

router.get('/registro',  usuariosControllers.registro)

router.get('/login', usuariosControllers.login)

router.post('/', validarCadastro, usuariosControllers.create);

router.put('/:id?', usuariosControllers.update);

router.delete('/:id?', usuariosControllers.deleta);



module.exports = router;