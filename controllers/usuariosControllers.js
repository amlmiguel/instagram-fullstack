const {Usuario,sequelize} = require('../models');

const usuariosControllers = {
    index: async (req, res) => {
        const usuarios = await Usuario.findAll();
        
        return res.render('usuarios', {listaUsuarios: usuarios})
    },
    create: async (req, res) => {
        let {nome, email, senha} = req.body

        let novoUsuario = await Usuario.create({
            nome,
            email,
            senha
        })
        return res.json(novoUsuario)
    },
    update: async (req, res) => {
        let {id} = req.params
        let {nome,email, senha} = req.body
        let alterarUsuario = await Usuario.update({
            nome,
            email,
            senha
        },{
            where: {id} //req.params parametros da URL
        })
        return res.send(alterarUsuario)
    },
    deleta: async (req,res) => {
        let {id} = req.params;

        const usuarioDeletado = await Usuario.destroy({
            where: {id}
        })

        return res.json(usuarioDeletado)
    }

}


module.exports = usuariosControllers;