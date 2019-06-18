const Sequelize = require('sequelize');

const sequelize = new Sequelize('devsoutput', 'root', 'mysql', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;