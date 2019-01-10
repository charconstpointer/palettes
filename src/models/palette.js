const mongoose = require('mongoose');
const Color = require('./color')

const PaletteSchema = new mongoose.Schema({
    name: { type: String, required: true },
    colors: { type: Array, required: true }
});

module.exports = mongoose.model('Palette', PaletteSchema);