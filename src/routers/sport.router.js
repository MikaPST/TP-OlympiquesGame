const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const Sport = require('../models/sport.model');

const SportController = require('../controllers/sport.controller');
const sportController = new SportController();

router.get('/sports/', async (req, res) => {
    //sportController.list(req,res);
    res.render('index'); //désactivé pour le moment voir comment faire pour render que si depuis browser
});

router.post('/sports/', async (req, res) => {

    const body = req.body;
    const sport = new Sport({ id: uuidv4(), name: body.name, category: body.category });
    sport.save().then(() => res.send(sport));
});

//Consulter les athlètes d'un sport : GET /api/sports/{sportId}/athletes
router.get('/sports/:sportId/athletes', async (req, res) => {
    res.send(req.params.sportId);
    //sportController.list(req,res);
    //res.render('index'); //désactivé pour le moment voir comment faire pour render que si depuis browser
});

//Ajouter un athlète dans un sport : POST /api/sports/{sportId}/athletes/{athleteId}
router.post('/sports/:sportId/athletes/:athleteId', async (req, res) => {
    res.send(req.params);
    // const body = req.body;
    // const sport = new Sport({ id: uuidv4(), name: body.name, category: body.category });
    // sport.save().then(() => res.send(sport));
});

// ... A COMPLETER ...

module.exports = router;
