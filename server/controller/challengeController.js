const Challenge = require("../models/challenge");

// GET request: get all challenges as a list
exports.challenge_list = function (req, res, next) {
    Challenge.find().exec(function (err, challenge_list) {
        if (err) {
            return res.status(500).json({ message: err });
        }
        res.status(200).json(challenge_list);
    })
}

// GET request: get one challenge by Id.
exports.challenge_detail = function (req, res, next) {
    Challenge.findById(req.params.id).exec(function (err, challenge) {
        if (err) {
            // return next(err);
            return res.status(500).json({ message: err });
        }
        res.status(200).json(challenge);
    });
};