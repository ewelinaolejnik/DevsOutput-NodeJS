const Sequelize = require('sequelize');
const databaseConnection = require('../database-connection');

const cityDb = databaseConnection.define('city', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING
});

class City {
    
    static cityDb() {
        return cityDb;
    }

    static getAll(columns) {
        return City.cityDb().findAll({
            attributes: columns
        });
    }
}

module.exports = City;