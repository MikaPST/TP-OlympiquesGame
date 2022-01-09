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

        let sport;
        let sportAthletes;
        let athletes;

        try {
            sport = await Sport.findById(req.params.sportId);
            sportAthletes = await Athlete.find().where('_id').in(sport.athletes).exec();
            athletes = await Athlete.find();
        }
        catch (e) {
            console.log("Erreur lors de la récupération des informations")
        }

        res.render('sport-athletes', { sport: sport, sportAthletes: sportAthletes, listAthletes: athletes });
    }

    async updateAthletes(req, res) {

        Sport.updateOne(
            { _id: new ObjectId(req.params.sportId) },
            { $addToSet: { athletes: new ObjectId(req.params.athleteId) } },
            function (err, res) {
                if (err) {
                    res.send(err);
                } else {
                    res.status(200);
                    res.redirect('back');
                }
            }
        );
    }
}

module.exports = SportController;
