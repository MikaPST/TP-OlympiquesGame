const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

router.get('/index/', async (req, res) => {
    // sportController.list(req,res);
    res.render('index'); // désactivé pour le moment voir comment faire pour render que si depuis browser
});


// ... A COMPLETER ...

module.exports = router;
