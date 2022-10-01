const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Badge = require('./badge');


const ChallengeSchema = new Schema({
    title: String,
    rule: String,
    requiredEventType: String,
    month: Date,
    badgeId: { type: Schema.Types.ObjectId, ref: "Badge" },
});



module.exports = mongoose.model('Challenge', ChallengeSchema);