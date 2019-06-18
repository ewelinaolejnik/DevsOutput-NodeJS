const Conference = require('../models/conference');
const City = require('../models/city').cityDb();
const Country = require('../models/country').countryDb();

module.exports.getConferences = (req, res, next) => {
    const columns = ['id', 'name', 'dateFrom', 'dateTo'];
    const include = [{
        model: City,
        attributes: ['id', 'name'],
        include: [{
            model: Country,
            attributes: ['id', 'name']
        }]
    }];

    let where = {};
    if (req.query.name) {
        where.name = req.query.name;
    }
    if (req.query.countryId) {
        include[0].include[0].where = {};
        include[0].include[0].where.id = req.query.countryId;
    }
    if (req.query.cityId) {
        where.cityId = req.query.cityId;
    }

    Conference.getAll(columns, include,
        req.query.page, req.query.pageSize, where)
        .then((conferences) => {
            res.status(200).json(conferences);
        }).catch((err) => {
            console.log(err);
        });
};