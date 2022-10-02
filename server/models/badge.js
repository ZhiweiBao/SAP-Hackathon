const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BadgeSchema = new Schema({
    title: String,
    image: String,
    challenge: { type: Schema.Types.ObjectId, ref: "Challenge" },
});

module.exports = mongoose.model('Badge', BadgeSchema);