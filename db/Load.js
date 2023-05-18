const mongoose = require('mongoose');

const loadSchema = new mongoose.Schema({
    loaduid:String,
    loadname:String,
    loadlw:String,
    loadlv:String,
    loadlp:String
})

module.exports = mongoose.model("loads",loadSchema);