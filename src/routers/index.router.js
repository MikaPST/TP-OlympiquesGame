const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

router.get('/index/', async (req, res) => {
    res.render('index');
});

module.exports = router;