const mongoose = require('mongoose');

const deportpointSchema = new mongoose.Schema({
    deportpointtype:String,
    deportpointname:String,
    deportpointlatitude:String,
    deportpointlongitude:String
})

module.exports = mongoose.model("deportpoints",deportpointSchema);