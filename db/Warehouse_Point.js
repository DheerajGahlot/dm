const mongoose = require('mongoose');

const warehousepointSchema = new mongoose.Schema({
    warehousepointtype:String,
    warehousepointname:String,
    warehousepointlatitude:String,
    warehousepointlongitude:String
})

module.exports = mongoose.model("warehousepoints",warehousepointSchema);