const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, unique: true, dropDups: true },
    password: String,
});

module.exports = mongoose.model('User', UserSchema);