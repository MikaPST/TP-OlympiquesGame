const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const Sport = require('../models/sport.model');
const SportController = require('../controllers/sport.controller');
const sportController = new SportController();

router.get('/sports/', async (req, res) => {
    sportController.list(req, res);
});

router.post('/sports/', async (req, res) => {

    const body = req.body;

    const sport = new Sport({
        name: body.name,
        category: body.category
    });
    sport.save().then(() => res.send(sport));
});

//Consulter les athlètes d'un sport : GET /api/sports/{sportId}/athletes
router.get('/sports/:sportId/athletes', async (req, res) => {
    sportController.athleteList(req, res);
});

//Ajouter un athlète dans un sport : POST /api/sports/{sportId}/athletes/{athleteId}
router.post('/sports/:sportId/athletes/:athleteId', async (req, res) => {
    sportController.updateAthletes(req, res);
});

module.exports = router;