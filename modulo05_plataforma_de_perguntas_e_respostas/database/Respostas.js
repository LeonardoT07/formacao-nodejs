const Sequelize = require('sequelize');
const connection = require('./database');

const Respostas = connection.define('respostas', {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

/* 
 * Vai forçar a sincronização com o banco de dados, ou seja, irá criar a tabela, caso ela não exista. 
 * No caso do parâmetro false, não irá forçar caso a tabela já exista.
 */
Respostas.sync({force: false});

module.exports = Respostas;