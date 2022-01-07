const Sport = require('../models/sport.model');
const Athlete = require('../models/athlete.model');


class SportController {
    /**
     * Lister tous les sports
     */
    async list(req, res) {
        const sports = await Sport.find();
        res.render('sport', { listSports: sports });
    }

    async athleteList(req, res) {
        const sport = await Sport.findById(req.params.sportId);
        const sportAthletes = await Athlete.find().where('_id').in(sport.athletes).exec();
        const athletes = await Athlete.find();

        res.render('sport-athletes', { sport: sport, sportAthletes: sportAthletes, listAthletes: athletes });
        // res.json({
        //     count: sport.athletes.length,
        //     athletes: sport.athletes
        // })
    }

    // ... A COMPLETER ...
}

module.exports = SportController;
