const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'B85tawK!@oil', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;

