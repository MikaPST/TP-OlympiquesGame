'use strict';

const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const athleteSchema = new mongoose.Schema({
    // _id: mongoose.ObjectId,
    firstName: String,
    lastName: String,
    gender: String, // (FEMALE ou MALE)
    country: String // (code ISO 3166-1 alpha 2, par exemple : AU, BR, CN, FR, MA, RU, US, etc.)
});

const Athlete = mongoose.model('Athlete', athleteSchema);

module.exports = Athlete;