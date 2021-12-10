const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const Sport = require('../models/sport.model');

const SportController = require('../controllers/sport.controller');
const sportController = new SportController();

router.get('/sports/', async (req, res) => {
    res.render('index');
});

router.post('/sports/', async (req, res) => {

    const body = req.body;
    const sport = new Sport({ id: uuidv4(), name: body.name, category: body.category });
    sport.save().then(() => res.send(sport));
});

// ... A COMPLETER ...

module.exports = router;
