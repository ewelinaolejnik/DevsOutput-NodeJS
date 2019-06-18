const Sequelize = require('sequelize');
const databaseConnection = require('../database-connection');

const countryDb = databaseConnection.define('country', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: Sequelize.STRING
    });

class Country {

    static countryDb() {
        return countryDb;
    }

    static getAll(columns) {
        return Country.countryDb().findAll({
            attributes: columns
        });
    }
}

module.exports = Country;