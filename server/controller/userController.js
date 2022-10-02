const User = require('../models/user');

// GET request: get all users as a list
exports.user_list = function (req, res, next) {
    User.find().exec(function (err, user_list) {
        if (err) {
            return res.status(500).json({ message: err });
        }
        res.status(200).json(user_list);
    })
}

// GET request: get one user by Id.
exports.user_detail = function (req, res, next) {
    User.findById(req.params.id).exec(function (err, user) {
        if (err) {
            // return next(err);
            return res.status(500).json({ message: err });
        }
        res.status(200).json(user);
    });
};