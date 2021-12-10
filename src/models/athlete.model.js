'use strict';

const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const athleteSchema = new mongoose.Schema({
    // _id: ObjectId,
    firstName: String,
    lastName: String,
    // gender: Gender (FEMALE ou MALE)
    // country: Country (code ISO 3166-1 alpha 2, par exemple : AU, BR, CN, FR, MA, RU, US, etc.)
});

const Athlete = mongoose.model('Athlete', athleteSchema);

module.exports = Athlete;
