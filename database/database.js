const Sequelize = require("sequelize");

const connection = new Sequelize('perguntas', 'root', 'cursomysql', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

module.exports = connection