const Sequelize = require('sequelize');
const databaseConnection = require('../database-connection');
const City = require('./city').cityDb();

const conferenceDb = databaseConnection.define('conference', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: Sequelize.STRING,
        dateFrom: {
            type: Sequelize.DATE,
            allowNull: false
        },
        dateTo: {
            type: Sequelize.DATE,
            allowNull: true
        }
});

class Conference {

    static conferenceDb() {
        return conferenceDb;
    }

    static getAll(columns, include, page, pageSize, where) {
        page = parseInt(page) || 1;
        pageSize = parseInt(pageSize) || 2;
        let searchCriteria = {
            attributes: columns,
            include: include,
            limit: pageSize,
            offset: (page - 1) * pageSize
        };
        if (where) {
            searchCriteria.where = where;
        }
        return conferenceDb.findAndCountAll(searchCriteria);
    }
}

module.exports = Conference;