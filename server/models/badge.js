const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const BadgeSchema = new Schema({
    title: String,
    image: String,
    challengeId: { type: Schema.Types.ObjectId, ref: "Challenge" },
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Badge', BadgeSchema);