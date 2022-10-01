const Challenge = require("../models/challenge");

// GET request: get one challenge by Id.
exports.challenge_detail = function (req, res, next) {
    Challenge.findById(req.params.id).exec(function (err, user) {
        if (err) {
            // return next(err);
            return res.status(500).json({ message: err });
        }
        res.status(200).json(Challenge);
    });
};