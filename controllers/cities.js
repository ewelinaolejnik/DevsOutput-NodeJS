const City = require('../models/city');

module.exports.getCities = (req, res, next) => {
    City.getAll(['id', 'name', 'countryId'])
        .then(cities => {
            res.status(200).json(cities);
        })
        .catch(error => {
            console.log(error);
        });
};