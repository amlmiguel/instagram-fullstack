const { Usuario } = require('../models')

module.exports = async (req, res, next) => {
    let {email, nome, senha} = req.body
    let user = await Usuario.findAll({ where: {email} } )
    if(user.length){
        res.status(400).json({ erro: "Email já cadastrado" })
    }else{
        if(!nome){
            res.status(400).json({erro: "Nome não informado"})
        }else{
            if(!email){
                res.status(400).json({erro: "E-mail não informado"})
            }else{
                if(!senha){
                    res.status(400).json({erro: "Senha não infomada"})
                }else{
                    if(senha.length > 12){
                        res.status(400).json({erro: "A senha deverá no máximo 12 caracteres"})
                    }else{
                        if(senha.length < 6){
                            res.status(400).json({erro: "A senha deverá conter pelo menos 6 caracteres"})
                        }else{
                            if(user.length){
                                res.status(400).render('registro', {erro: "Email já cadastrado"})
                                return;
                            }else{
                                next();
                            }
                        }
                    }
                }
            }
        }
        
    }
}


