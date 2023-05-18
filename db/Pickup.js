const mongoose = require('mongoose');

const pickupSchema = new mongoose.Schema({
    pickupuid:String,
    pickuppname:String,
    pickuppw:String,
    pickuppv:String,
    pickuppp:String
})

module.exports = mongoose.model("pickups",pickupSchema);