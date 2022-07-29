const mongoose = require("mongoose")
const connection = mongoose.connect("mongodb://0.0.0.0:27017/hypernode");
module.exports = connection;