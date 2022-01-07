const Athlete = require('../models/athlete.model');
const Sport = require('../models/sport.model');
const ObjectId = require('mongoose').Types.ObjectId;

class AthleteController {
    /**
     * Lister tous les athletes
     */
    async list(req, res) {
        const athletes = await Athlete.find();
        res.render('athlete', { listAthletes: athletes });
    }

    async getAthleteSports(req, res) {

        const sports = await Sport.find({ athletes: new ObjectId(req.params.athleteId) });
        res.render('athlete-sports', { listSports: sports });
    }
}

module.exports = AthleteController;