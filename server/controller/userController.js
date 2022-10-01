const User = require('../models/user');

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