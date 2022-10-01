const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Challenge = require('./challenge');

const BadgeSchema = new Schema({
    title: String,
    image: String,
    challengeId: { type: Schema.Types.ObjectId, ref: "Challenge" },
});



module.exports = mongoose.model('Badge', BadgeSchema);