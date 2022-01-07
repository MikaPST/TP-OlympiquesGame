const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
// const Sport = require('../models/sport.model');

const AthleteController = require('../controllers/athlete.controller');
const SportController = require('../controllers/sport.controller');
const Athlete = require('../models/athlete.model');
const athleteController = new AthleteController();

router.get('/athletes/', async (req, res) => {
    athleteController.list(req,res);
});

router.get('/athletes/:athleteId/sports', async (req, res) => {
    res.send(req.params.athleteId);
    //athleteController.list(req,res);
    //res.render('index'); //désactivé pour le moment voir comment faire pour render que si depuis browser
});

router.post('/athletes/', async (req, res) => {

    const body = req.body;
   
    const athlete = new Athlete({
        firstName: body.firstname,
        lastName: body.name,
        gender: body.genre,
        country: body.country
    });
    athlete.save().then(() => res.send(athlete));
});

// ... A COMPLETER ...

module.exports = router;
