const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
// const Sport = require('../models/sport.model');

const AthleteController = require('../controllers/athlete.controller');
const Athlete = require('../models/athlete.model');
const athleteController = new SportController();

router.get('/athletes/', async (req, res) => {
    res.render('index');
});

router.post('/athletes/', async (req, res) => {

    const body = req.body;
    const athlete = new Athlete({ id: uuidv4(), name: body.name, category: body.category });
    athlete.save().then(() => res.send(athlete));
});

// ... A COMPLETER ...

module.exports = router;
