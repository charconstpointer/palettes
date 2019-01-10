const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    person: { type: String },
    name: { type: String },
    start: { type: Date, default: Date.now },
    finish: { type: Date, default: Date.now }

});

module.exports = mongoose.model('Task', TaskSchema);