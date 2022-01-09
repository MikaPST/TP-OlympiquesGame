const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const AthleteController = require('../controllers/athlete.controller');
const SportController = require('../controllers/sport.controller');
const Athlete = require('../models/athlete.model');
const athleteController = new AthleteController();

router.get('/athletes/', async (req, res) => {
    athleteController.list(req,res);
});

router.get('/athletes/:athleteId/sports', async (req, res) => {
    athleteController.getAthleteSports(req,res);
});

router.post('/athletes/', async (req, res) => {
    
    const body = req.body;
   
    const athlete = new Athlete({
        firstName: body.firstname,
        lastName: body.name,
        gender: body.genre,
        country: body.country
    });
    athlete.save().then(() => res.redirect('back'));
    
});

module.exports = router;
