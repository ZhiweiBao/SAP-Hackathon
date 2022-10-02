const Challenge = require("../models/challenge");

// GET request: get all challenges as a list
exports.challenge_list = function (req, res) {
  Challenge.find().exec(function (err, challenge_list) {
    if (err) {
      return res.status(500).json({message: err});
    }
    res.status(200).json(challenge_list);
  })
}

// GET request: get the latest challenge.
exports.challenge_latest = function (req, res) {
  Challenge.find()
    .sort({date: -1})
    .exec(function (err, challenges) {
      if (err) {
        return res.status(500).json({message: err});
      }
      res.status(200).json(challenges[0]);
    });
};

// GET request: get one challenge by Id.
exports.challenge_detail = function (req, res) {
  Challenge.findById(req.params.id).exec(function (err, challenge) {
    if (err) {
      return res.status(500).json({message: err});
    }
    res.status(200).json(challenge);
  });
};