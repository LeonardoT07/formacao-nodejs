const Sequelize = require('sequelize');
const connection = require('./database');

const Perguntas = connection.define('perguntas', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

/* 
 * Vai forçar a sincronização com o banco de dados, ou seja, irá criar a tabela, caso ela não exista. 
 * No caso do parâmetro false, não irá forçar caso a tabela já exista.
 */
Perguntas.sync({force: false}).then(() => {});

module.exports = Perguntas;