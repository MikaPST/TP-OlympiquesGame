const Sport = require('../models/sport.model');

class SportController {
    /**
     * Lister tous les sports
     */
    async list(req, res) {
        const sports = await Sport.find();
        res.render('sport', { listSports: sports });
    }

    async athleteList(req, res) {
        const sports = await Sport.findById(req.params.sportId);
        res.render('sport-athletes', { listSports: sports });
        // res.json({
        //     count: sport.athletes.length,
        //     athletes: sport.athletes
        // })
    }

    // ... A COMPLETER ...
}

module.exports = SportController;
