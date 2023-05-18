const mongoose = require('mongoose');

const nodepointSchema = new mongoose.Schema({
    nodepointtype:String,
    nodepointname:String,
    nodepointlatitude:String,
    nodepointlongitude:String
})

module.exports = mongoose.model("nodepoints",nodepointSchema);