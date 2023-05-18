const mongoose = require('mongoose');

const transshipmentpointSchema = new mongoose.Schema({
    transshipmentpointtype:String,
    transshipmentpointname:String,
    transshipmentpointlatitude:String,
    transshipmentpointlongitude:String
})

module.exports = mongoose.model("transshipmentpoints",transshipmentpointSchema);