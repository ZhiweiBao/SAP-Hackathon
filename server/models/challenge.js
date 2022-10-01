const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Badge = require('./badge');
const passportLocalMongoose = require('passport-local-mongoose');

const ChallengeSchema = new Schema({
    title: String,
    rule: String,
    requiredEventType: String,
    month: Date,
    badgeId: { type: Schema.Types.ObjectId, ref: "Badge" },
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Badge', BadgeSchema);