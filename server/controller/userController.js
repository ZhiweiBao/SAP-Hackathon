const User = require('../models/user');

// GET request: get all users as a list
exports.user_list = function (req, res) {
  User.find().exec(function (err, user_list) {
    if (err) {
      return res.status(500).json({message: err});
    }
    res.status(200).json(user_list);
  })
}

// GET request: get one user by Id.
exports.user_detail = function (req, res) {
  User.findById(req.params.id).exec(function (err, user) {
    if (err) {
      return res.status(500).json({message: err});
    }
    res.status(200).json(user);
  });
};

// GET request: get one user by email.
exports.user_detail_by_email = function (req, res) {
  User.find({email: req.params.email}).exec(function (err, user) {
    if (err) {
      return res.status(500).json({message: err});
    }
    res.status(200).json(user);
  });
};

// PUT request: add event by event id
exports.user_add_event = function (req, res) {
  User.findByIdAndUpdate(req.params.id,
    {
      $addToSet: {
        events: req.params.event_id
      }
    },
    {new: true},
    function (err, newUser) {
      err ? res.status(500).json({message: err}) : res.status(200).json(newUser);
    }
  )
}

// PUT request: remove event by event id
exports.user_remove_event = function (req, res) {
  User.findByIdAndUpdate(req.params.id,
    {
      $pull: {
        events: req.params.event_id
      }
    },
    {new: true},
    function (err, newUser) {
      err ? res.status(500).json({message: err}) : res.status(200).json(newUser);
    }
  )
}