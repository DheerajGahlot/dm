const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    vehicletype:String,
    vehiclecount:String,
    vehiclecapacity:String,
    vehiclesetupcost:String,
    vehiclevariablecost:String
})

module.exports = mongoose.model("vehicles",vehicleSchema);