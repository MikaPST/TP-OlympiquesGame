const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const Sport = require('../models/sport.model');

const SportController = require('../controllers/sport.controller');
const sportController = new SportController();

router.get('/sports/', async (req, res) => {
    // sportController.list(req,res);
    res.render('index'); // désactivé pour le moment voir comment faire pour render que si depuis browser
});

router.post('/sports/', async (req, res) => {

    const body = req.body;
    console.log(body);
    const sport = new Sport({
        id: uuidv4(),
        name: body.name,
        category: body.category
    });
    sport.save().then(() => res.send(sport));
});

// ... A COMPLETER ...

module.exports = router;
