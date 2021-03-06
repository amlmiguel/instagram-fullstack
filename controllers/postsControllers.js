const {Post,sequelize} = require('../models');
const { post } = require('../routes');

const postsControllers = {
    index: async (req, res) => {
        const posts = await Post.findAll({
            include: ['usuario','comentarios','curtiu']
        });

        return res.render('index', {listaPosts: posts});
    },
    create: async (req, res) => {
        let {texto, img, usuarios_id, n_likes} = req.body

        let novoPost = await Post.create({
            texto,
            img,
            usuarios_id,
            n_likes
        })
        return res.json(novoPost)
    },
    update: async (req, res) => {
        let {id} = req.params
        let {texto, img, usuarios_id, n_likes} = req.body
        let alterarPost = await Post.update({
            texto, 
            img, 
            usuarios_id, 
            n_likes
        },{
            where: {id} //req.params parametros da URL
        })
        return res.send(alterarPost)
    },
    deleta: async (req,res) => {
        let {id} = req.params;

        const postDeletado = await Post.destroy({
            where: {id}
        })

        return res.json(postDeletado)
    },
    show: async (req, res) => {
        let {id} = req.params;
        let mostrarPosts = await Post.findAll({
            where: {usuarios_id: id}
        })
        return res.json(mostrarPosts)
    
    }

}


module.exports = postsControllers;