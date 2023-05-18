const mongoose = require('mongoose');

const vehicleloadSchema = new mongoose.Schema({
     vehicletype:String,
     loadtype:String,
     isConnected:String
})

module.exports = mongoose.model("vehicleloads",vehicleloadSchema);