const bcrypt = require('bcryptjs')
const {Usuario,sequelize} = require('../models');


const usuariosControllers = {
    index: async (req, res) => {
        const usuarios = await Usuario.findAll();
        
        return res.render('usuarios', {listaUsuarios: usuarios})
    },
    login: (req,res) => { 
        return res.render('login')


    },
        registro: (req,res) => { /* não é async porque nao espera nenhuma informação do banco de dados */
        return res.render('registro');

    },
    create: async (req, res) => {
        const {nome, email, senha} = req.body

        const senhaCrypt = bcrypt.hashSync(senha,10);
        

        let novoUsuario = await Usuario.create({
            nome,
            email,
            senha: senhaCrypt
        })

        return res.redirect('/usuarios/login');

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