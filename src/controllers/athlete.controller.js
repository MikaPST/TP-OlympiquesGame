const Athlete = require('../models/athlete.model');

class AthleteController {
    /**
     * Lister tous les athletes
     */
    async list(req, res) {
        const athletes = await Athlete.find();
        res.render('athlete', { listAthletes: athletes });
        
    }
}

module.exports = AthleteController;