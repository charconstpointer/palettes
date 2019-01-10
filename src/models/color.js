const mongoose = require('mongoose');

const ColorSchema = new mongoose.Schema({
    hex: { type: String, required: true, unique: true },
}, { _id: false });

module.exports = mongoose.model('Color', ColorSchema);