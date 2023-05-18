const mongoose = require('mongoose');

const reliefpointSchema = new mongoose.Schema({
    reliefpointtype:String,
    reliefpointname:String,
    reliefpointlatitude:String,
    reliefpointlongitude:String
})

module.exports = mongoose.model("reliefpoints",reliefpointSchema);