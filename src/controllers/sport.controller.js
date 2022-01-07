const Sport = require('../models/sport.model');
const Athlete = require('../models/athlete.model');

const ObjectId = require('mongoose').Types.ObjectId;

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

    async updateAthletes(req, res) {

        Sport.updateOne(
            { _id: new ObjectId(req.params.sportId) },
            { $addToSet: { athletes: new ObjectId(req.params.athleteId) } },
            function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            }
        );
    }

    // ... A COMPLETER ...
}

module.exports = SportController;
