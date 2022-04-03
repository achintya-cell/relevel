//3rd Party Modules
const mongoose = require('mongoose');
const citySchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
});

module.exports = mongoose.model('City', citySchema);
