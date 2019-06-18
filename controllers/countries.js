const Country = require('../models/country');

module.exports.getCountries = (req, res, next) => {
    Country.getAll(['id', 'name'])
        .then(countries => {
            res.status(200).json(countries);
        })
        .catch(error => {
            console.log(error);
        });
};