let mongoose = require('mongoose')
require('../database')

// REQUIRE YOUR MODELS OR JSONS IF APPLICABLE HERE
// EX: let housesModel = require('<file directory here>')
let modelName = require('./model.js')
let infoJson = require('./info.json')


// YOUR CRUD OPERATIONS FOR YOUR DATA HERE
// ex: housesModel.deleteMany({})
//         .then(response => {
//             charactersModel.create(characterData)
//             .then(characters => {
//                 console.log(characters.length, "created")
//             })
//         })

modelName.deleteMany({})
    .then(response => {
        modelName.create(infoJson)
        .then(information => {
            console.log(information, "Info gotten.")
        })
    })