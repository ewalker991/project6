let mongoose = require('mongoose')
require('../database')

let vedicModel = require('./vedicModel.js')
let vedicJson = require('./vedic.json')


vedicModel.deleteMany({})
    .then(response => {
        vedicModel.create(vedicJson)
        .then(information => {
            console.log(information, "Info gotten.")
        })
    })