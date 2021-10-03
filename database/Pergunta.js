const Sequelize = require("sequelize")
const connection = require("./database")

const Pergunta = connection.define("pergunta", {
    titulo:{
        type: Sequelize.STRING, // textos curtos
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT, // textos longos
        allowNull: false
    }
})

Pergunta.sync({force:false}).then(()=>{
    console.log("Tabela criada com sucesso")
}) // caso não exista, cria e sincroniza a tabela criada

module.exports = Pergunta