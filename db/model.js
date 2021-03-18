let mongoose = require('mongoose')

let schemaName = new mongoose.Schema({
    name: String,
    age: Number,
})

let modelName = mongoose.model("Name", schemaName)
module.exports = modelName