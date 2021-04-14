module.exports = (sequelize, DataTypes) => {

    const Post = sequelize.define(
        'Post',{
            texto: DataTypes.STRING,
            img: DataTypes.STRING,
            usuarios_id: DataTypes.INTEGER,
            n_likes: DataTypes.INTEGER
        }, {
            tableName: "posts",
            timestamps: false
        }
    );

    Post.associate = (models) => {
        // relação N:1 (vários posts de 1 usuário)
        Post.belongsTo(models.Usuario, {as: "usuario", foreignKey: "usuarios_id"}) // models é da outra tabela
        //relacao 1:N (usuario tem varios posts)
        Post.hasMany(models.Comentario, {as:'comentarios', foreignKey:'usuarios_id'});
        //relacao N:M (post tem curtidas de varios usuarios)
        Post.belongsToMany(models.Usuario, {
            as: "curtiu",
            through: "curtidas",
            foreignKey: "usuarios_id",
            otherKey: "usuarios_id",
            timestamps: false


        })
    }

    return Post;
}