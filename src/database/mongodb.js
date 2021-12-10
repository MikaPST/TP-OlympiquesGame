const mongoose = require('mongoose');
const config = require('../../config.js')

process.env.MONGODB_URL = config.database.host;

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));

db.once('open', function () {
    console.log('Connected to the database! ✅');
});
