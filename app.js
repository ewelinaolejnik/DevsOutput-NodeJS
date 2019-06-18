const express = require('express');

const conferencesRoutes = require('./routes/conferences');
const citiesRoutes = require('./routes/cities');
const countriesRoutes = require('./routes/countries');

const databaseConnection = require('./database-connection');

const Country = require('./models/country').countryDb();
const City = require('./models/city').cityDb();
const Conference = require('./models/conference').conferenceDb();

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    next();
});

app.use(conferencesRoutes);
app.use(citiesRoutes);
app.use(countriesRoutes);

Country.hasMany(City);
City.belongsTo(Country);
Conference.belongsTo(City);



databaseConnection.sync()
    .then(result => {
        app.listen(5050);
    })
    .catch(error => {
        console.log(error);
    });

