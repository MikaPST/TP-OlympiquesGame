const Athlete = require('../models/athlete.model');

class AthleteController {
    /**
     * Lister tous les sports
     */
    async list(req, res) {
        const athletes = await Athlete.find();

        res.json({
            count: athletes.length,
            athletes: athletes
        });
    }

    // ... A COMPLETER ...
}

module.exports = AthleteController;
