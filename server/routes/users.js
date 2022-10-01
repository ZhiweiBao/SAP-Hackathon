var express = require('express');
var router = express.Router();
const User = require('../models/user');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('users respond with a resource');
});

router.get('/:id', async function (req, res, next) {
  try {
    // const user = await User.findById("6338b7d0f3a1b6bb62acf747");
    const user = await User.findById(req.params.id);

    // // res.json(user);
    console.log("second user: ", user);
    res.send('user alice');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
