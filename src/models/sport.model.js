'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sportSchema = new mongoose.Schema({
    // _id: Schema.Types.ObjectId,
    name: String,
    category: String,
    athletes : [{ type: Schema.Types.ObjectId, ref: 'Athlete' }]

});

const Sport = mongoose.model('Sport', sportSchema);

module.exports = Sport;
