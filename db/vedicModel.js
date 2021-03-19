let mongoose = require('mongoose')

let vedicSchema = new mongoose.Schema({
    category: String,
    description: String,
    nagari: String,
    word: String
})

let vedicModel = mongoose.model("Vedic", vedicSchema)
module.exports = vedicModel