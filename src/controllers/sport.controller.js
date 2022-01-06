const Sport = require('../models/sport.model');

class SportController {
    /**
     * Lister tous les sports
     */
    async list(req, res) {
        const sports = await Sport.find();
        console.log(sports);
        res.render('sport',{list:sports});
        // res.json({
        //     count: sports.length,
        //     sports: sports
        // });
    }

    async athleteList(req, res) {
        const sport = await Sport.findById(req.params.sportId);
        res.json({
            count: sport.athletes.length,
            athletes: sport.athletes
        })
    }

    // ... A COMPLETER ...
}

module.exports = SportController;
