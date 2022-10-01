var express = require('express');
var router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', async function (req, res, next) {
  try {
    const user = await User.findById("6338b7d0f3a1b6bb62acf747");
    res.json(user);
    console.log("user: ", user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;


