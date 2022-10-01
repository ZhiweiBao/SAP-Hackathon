const User = require('../models/user');

module.exports.findById = async (req, res, next) => {

    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (err) {
        next(err);
    }
}